import { useState, useEffect } from 'react'
import servises from '../../../services/callsList'
import ListItem from './ListItem/ListItem';

import './List.scss'

const List = () => {
    const [items, renderItem] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await servises.get();

            renderItem(response)
        })()
    }, []);
    return (
        items.length ? <ul className='numbers-list'>
            {items.map(item => <ListItem item={item} key={item.id} />)}
        </ul> : null
    )
}



export default List