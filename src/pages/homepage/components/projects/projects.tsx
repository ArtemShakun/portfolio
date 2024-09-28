import Image from 'next/image';

import { ButtonComponent } from '@/components/button/button';
import { blockInfo } from '@/types/homepage-type';
import myWorkImg from '@/img/my_works.png';

import styles from '../component.module.css';

type ProjectProp = {
  data: blockInfo;
};

export const Projects = ({ data }: ProjectProp) => {
  return (
    <div className={styles.container}>
      <span className={styles.imgWrapper}>
        <Image src={myWorkImg} alt="signature" width={200} height={120} />
      </span>
      <div className={styles.signatureInfo}>
        <div>
          <h3 className={styles.subTitle}>{data.sub_title}</h3>
          <h1 className={styles.title}>{data.title}</h1>
        </div>
        <ButtonComponent url={data.link} />
      </div>
    </div>
  );
};
