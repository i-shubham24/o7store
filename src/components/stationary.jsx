import React, { useState } from "react"

function Stationery({ onTotal }) {
  const [item, setItem] = useState("Pen")
  const [qty, setQty] = useState("")
  const [result, setResult] = useState(null)

  const prices = { Pen: 10, Notebook: 50, Stapler: 120, Marker: 30 }

  function calc() {
    const q = parseInt(qty)
    if (!q) return
    const price = prices[item]
    const subtotal = q * price
    const discount = q > 20 ? subtotal * 0.1 : 0
    const total = subtotal - discount
    setResult({ item, q, price, subtotal, discount, total })
    onTotal(total)
  }

  return (
    <div>
      <h3>Stationery</h3>
      <select value={item} onChange={e => setItem(e.target.value)}>
        <option>Pen</option>
        <option>Notebook</option>
        <option>Stapler</option>
        <option>Marker</option>
      </select>
      <input type="number" value={qty} onChange={e => setQty(e.target.value)} placeholder="Quantity" />
      <button onClick={calc}>Add</button>
      {result && (
        <div>
          <p>Product: {result.item}</p>
          <p>Quantity: {result.q}</p>
          <p>Subtotal: ₹{result.subtotal}</p>
          <p>Discount: ₹{result.discount}</p>
          <p>Total: ₹{result.total}</p>
        </div>
      )}
    </div>
  )
}
export default Stationery
