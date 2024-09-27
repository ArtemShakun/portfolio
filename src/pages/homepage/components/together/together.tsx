import Image from 'next/image';

import { ButtonComponent } from '@/components/button/button';
import blogIcon from '@/img/blog_icon.png';
import styles from './together.module.css';

export const TogetherBlock = () => {
  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.titleInfo}>
        Let&apos;s <br /> work <span>together</span>
      </h1>
      <ButtonComponent />
    </div>
  );
};
