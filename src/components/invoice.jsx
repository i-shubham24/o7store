import React from "react"

function Invoice({ name, stationeryTotal, printingTotal }) {
  const subtotal = stationeryTotal + printingTotal
  const tax = subtotal * 0.1
  const delivery = 50
  const total = subtotal + tax + delivery
  const id = Math.floor(Math.random() * 100000)

  return (
    <div>
      <h3>Invoice</h3>
      <p>Order ID: {id}</p>
      <p>Name: {name}</p>
      <p>Date: {date}</p>
      <p>Stationery Total: ₹{stationeryTotal}</p>
      <p>Printing Total: ₹{printingTotal}</p>
      <p>Tax (10%): ₹{tax}</p>
      <p>Delivery: ₹{delivery}</p>
      <h4>Grand Total: ₹{total}</h4>
    </div>
  )
}
export default Invoice
