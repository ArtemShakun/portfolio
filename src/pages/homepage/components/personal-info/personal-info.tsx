import Image from 'next/image';

import { ButtonComponent } from '@/components/button/button';
import userPhoto from '@/img/logo.png';

import styles from './personal-info.module.css';

export const PersonalInfo = () => {
  return (
    <div className={styles.devInfoBlock}>
      <div className={styles.userImg}>
        <Image src={userPhoto} alt="user photo" width={220} height={205} />
      </div>
      <div className={styles.userInfo}>
        <div className={styles.userInfoText}>
          <h3 className={styles.userRole}>Frontend Developer</h3>
          <h1 className={styles.userName}>Artem Shakun.</h1>
          <p className={styles.text}>
            I&apos;m a Frontend developer based in San Francisco
          </p>
          <span className={styles.buttonWrapper}>
            <ButtonComponent />
          </span>
        </div>
      </div>
    </div>
  );
};
