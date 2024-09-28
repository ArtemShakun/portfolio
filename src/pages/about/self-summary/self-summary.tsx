import Image from 'next/image';

import starIcon from '@/img/star-icon.png';
import blockIcon from '@/img/icon2.png';

import styles from './self.summary.module.css';

type SelfSummaryProps = {
  title: string;
  name: string;
  description: string;
};

export const SelfSummary = ({ title, name, description }: SelfSummaryProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleBlock}>
        <Image src={starIcon} alt="star icon" height={50} width={50} />
        <h1 className={styles.title}>{title}</h1>
        <Image src={starIcon} alt="star icon" height={50} width={50} />
      </div>
      <div className={styles.container}>
        <Image src={blockIcon} alt="decoration icon" />
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
