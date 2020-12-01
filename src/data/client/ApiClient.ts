import Api from '@data/client/Api'
import Category from '@domain/entities/Category'
import Product from '@domain/entities/Product'
import GetUser from '@domain/usecases/user/GetUser'
import generateHeader from '@domain/utils/headers/indes'

const ApiClient = {
  getCategorys: async function (): Promise<Array<Category>> {
    return (await Api.get<Array<Category>>('categorys')).data
  },

  getCategory: async function (id: number): Promise<Category> {
    return (await Api.get<Category>(`categorys/${id}`)).data
  },

  createCategory: async function (name: string): Promise<Category> {
    const user = GetUser()
    return (
      await Api.post<Category>(
        'categorys',
        { name },
        {
          headers: generateHeader(user.privateKey, user.email)
        }
      )
    ).data
  },

  updateCategory: async function (id: number, name: string): Promise<Category> {
    return (await Api.post<Category>(`categorys/${id}`, { name })).data
  },

  deletCategory: async function (id: number): Promise<void> {
    const user = GetUser()
    return (
      await Api.delete<void>(`categorys/${id}`, {
        headers: generateHeader(user.privateKey, user.email)
      })
    ).data
  },

  getProducts: async function (): Promise<Array<Product>> {
    return (await Api.get<Array<Product>>('products')).data
  },

  getProduct: async function (id: number): Promise<Product> {
    return (await Api.get<Product>(`products/${id}`)).data
  },

  createProduct: async function (requestForm: FormData): Promise<Product> {
    const user = GetUser()
    return (
      await Api.post<Product>('products', requestForm, {
        headers: generateHeader(user.privateKey, user.email)
      })
    ).data
  },

  deleteProduct: async function (id: number): Promise<void> {
    const user = GetUser()
    return (
      await Api.delete<void>(`products/${id}`, {
        headers: generateHeader(user.privateKey, user.email)
      })
    ).data
  }
}

export default ApiClient
