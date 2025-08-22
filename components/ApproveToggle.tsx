'use client';
import { useTransition } from 'react';

export default function ApproveToggle({ id, approved, onChanged }: { id: string; approved: boolean; onChanged: (a: boolean) => void }) {
  const [isPending, start] = useTransition();
  return (
    <button
      className={"btn " + (approved ? "border-green-700 bg-green-800/30" : "border-slate-700")}
      onClick={() => {
        start(async () => onChanged(!approved));
      }}
      disabled={isPending}
      aria-pressed={approved}
      aria-label={approved ? "Unapprove review" : "Approve review"}
    >
      {approved ? "Approved" : "Approve"}
    </button>
  );
}
