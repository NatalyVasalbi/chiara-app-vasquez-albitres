import { useState } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import { Menu, Flex, Typography  } from 'antd'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'
const { Title } = Typography
const items = [
  {
    label: (
      <Link to='/'>HOME</Link>
    ),
    key: 'home',
    icon: <AppstoreOutlined />
  },
  {
    label: (
      <Link to='/category/new'>NEW IN</Link>
    ),
    key: 'new'
  },
  {
    label: (
      <Link to='/category/basics'>BASICS</Link>
    ),
    key: 'basics'
  },
  {
    key: 'pants',
    label: (
      <Link to='/category/pants'>PANTS</Link>
    ),
  },
  {
    key: 'complements',
    label: (
      <Link to='/category/complements'>COMPLEMENTS</Link>
    ),
  }
];
const NavBar = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <><div>
        <Title>
          <Link to={'/'}>CHIARA LUNA</Link>
        </Title>
      </div>
      <Flex gap="middle" ><Menu className="menu" value="horizontal" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      <CartWidget value="horizontal" /> </Flex></>
  )
  
}
export default NavBar