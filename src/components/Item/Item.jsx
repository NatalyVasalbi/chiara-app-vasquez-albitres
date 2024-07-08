import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
const { Meta } = Card;

const Item = ({item}) => {
  return (
    <Card
        style={{ width: 300 }}
        cover={
            <img
            alt="example"
            src={item.img}
            />
        }
        actions={[
            <Link to={`/item/${item.id}`}>Ver detalle del producto</Link>
        ]}
        >
        <Meta
            title={item.name} 
            description= {
              <>
                <p>Descripción: {item.description}</p>
                <p>Precio: S/ {item.price}</p>
              </>
            }
        />
    </Card>
  )
}

export default Item