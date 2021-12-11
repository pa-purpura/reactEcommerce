import { useEffect, useState } from "react"
import api from "../util/api"
import Product from "../components/Product"

export default function Home () {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const res = await api.getProducts()

        console.log(res)
        setData(res.data.products)
      } catch (err) {
        console.warn(err)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <>
      <h1>HomePage</h1>

      {loading
        ? 'Loading'
        : data.length
          ?
          <div>
            {data.map(product => (
              <Product
                key={product.id}
                data={product}
              />
            ))}
          </div>
          : 'Nessun prodotto trovato'
      }
    </>
  )
}