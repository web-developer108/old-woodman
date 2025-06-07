import { useEffect, useState } from 'react'
import { HeaderBar } from '../../components/header-bar/header-bar.tsx';

type Product = {
  id: number
  name: string
  price: number
  description: string

}

const Temporary = () => {
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
      <HeaderBar></HeaderBar>
     <div style={{height:'500px', fontSize:'48px'}}> Страница находится в стадии разработки </div>
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
    </>
  )
}

export default Temporary
