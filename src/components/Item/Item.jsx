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
            description={item.description}
        />
    </Card>
  )
}

export default Item