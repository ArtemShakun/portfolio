import Image from 'next/image';

import { ButtonComponent } from '@/components/button/button';
import { userData } from '@/types/homepage-type';
import userPhoto from '@/img/logo.png';

import styles from './personal-info.module.css';

type PersonalInfoProps = {
  userData: userData;
};

export const PersonalInfo = ({ userData }: PersonalInfoProps) => {
  return (
    <div className={styles.devInfoBlock}>
      <div className={styles.userImg}>
        <Image src={userPhoto} alt="user photo" width={220} height={205} />
      </div>
      <div className={styles.userInfo}>
        <div className={styles.userInfoText}>
          <h3 className={styles.userRole}>{userData.role}</h3>
          <h1 className={styles.userName}>{userData.name}</h1>
          <p className={styles.text}>{userData.sub_title}</p>
          <span className={styles.buttonWrapper}>
            <ButtonComponent url={userData.link} />
          </span>
        </div>
      </div>
    </div>
  );
};
