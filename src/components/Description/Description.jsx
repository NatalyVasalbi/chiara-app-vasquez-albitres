import React from 'react'
import { Descriptions } from 'antd'

const Description = ({item}) => {

  const createDescription = (item) => {
    let itemDetail= [
      {
        key: '1',
        label: 'Nombre',
        children: item.name,
      },
      {
        key: '2',
        label: 'Categoria',
        children: item.category,
      },    
      {
        key: '3',
        label: 'Descripción',
        children: item.description,
      },
      {
        key: '4',
        label: 'Precio',
        children: item.price
      }
    ]

    if (item.quantity && item.quantity > 0) {
      itemDetail.push({
        key: '5',
        label: 'Cantidad',
        children: item.quantity,
      })

      itemDetail.push({
        key: '6',
        label: <b>{'SubTotal'}</b>,
        children: <b>{item.price * item.quantity}</b>
      })
    }

    return itemDetail
  }

  return (
    <Descriptions title="Detalle" bordered items={createDescription(item)}/>
  )
}

export default Description