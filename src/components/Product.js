export default function Product ({
  data
}) {
  return (
    <div className="product">
      <div className="product__name">{data.name}</div>
    </div>
  )
}