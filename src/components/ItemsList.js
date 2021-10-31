import {useEffect, useState} from "react";


export default function ItemsList ({getItems, number}) {

    const [items, setItems] = useState([])

    useEffect(() => {
        const newItems = getItems(number)
        setItems(newItems)
        console.log('render')
    }, [getItems])

    return (
        <ul>
            {items.map(i => <li key={i}>{i}</li>)}
        </ul>
    )
}