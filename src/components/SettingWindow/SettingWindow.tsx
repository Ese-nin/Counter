import React, {useCallback, useState} from 'react';
import s from "./SettingWindow.module.css";
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../state/store";
import {
    changeMaxValueAC,
    changeMinValueAC,
    changeWarningAC,
    setSaveValueAC
} from "../../state/reducers/counterReducer";
import {InputWithSpan} from "../Input/InputWithSpan";

type SettingWindowPropsType = {
    minValue: string
    maxValue: string
    settingHandler: () => void
}

const SettingWindow = React.memo((props: SettingWindowPropsType) => {

    const {minValue, maxValue, settingHandler} = props

    const warning = useSelector<RootStateType, string>(state => state.counter.warning)

    const dispatch = useDispatch()

    const [minView, setMinView] = useState(minValue)
    const [maxView, setMaxView] = useState(maxValue)

    // проверка на ошибку и изменение значения инпута, если ошибки нет
    const minValueChange = useCallback((value: string) => {
        if (+maxValue <= +value || +value < 0) {
            dispatch(changeWarningAC('warn'))
        } else {
            dispatch(changeWarningAC(''))
        }
        dispatch(changeMinValueAC(value))
    }, [maxValue]);

    const maxValueChange = useCallback((value: string) => {
        if (+minValue >= +value || +value < 0) {
            dispatch(changeWarningAC('warn'))
        } else {
            dispatch(changeWarningAC(''))
        }
        dispatch(changeMaxValueAC(value))
    }, [minValue])

    const setValueHandler = useCallback(() => {
        if (Number.isInteger(+minValue) && Number.isInteger(+maxValue)) {
            dispatch(setSaveValueAC())
            setMinView(minValue)
            setMaxView(maxValue)
            settingHandler()
        }
    }, [minValue, maxValue])

    const defaultMinValue = "0"
    const defaultMaxValue = "5"

    // сброс значений на дефолтные
    const defaultValueHandler = useCallback(() => {
        minValueChange(defaultMinValue)
        maxValueChange(defaultMaxValue)
        if (warning) {
            dispatch(changeWarningAC(''))
        }
    }, [])

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.display}>

                    <InputWithSpan
                        minView={minView}
                        maxView={maxView}
                        title={'MIN VALUE'}
                        minValue={minValue}
                        maxValue={maxValue}
                        warning={warning}
                        valueChange={minValueChange}
                    />

                    <InputWithSpan
                        minView={minView}
                        maxView={maxView}
                        title={'MAX VALUE'}
                        minValue={minValue}
                        maxValue={maxValue}
                        warning={warning}
                        valueChange={maxValueChange}
                    />

                </div>
                <div className={s.buttons}>
                    <Button disable={warning} name="save" callBack={setValueHandler}/>
                    <Button name="default" callBack={defaultValueHandler}/>
                </div>
            </div>
        </div>
    );
});

export default SettingWindow;