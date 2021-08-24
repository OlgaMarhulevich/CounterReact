export default 1
/*import {AppStateType} from "../redux/store";

export const loadState = () => {
    try {
        const startValue = localStorage.getItem('start value');
        const maxValue = localStorage.getItem('max value');
        if (startValue === null || maxValue === null) {
            return undefined;
        }
        return {
            counter: {
                counter: JSON.parse(startValue),
                maxValue: JSON.parse(maxValue),
                startValue: JSON.parse(startValue)
            }
        }
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: AppStateType) => {
    try {
        const startValue = JSON.stringify(state.counter.startValue);
        const maxValue = JSON.stringify(state.counter.maxValue);
        localStorage.setItem('start value', startValue);
        localStorage.setItem('max value', maxValue);
    } catch {
        // ignore write errors
    }
};*/
