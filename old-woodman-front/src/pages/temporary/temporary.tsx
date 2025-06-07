import { useEffect, useState } from 'react'
import { ColorButton } from '../../components/buttons/color-button/color-button.tsx';
import { TelegramIcon } from '../../components/icons/telegram-icon/telegram-icon.tsx';
import { WhatsappIcon } from '../../components/icons/whatsapp-icon/whatsapp-icon.tsx';
import { InstagramIcon } from '../../components/icons/instagram-icon/instagram-icon.tsx';
import { CircleButton } from '../../components/buttons/circle-button/circle-button.tsx';
import { AppColors } from '../../styles.ts';
import { SocialPanel } from '../../components/social-panel/social-panel.tsx';
import { HeaderBar } from '../../components/header-bar/header-bar.tsx';

type Product = {
  id: number
  name: string
  price: number
  description: string

}

const Temporary = () => {
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
      <HeaderBar></HeaderBar>
      <div style={{ width: '200px' }}>

          <ColorButton
            label='кнопка'
            variant='green'
            icon={<InstagramIcon/>}
          />
        </div>
        <div style={{ width: '500px' }}>

         <SocialPanel/>
        </div>
        <a href="https://react.dev" target="_blank">
        </a>

      <div style={{ width: '56px', height: '56px', display: 'flex' }}>
        <CircleButton bgColor={AppColors.button.green}
                      icon={<WhatsappIcon color={AppColors.text.light} size='30'/>}></CircleButton>
      </div>
      <div style={{ width: '48px', height: '48px', display: 'flex' }}>
        <CircleButton bgColor={AppColors.button.green}
                      icon={<WhatsappIcon color={AppColors.text.light}/>}></CircleButton>
      </div>
      <div style={{ width: '48px', height: '48px', display: 'flex' }}>
        <CircleButton bgColor={AppColors.button.blue}
                      icon={<TelegramIcon backgroundColor = {AppColors.text.light} arrowColor={AppColors.button.blue}/>}></CircleButton>
      </div>
      <div style={{ width: '48px', height: '48px', display: 'flex' }}>
        <CircleButton
                      icon={<InstagramIcon/>}></CircleButton>
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
