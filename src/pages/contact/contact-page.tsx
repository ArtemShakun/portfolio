import Image from 'next/image';
import mailIcon from '@/img/contact/mail.svg';
import phoneIcon from '@/img/contact/phone.svg';
import { Contact } from '@/types/contactpage-type';
import styles from './contact.module.css';

type ContactPageProps = {
  data: Contact;
};

export const ContactPage = ({ data }: ContactPageProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.informationBlock}>
        <h1 className={styles.nameCategory}> Contact Info</h1>
        {data.contacts_data.map(item => (
          <div key={item.id} className={styles.infoCard}>
            <div className={styles.imgBlock}>
              <Image src={mailIcon} alt="social icon" />
            </div>
            <div className={styles.textBlock}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.subTitle}>{item.info}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.formBlock}></div>
    </div>
  );
};
