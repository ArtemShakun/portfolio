import { About } from '@/types/aboutpage-type';

import styles from './aboutpage.module.css';

type AboutPageProps = {
  data: About;
};

export const AboutPage = ({ data }: AboutPageProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.upperSection}></div>
      <div className={styles.middleSection}></div>
      <div className={styles.bottomSection}></div>
    </div>
  );
};
