import { Button, Card, Flex } from 'antd'
import React from 'react'
import Description from '../Description/Description';

const CartItem = ({cartItem, cartRemoveItem}) => {
  const { Meta } = Card;

  return (
    <Flex gap={'large'}>
      <Card
      style={{
        width: 240,
      }}
      cover={<img alt="example" src={cartItem.img} />}
      actions={[
        <Button type="primary" onClick={() => { cartRemoveItem(cartItem.id) }}>Eliminar producto</Button>
      ]}>
        <Meta />
      </Card>
      <Description item={cartItem}/>
    </Flex>
  )
}

export default CartItem