import { startTransition } from 'react'
import { useCallback, useEffect, useReducer, useRef } from 'react'

const initialState = (): FetchState => {
const data = null
  const isLoading = false
  const isError = false

  return { data, isLoading, isError }
}

interface FetchState<T = any> {
    data: T| null;
    isLoading: boolean;
    isError: boolean;
}

interface FetchInitAction {
    type: 'FETCH_INIT';
}

interface FetchSuccessAction<T = any> {
    type: 'FETCH_SUCCESS';
    payload: T;
}

interface FetchErrorAction {
    type: 'FETCH_ERROR';
}

type FetchAction<T = any> =
    | FetchInitAction
    | FetchSuccessAction<T>
    | FetchErrorAction;

function fetchReducer<T = any>(state: FetchState<T>, action: FetchAction<T>): FetchState<T> {
    switch (action.type) {
        case 'FETCH_INIT': {
            return { ...state, isLoading: true, isError: false }
        }
        case 'FETCH_SUCCESS': {
            return { ...state, isLoading: false, data: action.payload }
        }
        case 'FETCH_ERROR': {
            return { ...state, isLoading: false, isError: true }
        }
        default:
            throw new Error('Unknown action: ' + (action as any).type)
    }
}

interface UseFetchConfig {
    transitionOnSuccess?: boolean;
    immediate?: boolean;
}

interface UseFetchResult<T = any> extends FetchState<T> {
    refetch: () => Promise<void>;
    cancel: () => void;
}

export function useFetch<T = any>(
    url: string,
    options: RequestInit = {},
    config: UseFetchConfig = {}
): UseFetchResult<T> {
    const { transitionOnSuccess = false, immediate = true } = config;
    const [state, dispatch] = useReducer(fetchReducer, initialState());

    const reqIdRef = useRef<number>(0); //track latest request to ignore stale responses
    const controllerRef = useRef<AbortController | null>(null);
    const renderCountRef = useRef<number>(0);

    const fetchData = useCallback(async (): Promise<void> => {
        if (!url) return;

        controllerRef.current?.abort(); // Abort any previous in-flight request
        const controller = new AbortController();
        controllerRef.current = controller;

        const reqId = ++reqIdRef.current; // Increment request ID

        dispatch({ type: 'FETCH_INIT' });
        try {
            const response = await fetch(url, {
                ...options,
                signal: controller.signal,
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data: T = await response.json();

            if (reqId !== reqIdRef.current) {
                // If this response is not from the latest request, ignore it
                return;
            }
            const apply = () => {
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            };

            if (transitionOnSuccess) {
                startTransition(apply); // makes UI transition smoother as heavy data is non-urgent
            } else {
                apply();
            }
        } catch (error: any) {
            if (error?.name === 'AbortError') {
                console.log('Fetch aborted');
                return;
            }
            if (reqId !== reqIdRef.current) {
                return; //stale
            }
            dispatch({ type: 'FETCH_ERROR' });
        }
    }, [url, options, transitionOnSuccess]); //Memomize options to prevent infinite loop in called component

    useEffect(() => {
        if (immediate) {
            fetchData();
        }

        return () => {
            controllerRef.current?.abort();
        };
    }, [fetchData, immediate]);

    renderCountRef.current += 1;
    if (process.env.NODE_ENV !== 'production') {
        console.log('useFetch renders:', renderCountRef.current);
    }

    return {
        ...state,
        refetch: fetchData,
        cancel: () => controllerRef.current?.abort(),
    };
}
