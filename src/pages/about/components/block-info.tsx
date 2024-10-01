import styles from '../about.module.css';

interface DataInterface {
  id: number;
  years: string;
  role: string;
  diploma?: string;
  company_name?: string;
  description: string;
}

type BlockInfoProps = {
  data: DataInterface;
};

export const BlockInfo = ({ data }: BlockInfoProps) => {
  return (
    <ul key={data.id} className={styles.infoBlock}>
      <li className={styles.year}>{data.years}</li>
      <li className={styles.role}>{data.role}</li>
      <li className={styles.companyName}>
        {data.company_name || data.diploma}
      </li>
      <li className={styles.description}>{data.description}</li>
    </ul>
  );
};
