import {Box, Button} from "@mui/material";
import {useState} from "react";

function computeInitialCounter() {
    console.log('Some calculations...')
    return Math.trunc(Math.random() * 20)
}

const styleSection = {
    border: "1px solid black",
    margin: "5px",
    padding: "15px",
    borderRadius: "5px"
}

export default function HooksUseState() {
    const [counter, setCounter] = useState(0)
    // const [counter2, setCounter2] = useState(computeInitialCounter())
    const [counter2, setCounter2] = useState(() => computeInitialCounter())
    const [state, setState] = useState({
        title: 'Счетчик',
        date: Date.now()
    })

    function increment() {
        // setCounter(counter + 1)
        // setCounter(prev => prev + 1)
        setCounter((prevCounter) => {
            return prevCounter + 1
        })
    }

    function decrement() {
        setCounter(counter - 1)
    }

    function increment2() {
        // setCounter(counter + 1)
        // setCounter(prev => prev + 1)
        setCounter2((prevCounter) => {
            return prevCounter + 1
        })
    }

    function decrement2() {
        setCounter2(counter2 - 1)
    }

    function updateStateTitle() {
        setState(prev => {
            return {
                ...prev,
                title: 'Новое значение'
            }
        })
    }

    return (
        <div style={{border: "3px solid green", padding: "10px", margin: "5px"}}>
            <h1 style={{textAlign: "center"}}>Хук - useState()</h1>
            <section style={styleSection}>
                <h2>1) Счетчик</h2>
                <h3>Число: {counter}</h3>
                <Box m={1}>
                    <Button
                        variant="contained"
                        sx={{ mr: 1}}
                        color="success"
                        onClick={increment}
                    >
                        Добавит
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={decrement}
                    >
                        Убрать
                    </Button>
                </Box>
            </section>
            <section style={styleSection}>
                <h2>2) Счетчик с начальным рандомным значением</h2>
                <h3>Число: {counter2}</h3>
                <Box m={1}>
                    <Button
                        variant="contained"
                        sx={{ mr: 1}}
                        color="success"
                        onClick={increment2}
                    >
                        Добавит
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={decrement2}
                    >
                        Убрать
                    </Button>
                </Box>
            </section>
            <section style={styleSection}>
                <pre>{JSON.stringify(state, null, 2)}</pre>

                <Box m={1}>
                    <Button
                        variant="contained"
                        sx={{ mr: 1}}
                        color="success"
                        onClick={updateStateTitle}
                    >
                        Изменить название
                    </Button>
                </Box>
            </section>
        </div>

    )
}