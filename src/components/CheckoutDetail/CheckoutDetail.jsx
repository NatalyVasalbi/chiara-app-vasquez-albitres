import { Button, Descriptions, Flex, Form, Input } from 'antd'
import React from 'react'

const CheckoutDetail = ({onFinish, cartDetails}) => {
  return (
    <Flex gap={'large'}>
      <Form
        name="basic"
        layout='vertical'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{ width: '30%' }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre"
          name="name"
          rules={[
            {
              required: true,
              message: 'Por favor ingresa tu nombre!',
            },
          ]}
        >
          <Input placeholder='Ingrese su nombre'/>
        </Form.Item>

        <Form.Item
          label="Correo electrónico"
          name="email"
          rules={[
            {
              required: true,
              message: 'Por favor ingresa tu correo electrónico!',
            },
          ]}
        >
          <Input placeholder='Ingrese su correo electrónico'/>
        </Form.Item>

        <Form.Item
          label="Teléfono"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: 'Por favor ingresa tu correo teléfono!',
            },
          ]}
        >
          <Input placeholder='Ingrese su teléfono'/>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Finalizar compra
          </Button>
        </Form.Item>
      </Form>
      <Descriptions items={cartDetails} layout="vertical" bordered style={{ width: '70%' }}>
      </Descriptions>
    </Flex>
  )
}

export default CheckoutDetail