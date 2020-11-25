export default interface CreateProductRequest {
  name: string
  description: string
  price: number
  quantity: number
  category: number
  photos?: Array<File>
}
