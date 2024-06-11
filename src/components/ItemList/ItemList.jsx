import Item from '../Item/Item'
import { Flex } from 'antd'

const ItemList = ({items}) => {
    return (
        <>
            <Flex wrap gap={'large'}>
                { items.map(item => <Item key={item.id} item={item} />) }
            </Flex>
        </>
    )
}

export default ItemList