import {Box, Button, Input} from "@mui/material";
import {useEffect, useRef, useState} from "react";

// let renderCount = 1

export default function HooksUseRef() {
    // const [renderCount, setRenderCount] = useState(1)

    const [value, setValue] = useState('initial')
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    const prevValue = useRef('')

    // Переход в бесконечный цыкл
    // useEffect(() => {
    //     setRenderCount(prev => prev + 1)
    // })

    // useEffect(() => {
    //     renderCount++
    // })

    useEffect(() => {
        renderCount.current++
    })

    //Получение прошлого состояние
    useEffect(() => {
        prevValue.current = value
    }, [value])

    const focus = () => inputRef.current.focus()

    return (
        <div style={{border: "3px solid green", padding: "10px", margin: "5px"}}>
            <h1 style={{textAlign: "center"}}>Хук - useRef()</h1>
            <hr/>
            <h2>Количество рендеров = {renderCount.current}</h2>
            <h2>Прошлое состояние = {prevValue.current}</h2>
            <hr/>
            {/*<Input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}></Input>*/}
            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
            <Box mt={2}>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ mr: 1}}
                    onClick={focus}
                >
                    Переход на поле input
                </Button>
            </Box>
        </div>
    )
}