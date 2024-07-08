import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, Flex } from 'antd'
import AddItemButton from '../AddItemButton/AddItemButton';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';
import Description from '../Description/Description';
import { Link } from 'react-router-dom';
import './ItemDetail.css'
const { Meta } = Card;

const ItemDetail = ({item}) => {
  const [ itemState, setItemState ] = useState({})
  const quantityRef = useRef(1)
  const handleUpdateQuantity = (value) => {
    quantityRef.current = value
    return quantityRef.current
  }

  useEffect(() => {
    setItemState(item)
  }, [])

  const getItemQuantity = () => {
    return quantityRef.current
  }

  return (
    <>
      <Flex gap={'large'}>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src={itemState.img}
            />
          }
          actions={[
            <ItemQuantitySelector handleUpdateQuantity={handleUpdateQuantity} />,
            <AddItemButton setItemState={setItemState} item={itemState} getItemQuantity={getItemQuantity}/>
          ]}
        >
          <Meta
            title={itemState.name}
            description={itemState.description}
          />
        </Card>
        <Flex vertical gap={'large'}>
          <Description item={item} />
          {itemState?.quantity > 0 ? <Link to={'/cart'}><Button type="primary">Finalizar compra</Button></Link> : <></>}
        </Flex>
      </Flex>
    </>
  )
}

export default ItemDetail