import useSWR from 'swr'

export default function useProducts() {
  const { data, error } = useSWR('products')
  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}
