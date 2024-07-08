import React from 'react'
import { InputNumber } from 'antd';

const ItemQuantitySelector = ({ handleUpdateQuantity }) => {
  const onChange = (value) => {
    handleUpdateQuantity(value)
  }

  return (
    <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} />
  )
}

export default ItemQuantitySelector