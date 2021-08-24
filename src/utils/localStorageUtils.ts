export default 1
/*
import {AppStateType} from "../redux/store";

export const loadState = () => {
    try {
        const startValue = localStorage.getItem('start value');
        const maxValue = localStorage.getItem('max value');
        if (startValue === null || maxValue === null) {
            return undefined;
        }
        return [JSON.parse(startValue), JSON.parse(maxValue)];
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: AppStateType) => {
    try {
        const startValue = JSON.stringify(state.counter.startValue);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};*/
