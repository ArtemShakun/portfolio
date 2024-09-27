import { ButtonComponent } from '@/components/button/button';

import styles from '../component.module.css';

export const TogetherBlock = () => {
  return (
    <div className={`${styles.container} ${styles.wrapperContainerTogether}`}>
      <h1 className={styles.titleInfo}>
        Let&apos;s <br /> work <span>together</span>
      </h1>
      <ButtonComponent />
    </div>
  );
};
