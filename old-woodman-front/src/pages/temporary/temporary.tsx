import { useEffect, useState } from 'react'
import '../../App.css'

type Product = {
  id: number
  name: string
  price: number
  description: string

}

const Temporary=()=> {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => {
        if (!res.ok) throw new Error('Ошибка запроса')
        return res.json()
      })
      .then((data) => {
        if (Array.isArray(data.data)) {
          setProducts(data.data)
        } else {
          console.warn('Неправильный формат данных:', data)
        }
      })
      .catch((err) => {
        console.error('Ошибка при загрузке продуктов:', err)
      })
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
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
              <div key={product.id}>
                <h3>{product.name}</h3>
                <p>Цена: {product.price}</p>
                <p>{product.description}</p>
              </div>
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

export default Temporary
