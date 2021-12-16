import axios from "axios"

const axiosInstance = axios.create({ baseURL: 'http://localhost:8080/' })

const api = {
  getProducts: () => {
    return axiosInstance.get('products')
  },
  getProduct: (id) => {
    return axiosInstance.get(`product/${id}`)
  },
  getCart: () => {
    return axiosInstance.get('cart')
  },
  addToCart: (id, data) => {
    return axiosInstance.post(`addToCart/${id}`, data)
  },
  updateCart: (id, data) => {
    return axiosInstance.post(`updateCart/${id}`, data)
  },
  emptyCart: () => {
    return axiosInstance.get('emptyCart')
  },
  checkOut: () => {
    return axiosInstance.get('checkout')
  },
  getUser: (data) => {
    return axiosInstance.post('login', data)
  },
}

window.api = api
export default api
