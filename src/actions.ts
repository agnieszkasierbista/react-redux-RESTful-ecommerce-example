export const TOGGLE_CURRENCY_DROPDOWN_VISIBILITY = "TOGGLE_CURRENCY_DROPDOWN_VISIBILITY";
export const INIT = "INIT";
export const INIT_SUCCESS = "INIT_SUCCESS";

export function init() {
    return {
        type: INIT
    }
}

export function toggleIsExtended() {
    return {
        type: TOGGLE_CURRENCY_DROPDOWN_VISIBILITY
    }
}