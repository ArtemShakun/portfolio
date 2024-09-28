import Image from 'next/image';

import { ProfileComponent } from './components/profile/profile';
import { homepage } from '@/types/homepage-type';

import userPhoto from '@/img/logo.png';

import { SelfSummary } from './components/self-summary/self-summary';
import { ExperienceBlock } from './components/experience/experience';
import { EducationBlock } from './components/education/education';
import { Projects } from './components/projects/projects';
import { SpecializationContainer } from './components/specialization/specialization';

import styles from './homepage.module.css';

type AboutPageProps = {
  data: homepage;
};

export const HomePage = ({ data }: AboutPageProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.upperSection}>
        <div className={styles.photo}>
          <Image
            src={userPhoto}
            alt="developers photo"
            width={325}
            height={315}
          />
        </div>
        <SelfSummary
          title={data.userData.title}
          name={data.userData.name}
          description={data.userData.description}
        />
      </div>
      <div className={styles.middleSection}>
        <ExperienceBlock experience={data.experience} />
        <EducationBlock education={data.education} />
      </div>
      <div className={styles.bottomSection}>
        <Projects data={data.projects} />
        <SpecializationContainer specialization={data.specialization} />
        <ProfileComponent profile={data.profile} />
      </div>
    </div>
  );
};
