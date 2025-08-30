import { zClass } from "./utils"

//readable state text to avoid color-only meaning
 export const stateText = (value: number, peers: number[], invert = false) => {
    const cls = zClass(value, peers, invert)
    if (cls === 'danger-level') return 'Below peers'
    if (cls === 'warning-level') return 'Slightly below peers'
    if (cls === 'success-level') return 'Above peers'
    return 'In line with peers'
  }


