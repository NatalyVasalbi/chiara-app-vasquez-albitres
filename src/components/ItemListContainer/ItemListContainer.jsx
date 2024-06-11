import { useState, useEffect } from 'react'
import { getItems } from '../../data/asyncmock'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        getItems(categoryId)
          .then(res => setItems(res))
          .catch(err => console.error('Error al obtener los items', err))
      }, [categoryId])

    return <>{items ? <ItemList items={items} /> : <div>Cargando...</div>}</>
}
export default ItemListContainer