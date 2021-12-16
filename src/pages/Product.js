import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../util/api"

export default function Product() {
  const { id } = useParams()

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  console.log()

  useEffect(() => {
    (async () => {
      try {
        const res = await api.getProduct(id)
        // console.log('product', res)
        setData(res.data)
      } catch (err) {
        if (err.response) {
          console.warn('response error', err.response)
        } else {
          console.error("An error occurred")
        }
      } finally {
        setLoading(false)
      }
    })()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {loading
        ? 'Loading'
        : data
          ?
          // d-flex flex-wrap
          <div class="card w-75" style={{ marginTop: 80 }}>
            <div class="card-body">
              <h5 class="card-title">{data.name}</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <a href="#" class="btn btn-primary">Button</a>
            </div>
          </div>
          : 'Product not found'
      }
    </>
  )
}