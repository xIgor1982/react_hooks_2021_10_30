import {useCallback, useMemo, useState} from "react";
import {Box, Button} from "@mui/material";
import ItemsList from "./ItemsList";


export default function HooksUseCallback() {
    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(1)

    const style = {
        backgroundColor: colored ? 'darkred' : 'black',
        color: 'white',
        padding: "10px 25px",
        borderRadius: "10px"
    }

    // const generateItemsFromAPI = () => {
    //     return new Array(count).fill('').map((_, i) => `Элемент ${i + 1}`)
    // }

    // const generateItemsFromAPI = useCallback(() => {
    //     return new Array(count).fill('').map((_, i) => `Элемент ${i + 1}`)
    // }, [count])

    const generateItemsFromAPI = useCallback((indexNumber) => {
        return new Array(count).fill('').map((_, i) => `Элемент ${i + indexNumber}`)
    }, [count])

    return (
        <div style={{border: "3px solid green", padding: "10px", margin: "5px"}}>
            <h1 style={{textAlign: "center"}}>Хук - useCallback()</h1>
            <hr/>
            <h2 style={style}>Количество элементов: {count}</h2>

            <Box mt={2}>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ mr: 1}}
                    onClick={() => setCount(prev => prev + 1)}
                >
                    Добавить
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    sx={{ mr: 1}}
                    onClick={() => setCount(prev => prev - 1)}
                >
                    Уменьшить
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

            <ItemsList getItems={generateItemsFromAPI} number={42}></ItemsList>
        </div>
    )
}