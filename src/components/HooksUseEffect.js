import {Box, Button} from "@mui/material";
import {useEffect, useState} from "react";

export default function HooksUseEffects() {
    const [type, setType] = useState('users')
    const [data, setDate] = useState([])
    const [pos, setPos] = useState({
        x: 0,
        y: 0
    })

    // useEffect(() => {
    //     console.log('render')
    // })

    useEffect(() => {
        console.log('ComponentDidMount')
    }, [])

    const mouseMoveHandler = event => {
        setPos({
            x: event.clientX,
            y: event.clientY
        })
    }


    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler)

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setDate(json))
    }, [type])

    return (
        <div style={{border: "3px solid green", padding: "10px", margin: "5px"}}>
            <h1 style={{textAlign: "center"}}>Хук - useEffect()</h1>
            <hr/>
            <h2>Ресурс: {type}</h2>
            <Box>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ mr: 1}}
                    onClick={() => setType('users')}
                >
                    Пользователи
                </Button>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ mr: 1}}
                    onClick={() => setType('todos')}
                >
                    Задачи
                </Button>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ mr: 1}}
                    onClick={() => setType('posts')}
                >
                    Посты
                </Button>
            </Box>

            <pre>{JSON.stringify(pos, null, 2)}</pre>
            <hr/>
            <div style={{scrollDirection: "horizontal"}}>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>

        </div>
    )
}