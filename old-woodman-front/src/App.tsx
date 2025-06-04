import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
type Product = {
  id: number
  attributes: {
    name: string
    price: number
    description: string
  }
}

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data)
      })
      .catch((err) => {
        console.error('Ошибка при загрузке продуктов:', err)
      })
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <h2>📦 Продукты из CMS:</h2>
        {products.length === 0 ? (
          <p>Нет товаров</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <strong>{product.attributes.name}</strong> — {product.attributes.price} ₸
                <br/>
                <small>{product.attributes.description}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
