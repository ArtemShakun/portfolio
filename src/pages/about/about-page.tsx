import { About } from '@/types/aboutpage-type';

import styles from './aboutpage.module.css';
import { ProfileComponent } from '../homepage/components/profile/profile';
import { TogetherBlock } from '../homepage/components/together/together';

type AboutPageProps = {
  data: About;
};

export const AboutPage = ({ data }: AboutPageProps) => {
  const profile = {
    title: 'Profiles',
    sub_title: 'Stay with me',
    link: '/contact-me',
  };

  const together = {
    title: 'Let&apos;s <br /> work <span>together</span>',
    link: '/contact-me',
  };
  return (
    <div className={styles.container}>
      <div className={styles.upperSection}>
        <div className={styles.photo} />
        <div className={styles.wrapper}>
          <div className={styles.title}></div>
          <div className={styles.userInfo}></div>
        </div>
      </div>
      <div className={styles.middleSection}>
        <div className={styles.experience}></div>
        <div className={styles.education}></div>
      </div>
      <div className={styles.bottomSection}>
        <ProfileComponent profile={profile} />
        <TogetherBlock together={together} />
        <div className={styles.userInfo}></div>
      </div>
    </div>
  );
};
