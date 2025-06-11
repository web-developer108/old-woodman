import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import styles from './home.module.scss'

const Home = () => {
  return(
    <ToolPageLayout>
      <div className={styles.homePageContainer}>
        <section className={styles.hero}>

          </section>
      </div>
    </ToolPageLayout>
  )
}
export default Home