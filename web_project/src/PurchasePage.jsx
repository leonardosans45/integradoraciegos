import { useState } from 'react'
import bastonImage from './assets/bastonprueba.jpg'
import './PurchasePage.css'

function PurchasePage({ onBackToHome }) {
  const [quantity, setQuantity] = useState(1)

  const price = 2499.99

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  const handleBuyNow = () => {
    alert('¡Compra realizada con éxito!')
  }

  return (
    <div className="purchase-page">
      <div className="product-container">
        <div className="product-images">
          <div className="main-image">
            <img src={bastonImage} alt="Bastón Inteligente" />
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title">
          Smart cane - Intelligent walking stick with GPS and fall detection
          </h1>

          <div className="price-section">
            <div className="current-price">
              ${price.toLocaleString('es-MX')}
            </div>
         
          </div>

          <div className="quantity-selector">
            <label>quantity:</label>
            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(-1)}>-</button>
              <span className="quantity-display">{quantity}</span>
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>
          </div>

          <div className="action-buttons">
            <button className="buy-now-btn" onClick={handleBuyNow}>
              buy it now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PurchasePage
