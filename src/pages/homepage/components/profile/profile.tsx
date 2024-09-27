import Image from 'next/image';

import { ButtonComponent } from '@/components/button/button';
import linkedinIcon from '@/img/soc/linkedin-icon.svg';
import gitHubIcon from '@/img/soc/github-icon.svg';

import styles from '../component.module.css';

export const ProfileComponent = () => {
  return (
    <div className={styles.container}>
      <span className={styles.imgWrapperProfile}>
        <Image src={linkedinIcon} alt="signature" width={50} height={50} />
        <Image src={gitHubIcon} alt="signature" width={50} height={50} />
      </span>
      <div className={styles.signatureInfo}>
        <div>
          <h3 className={styles.subTitle}>Stay with me</h3>
          <h1 className={styles.title}>Profiles</h1>
        </div>
        <ButtonComponent />
      </div>
    </div>
  );
};
