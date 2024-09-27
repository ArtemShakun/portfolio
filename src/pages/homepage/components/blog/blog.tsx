import Image from 'next/image';

import { ButtonComponent } from '@/components/button/button';
import blogIcon from '@/img/blog_icon.png';
import styles from '../component.module.css';

export const BlogComponent = () => {
  return (
    <div className={styles.container}>
      <span className={styles.imgWrapper}>
        <Image src={blogIcon} alt="signature" width={150} height={120} />
      </span>
      <div className={styles.signatureInfo}>
        <div>
          <h3 className={styles.subTitle}>ShowCase</h3>
          <h1 className={styles.title}>Projects</h1>
        </div>
        <ButtonComponent />
      </div>
    </div>
  );
};
