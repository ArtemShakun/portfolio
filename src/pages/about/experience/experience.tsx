import { Experience } from '@/types/aboutpage-type';
import styles from './experience.module.css';

type ExperienceBlockProps = {
  experience: Experience[];
};

export const ExperienceBlock = ({ experience }: ExperienceBlockProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Experiance</h1>
      {experience.map(item => (
        <ul className={styles.blockInfo} key={item.id}>
          <li className={styles.years}>{item.years}</li>
          <li className={styles.role}>{item.role}</li>
          <li className={styles.companyName}>{item.company_name}</li>
        </ul>
      ))}
    </div>
  );
};
