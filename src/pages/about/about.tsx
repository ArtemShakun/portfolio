import Image from 'next/image';
import { AboutInterface } from '@/types/aboutpage-type';
import userLogo from '@/img/logo.png';
import gitHubIcon from '@/img/soc/github-icon.svg';
import linkedInIcon from '@/img/soc/linkedin-icon.svg';
import { BlockInfo } from './components/block-info';
import styles from './about.module.css';

type AboutPageProp = {
  data: AboutInterface;
};

export const AboutPage = ({ data }: AboutPageProp) => {
  return (
    <div className={styles.container}>
      <div className={styles.userContact}>
        <div className={styles.photoBlock}>
          <Image
            src={userLogo}
            alt="user logo"
            width={320}
            height={320}
            className={styles.photo}
          />
        </div>
        <div className={styles.userInfoBlock}>
          <div className={styles.textBlock}>
            <h1 className={styles.name}> {data.name}</h1>
            <p className={styles.mail}>{data.mail}</p>
          </div>
          <ul className={styles.socialMediaBlock}>
            <li>
              <Image
                src={gitHubIcon}
                width={20}
                height={20}
                alt="social icon"
              />
            </li>
            <li>
              <Image
                src={linkedInIcon}
                width={20}
                height={20}
                alt="social icon"
              />
            </li>
            <li>
              <Image
                src={gitHubIcon}
                width={20}
                height={20}
                alt="social icon"
              />
            </li>
          </ul>
        </div>
        <a className={styles.socialBtn}>Contact me</a>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.descriptionBlock}>
          <h1 className={styles.title}>About me</h1>
          <p className={styles.description}>{data.description}</p>
        </div>

        <div>
          <h1 className={styles.title}>Experience</h1>
          {data.experience.map(item => (
            <BlockInfo key={item.id} data={item} />
          ))}
        </div>

        <div>
          <h1 className={styles.title}>Education</h1>
          {data.education.map(item => (
            <BlockInfo key={item.id} data={item} />
          ))}
        </div>

        <div className={styles.skillsTools}>
          <div>
            <h1 className={styles.title}>Skills</h1>
            {data.skills.map(item => (
              // <BlockInfo key={item.id} data={item} />
              <p key={item} className={styles.skillsToolsItem}>
                {item}
              </p>
            ))}
          </div>
          <div>
            <h1 className={styles.title}>Tools</h1>
            {data.tools.map(item => (
              // <BlockInfo key={item.id} data={item} />
              <p key={item} className={styles.skillsToolsItem}>
                {item}
              </p>
            ))}
          </div>
          <div>
            <h1 className={styles.title}>Language</h1>
            <p className={styles.skillsToolsItem}>{data.language}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
