import React, {useContext, useReducer} from 'react'

//1 Вариант
// const AlertContext = React.createContext()
// const AlertToggleContext = React.createContext()
//
// export const useAlert = () => {
//     return useContext(AlertContext)
// }
//
// export const useAlertToggle = () => {
//     return useContext(AlertToggleContext)
// }
//
// export const AlertProvider = ({ children }) => {
//     const [alert, setAlert] = useState(false)
//
//     const toggle = () => setAlert(prev => !prev)
//
//     return (
//         <AlertContext.Provider value={alert}>
//             <AlertToggleContext.Provider value={toggle}>
//                 {children}
//             </AlertToggleContext.Provider>
//         </AlertContext.Provider>
//     )
// }


//2 вариант
// const AlertContext = React.createContext()
//
// export const useAlert = () => {
//     return useContext(AlertContext)
// }
//
// export const AlertProvider = ({children}) => {
//     const [alert, setAlert] = useState(false)
//     const toggle = () => setAlert(prev => !prev)
//
//     return (
//         <AlertContext.Provider value={{
//             visible: alert,
//             toggle
//         }}
//         >
//             {children}
//         </AlertContext.Provider>
//     )
// }

//3 Вариант с useReducer()
const SHOW_ALERT = 'show'
const HIDE_ALERT = 'hide'
const AlertContext = React.createContext()

export const useAlert = () => {
    return useContext(AlertContext)
}

const reducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALERT: return {...state, visible: true, text: action.text}
        case HIDE_ALERT: return {...state, visible: false}
        default: return state
    }
}

export const AlertProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {
        visible: false,
        text: ''
    })

    const show = text => dispatch({type: SHOW_ALERT, text})
    const hide = () => dispatch({type: HIDE_ALERT})

    return (
        <AlertContext.Provider value={{
            visible: state.visible,
            text: state.text,
            show,
            hide
        }}
        >
            {children}
        </AlertContext.Provider>
    )
}