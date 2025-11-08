import React, { useState } from "react"

function Printing({ onTotal }) {
  const [pages, setPages] = useState("")
  const [type, setType] = useState("bw")
  const [result, setResult] = useState(null)

  function calc() {
    const p = parseInt(pages)
    if (!p) return
    const price = type === "bw" ? 5 : 10
    const fee = urgent ? 50 : 0
    const subtotal = p * price + fee
    const discount = p > 100 ? p * price * 0.1 : 0
    const total = subtotal - discount
    setResult({ p, type, fee, subtotal, discount, total })
    onTotal(total)
  }

  return (
    <div>
      <h3>Printing</h3>
      <input type="number" value={pages} onChange={e => setPages(e.target.value)} placeholder="Pages" />
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="bw">Black & White</option>
        <option value="color">Color</option>
      </select>
      <button onClick={calc}>Add</button>
      {result && (
        <div>
          <p>Pages: {result.p}</p>
          <p>Type: {result.type}</p>
          <p>Urgent Fee: ₹{result.fee}</p>
          <p>Subtotal: ₹{result.subtotal}</p>
          <p>Discount: ₹{result.discount}</p>
          <p>Total: ₹{result.total}</p>
        </div>
      )}
    </div>
  )
}
export default Printing
