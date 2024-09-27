import Image from 'next/image';

import { ButtonComponent } from '@/components/button/button';

import jsIcon from '@/img/services/javascript-icon.svg';
import nextIcon from '@/img/services/next-js-icon.svg';
import reactIcon from '@/img/services/react-icon.svg';
import reduxIcon from '@/img/services/redux-icon.svg';
import typeScriptIcon from '@/img/services/typescript-icon.svg';

import styles from '../component.module.css';

export const SpecializationContainer = () => {
  return (
    <div
      className={`${styles.container} ${styles.wrapperContainerSpecialization}`}
    >
      <span className={styles.imgWrapperSpecialization}>
        <Image src={jsIcon} alt="signature" width={50} height={50} />
        <Image src={nextIcon} alt="signature" width={50} height={50} />
        <Image src={reactIcon} alt="signature" width={50} height={50} />
        <Image src={reduxIcon} alt="signature" width={50} height={50} />
        <Image src={typeScriptIcon} alt="signature" width={50} height={50} />
      </span>
      <div className={styles.signatureInfo}>
        <div>
          <h3 className={styles.subTitle}>Specialization</h3>
          <h1 className={styles.title}>Services Offering</h1>
        </div>
        <ButtonComponent />
      </div>
    </div>
  );
};
