import './App.css';
import {Container, CustomInput} from "@mui/material";
import {Input} from "@mui/icons-material";
import {useState} from "react";
// import HooksUseState from "./components/HooksUseState";
// import HooksUseEffects from "./components/HooksUseEffect";
// import HooksUseRef from "./components/HooksUseRef";
// import HooksUseMemo from "./components/HooksUseMemo";
// import HooksUseCallback from "./components/HooksUseCallback";
// import HooksUseContext from "./components/HooksUseContext";

function App() {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')

    const changeHandlerName = event => {
        setName(event.target.value)
    }

    const changeHandlerLastName = event => {
        setLastName(event.target.value)
    }

    return (
        // <Container>
        //     <HooksUseContext />
        //     <HooksUseCallback />
        //     <HooksUseMemo />
        //     <HooksUseRef />
        //     <HooksUseEffects />
        //     <HooksUseState />
        // </Container>
        <div style={{textAlign: 'center'}}>
            <input type="text" value={name} onChange={changeHandlerName} style={{lineHeight: "40px", fontSize: "25px", marginTop: "20px"}} placeholder="name" />
            <input type="text" value={lastName} onChange={changeHandlerLastName} style={{lineHeight: "40px", fontSize: "25px", marginTop: "20px"}} placeholder="last name"/>
            <h1>Name: {name}</h1>
            <h1>Last name: {lastName}</h1>
        </div>
    );
}

export default App;
