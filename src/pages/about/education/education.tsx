import { Education } from '@/types/aboutpage-type';
import styles from './education.module.css';

type EducationBlockProps = {
  education: Education[];
};

export const EducationBlock = ({ education }: EducationBlockProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Education</h1>
      {education.map(item => (
        <ul className={styles.blockInfo} key={item.id}>
          <li className={styles.years}>{item.years}</li>
          <li className={styles.role}>{item.name}</li>
        </ul>
      ))}
    </div>
  );
};
