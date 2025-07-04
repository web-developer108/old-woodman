//import bgLarge from '../../../public/images/doors/bg-large.webp';
//import bgMedium from '../../../public/images/doors/bg-medium.webp';
//import bgSmall from '../../../public/images/doors/bg-small.webp';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { usePageTranslate } from '../../hooks/page-translate/page-translate';
import { PictureHeader } from '../../components/picture-header/picture-header';
import styles from './doors.module.scss'



const DoorsOverview = () => {
  const { t } = usePageTranslate();
console.log('DoorsOverview')

  return (
    <ToolPageLayout>
      <div className={styles.doorsContainer}>
        <PictureHeader
          title={t('main-header')}
          label={t('main-header.label')}
          images={{
            small: '/images/doors/bg-small.webp',
            medium: '/images/doors/bg-medium.webp',
            large: '/images/doors/bg-large.webp',
          }}
        />
      </div>
    </ToolPageLayout>
  )
}

export default DoorsOverview