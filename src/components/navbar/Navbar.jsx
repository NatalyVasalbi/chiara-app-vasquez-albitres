import { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Flex } from 'antd';
import CartWidget from '../cart-widget/CartWidget';
import './Navbar.css'
const items = [
  {
    label: 'NEW IN',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'HOME',
    key: 'home',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'BASICOS',
    key: 'basicos',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    key: 'blusas-tops',
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        BLUSAS Y TOPS
      </a>
    ),
  },
  {
    key: 'sets',
    label: 'COMFY SETS'
  },
  {
    key: 'pantalones',
    label: 'PANTALONES'
  },
  {
    key: 'complementos',
    label: 'COMPLEMENTOS'
  },
  {
    key: 'sale',
    label: 'SALE'
  },
  {
    key: 'ultimas',
    label: 'ULTIMAS EN STOCK'
  }
];
const Navbar = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <><div>
          <h1>CHIARA LUNA</h1>
      </div>
      <Flex gap="middle" ><Menu className="menu" value="horizontal" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      <CartWidget value="horizontal" /> </Flex></>
  )
  
}
export default Navbar