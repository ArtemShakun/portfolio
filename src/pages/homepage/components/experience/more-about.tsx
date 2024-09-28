import Image from 'next/image';
import { ButtonComponent } from '@/components/button/button';
import { blockInfo } from '@/types/homepage-type';
import signatureImg from '@/img/signature.png';

import styles from '../component.module.css';

type MoreAboutProp = {
  data: blockInfo;
};

export const MoreAbout = ({ data }: MoreAboutProp) => {
  return (
    <div className={styles.container}>
      <Image src={signatureImg} alt="signature" width={200} height={120} />
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
