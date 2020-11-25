import Api from '@data/client/Api'
import Category from '@domain/entities/Category'
import Product from '@domain/entities/Product'

const ApiClient = {
  getCategorys: async function (): Promise<Array<Category>> {
    return (await Api.get<Array<Category>>('categorys')).data
  },

  getCategory: async function (id: number): Promise<Category> {
    return (await Api.get<Category>(`categorys/${id}`)).data
  },

  createCategory: async function (name: string): Promise<Category> {
    return (await Api.post<Category>('categorys', { name })).data
  },

  updateCategory: async function (id: number, name: string): Promise<Category> {
    return (await Api.post<Category>(`categorys/${id}`, { name })).data
  },

  deletCategory: async function (id: number): Promise<void> {
    return (await Api.delete<void>(`categorys/${id}`)).data
  },

  getProducts: async function (): Promise<Array<Product>> {
    return (await Api.get<Array<Product>>('products')).data
  },

  getProduct: async function (id: number): Promise<Product> {
    return (await Api.get<Product>(`products/${id}`)).data
  },

  createProduct: async function (requestForm: FormData): Promise<Product> {
    return (await Api.post<Product>('products', requestForm)).data
  },

  deleteProduct: async function (id: number): Promise<void> {
    return (await Api.delete<void>(`products/${id}`)).data
  }
}

export default ApiClient
