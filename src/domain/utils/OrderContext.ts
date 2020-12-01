import IOrderContext from '@domain/entities/IOrdersContext'
import { createContext } from 'react'

const OrderContext = createContext<IOrderContext>({})
export default OrderContext
