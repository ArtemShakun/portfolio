import Image from 'next/image';

import { ButtonComponent } from '@/components/button/button';
import { blockInfo } from '@/types/homepage-type';
import linkedinIcon from '@/img/soc/linkedin-icon.svg';
import gitHubIcon from '@/img/soc/github-icon.svg';

import styles from '../component.module.css';

type ProfileComponentProps = {
  profile: blockInfo;
};

export const ProfileComponent = ({ profile }: ProfileComponentProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.imgWrapperProfile}>
        <Image src={linkedinIcon} alt="signature" width={50} height={50} />
        <Image src={gitHubIcon} alt="signature" width={50} height={50} />
      </span>
      <div className={styles.signatureInfo}>
        <div>
          <h3 className={styles.subTitle}>{profile.sub_title}</h3>
          <h1 className={styles.title}>{profile.title}</h1>
        </div>
        <ButtonComponent url={profile.link} />
      </div>
    </div>
  );
};
