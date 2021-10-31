import {Box, Button} from "@mui/material";
import {useAlert} from "./AlertContext";

export default function MyMain() {
    const {show, hide} = useAlert()

    return (
        <>
            <h2>Привет в примере с Context</h2>
            <Box >
                <Button
                    variant="contained"
                    color="success"
                    sx={{mr: 1}}
                    onClick={() => show('Этот текст из MyMain.js')}
                >
                    Показать alert
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    sx={{mr: 1}}
                    onClick={hide}
                >
                    Скрыть alert
                </Button>
            </Box>

        </>
    )
}