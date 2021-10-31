import MyMain from "./Alert/MyMain";
import MyAlert from "./Alert/MyAlert";
import {AlertProvider} from "./Alert/AlertContext";

export default function HooksUseContext() {
    //1 Вариант
    // const [alert, setAlert] = useState(false)
    //
    // const toggleAlert = () => setAlert(prev => !prev)
    //
    // return (
    //     <AlertContext.Provider value={alert}>
    //         <div style={{border: "3px solid green", padding: "10px", margin: "5px"}}>
    //             <h1 style={{textAlign: "center"}}>Хук - useContext()</h1>
    //             <hr/>
    //             <MyAlert />
    //             <MyMain toggle={toggleAlert} />
    //         </div>
    //     </AlertContext.Provider>
    // )

    //2 Вариант
    return (
            <AlertProvider>
                <div style={{border: "3px solid green", padding: "10px", margin: "5px"}}>
                    <h1 style={{textAlign: "center"}}>Хуки - useContext() и useReducer</h1>
                    <hr/>
                    <MyAlert />
                    <MyMain toggle={() => {}} />
                </div>
            </AlertProvider>
    )
}