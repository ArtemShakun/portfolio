import Image from 'next/image';

import { ButtonComponent } from '@/components/button/button';
import { blockInfo } from '@/types/homepage-type';
import signatureImg from '@/img/signature.png';
import myWorkImg from '@/img/my_works.png';

import styles from '../component.module.css';

type ExperienceBlockProp = {
  companyName: string[];
  moreAbout: blockInfo;
  projects: blockInfo;
};

export const ExperienceBlock = ({
  companyName,
  moreAbout,
  projects,
}: ExperienceBlockProp) => {
  return (
    <div className={styles.experienceBlock}>
      <div className={styles.projectsAnimation}>
        <p>{companyName.map(item => `${item} * `)}</p>
      </div>
      <div className={styles.container}>
        <Image src={signatureImg} alt="signature" width={200} height={120} />
        <div className={styles.signatureInfo}>
          <div>
            <h3 className={styles.subTitle}>{moreAbout.sub_title}</h3>
            <h1 className={styles.title}>{moreAbout.title}</h1>
          </div>
          <ButtonComponent url={moreAbout.link} />
        </div>
      </div>
      <div className={styles.container}>
        <Image src={myWorkImg} alt="signature" width={200} height={120} />
        <div className={styles.signatureInfo}>
          <div>
            <h3 className={styles.subTitle}>{projects.sub_title}</h3>
            <h1 className={styles.title}>{projects.title}</h1>
          </div>
          <ButtonComponent url={projects.link} />
        </div>
      </div>
    </div>
  );
};
