import { Contact } from '@/types/contactpage-type';
import styles from './contact.module.css';

type ContactPageProps = {
  data: Contact;
};

export const ContactPage = ({ data }: ContactPageProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.informationBlock}></div>
      <div className={styles.formBlock}></div>
    </div>
  );
};
