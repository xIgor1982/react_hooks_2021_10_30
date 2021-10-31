import {useEffect, useMemo, useState} from "react";
import {Box, Button} from "@mui/material";

function complexComputed(num) {
    let i = 0
    while (i < 1000000000) i++
    return num * 2
}

export default function HooksUseMemo() {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)
    //
    // const style = {
    //     backgroundColor: colored ? 'darkred' : 'black',
    //     color: 'white',
    //     padding: "10px 25px",
    //     borderRadius: "10px"
    // }

    // const style = useMemo(() => {
    //     return {
    //         backgroundColor: colored ? 'darkred' : 'black',
    //         color: 'white',
    //         padding: "10px 25px",
    //         borderRadius: "10px"
    //     }
    // })

    const style = useMemo(() => ({
            backgroundColor: colored ? 'darkred' : 'black',
            color: 'white',
            padding: "10px 25px",
            borderRadius: "10px"
        }), [colored])

    const computed = useMemo(() => {
        return complexComputed(number)
    }, [number])

    useEffect(() => {
        console.log('Styles changed')
    }, [style])

    return (
        <div style={{border: "3px solid green", padding: "10px", margin: "5px"}}>
            <h1 style={{textAlign: "center"}}>Хук - useMemo()</h1>
            <hr/>
            <h2 style={style}>Вычисляемое свойство: {number}</h2>
            <h2>Сложное вычисляемое свойство: {computed}</h2>

            <Box mt={2}>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ mr: 1}}
                    onClick={() => setNumber(prev => prev + 1)}
                >
                    Добавить
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    sx={{ mr: 1}}
                    onClick={() => setNumber(prev => prev - 1)}
                >
                    Убрать
                </Button>
                <Button
                    variant="contained"
                    color="warning"
                    sx={{ mr: 1}}
                    onClick={() => setColored(prev => !prev)}
                >
                    Изменить
                </Button>
            </Box>
        </div>
    )
}