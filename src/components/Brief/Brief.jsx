import { Flex, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const { Title } = Typography

const Brief = ({idCompra}) => {
  return (
    <Flex vertical>
      <Title level={5}>Compra finalizada con éxito!</Title>
      <Title level={5}>Código de compra: {idCompra}</Title>
      <Title level={5}><Link to={'/'}>Realizar otra compra.</Link></Title>
    </Flex>
  )
}

export default Brief