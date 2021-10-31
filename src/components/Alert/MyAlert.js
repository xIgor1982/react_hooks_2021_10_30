import {Alert, AlertTitle} from "@mui/material";
import {useAlert} from "./AlertContext";


export default function MyAlert() {
    const alert = useAlert()

    if (!alert.visible) return null

    return (
        <Alert severity="warning" onClick={alert.hide}>
            <AlertTitle>Warning</AlertTitle>
            This is a warning alert — <strong>check it out!</strong>
            <h3>Текст из MyMain: {alert.text}</h3>
        </Alert>
    )
}