import Image from 'next/image';

import { ButtonComponent } from '@/components/button/button';
import signatureImg from '@/img/signature.png';
import myWorkImg from '@/img/my_works.png';

import styles from './experience.module.css';

export const ExperienceBlock = () => {
  return (
    <div className={styles.experienceBlock}>
      <div className={styles.projectsAnimation}>
        <p>
          Latest work and featured Latest work and featured * Latest work and
          featured Latest work and featured * Latest work and featured Latest
          work and featured *
        </p>
      </div>
      <div className={styles.moreInfoBlock}>
        <Image src={signatureImg} alt="signature" width={200} height={120} />
        <div className={styles.signatureInfo}>
          <div>
            <h3 className={styles.subTitle}>more about me</h3>
            <h1 className={styles.title}>Credentials</h1>
          </div>
          <ButtonComponent />
        </div>
      </div>
      <div className={styles.moreInfoBlock}>
        <Image src={myWorkImg} alt="signature" width={200} height={120} />
        <div className={styles.signatureInfo}>
          <div>
            <h3 className={styles.subTitle}>ShowCase</h3>
            <h1 className={styles.title}>Projects</h1>
          </div>
          <ButtonComponent />
        </div>
      </div>
    </div>
  );
};
