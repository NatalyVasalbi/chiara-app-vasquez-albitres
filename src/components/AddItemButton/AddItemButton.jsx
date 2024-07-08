import React, { useContext, } from 'react'
import { Button } from 'antd';
import { ShopContext } from '../../context/shopContext';

const AddItemButton = ({ setItemState, item, getItemQuantity }) => {
  const { addItem, updateItem, isInCart } = useContext(ShopContext)

  const handleClick = () => {
    item = {...item, quantity: getItemQuantity()}

    if (isInCart(item.id)){
      updateItem(item)
    }
    else {
      addItem(item)
    }

    setItemState(item)
  }  

  return (
    <Button type="primary" onClick={() => { handleClick() }}>Agregar</Button>
  )
}

export default AddItemButton