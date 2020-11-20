import useSWR from 'swr'
import Product from '../entities/Product'

export default function useProducts() {
  const { data, error } = useSWR<Array<Product>>('products')
  return {
    products: data,
    isLoading: !error && !data,
    isError: error
  }
}
