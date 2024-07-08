import { Flex } from 'antd'
import React, { useContext, useState } from 'react'
import { Typography, Spin } from 'antd';
import { ShopContext } from '../../context/shopContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/client';
import CheckoutDetail from '../CheckoutDetail/CheckoutDetail';
import Brief from '../Brief/Brief';

const { Title } = Typography

const Checkout = () => {
  const { cart, clear } = useContext(ShopContext)
  const [idCompra, setIdCompra] = useState(0)
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    const data = {
      buyer: {
        name: values.name,
        phone: values.phoneNumber,
        email: values.email
      },
      items: cart,
      total: total
    }

    setLoading(true)
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, data)
      .then(({id}) => {
        setLoading(false)
        setIdCompra(id)
        clear()
    })
  }

  const total = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity)
  }, 0)

  const cartDetails= [
    {
      key: '1',
      label: 'Productos',
      span: 3,
      children: (
        <>
          {cart.map((item) => {
            return <div key={item.name}>{item.name} X {item.quantity} = {item.price * item.quantity}</div>
          })}
        </>
      )
    },
    {
      key: '2',
      label: 'Total',
      children: <b>S/ {total}</b>,
    }
  ]

  return (
    <>
      <Flex vertical gap={'large'}>
        <Title level={3}>Checkout</Title>
        { idCompra != 0 ?
          <Brief idCompra={idCompra}/>
          :
          loading ? <Spin/> : <CheckoutDetail onFinish={onFinish} cartDetails={cartDetails} />
        }
      </Flex>
    </>
  )
}

export default Checkout