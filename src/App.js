import React, { useState } from "react"
import Nav from "./nav"
import Stationery from "./stationery"
import Printing from "./printing"
import Invoice from "./invoice"

function App() {
  const [stationeryTotal, setStationeryTotal] = useState(0)
  const [printingTotal, setPrintingTotal] = useState(0)
  const [customerName, setCustomerName] = useState("")

  return (
    <div>
      <Nav />
      <input placeholder="Customer Name" value={customerName} onChange={e => setCustomerName(e.target.value)} />
      <Stationery value={setStationeryTotal} />
      <Printing value={setPrintingTotal} />
      <Invoice name={customerName} stationeryTotal={stationeryTotal} printingTotal={printingTotal} />
    </div>
  )
}
export default App
