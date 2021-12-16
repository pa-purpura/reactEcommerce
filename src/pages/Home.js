import { useEffect, useState } from "react"
import api from "../util/api"
import Product from "../components/Product"
import Card from "../components/Card"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const res = await api.getProducts()
        // console.log(res)
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
      {loading
        ? 'Loading'
        : data.length
          ?
          <div className="d-flex flex-wrap">
            {data.map((product, key) => (
              <Card
                key={key}
                data={product}
              />
            ))}
          </div>
          : 'Nessun prodotto trovato'
      }
    </>
  )
}