import React from 'react'

const Content = () => {
  return (
    <div className="border border-amber-600 mt-5 mx-6 p-8 rounded-lg text-lg text-brown-500">
      <p>สินค้า</p>
      <br />
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ textAlign: "center" }}>
          <img src="/americano.jpg" alt="americano" width={100} />
          <p>Americano</p>
          <p>ราคา: 45 บาท</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src="/Cappuccino.jpg" alt="Cappuccino" width={100} />
          <p>Cappuccino</p>
          <p>ราคา: 50 บาท</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src="/Espresso.jpg" alt="Espresso" width={100} />
          <p>Espresso</p>
          <p>ราคา: 40 บาท</p>
        </div>
      </div>
    </div>
  )
}
export default Content