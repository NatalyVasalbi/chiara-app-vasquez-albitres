import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getItemById } from '../../data/asyncmock'

const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const { itemId } = useParams()

    useEffect(() => {
        getItemById(itemId)
            .then(res => setItem(res))
            .catch(err => console.error('Error al obtener los productos', err))
    }, [])

  return (
    <>
        { item ? <ItemDetail item={item}/> : <div>Cargando...</div> }
    </>
  )
}

export default ItemDetailContainer