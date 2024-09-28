import Image from 'next/image';

import { ProfileComponent } from '../homepage/components/profile/profile';
import { TogetherBlock } from '../homepage/components/together/together';
import { About } from '@/types/aboutpage-type';

import userPhoto from '@/img/logo.png';

import styles from './aboutpage.module.css';
import { SelfSummary } from './self-summary/self-summary';
import { ExperienceBlock } from './experience/experience';
import { EducationBlock } from './education/education';
import { Projects } from '../homepage/components/experience/projects';
import { SpecializationContainer } from '../homepage/components/specialization/specialization';

type AboutPageProps = {
  data: About;
};

const profile = {
  title: 'Profiles',
  sub_title: 'Stay with me',
  link: '/contact-me',
};

const specialization = {
  title: 'Services Offering',
  sub_title: 'specialization',
  link: '/service',
};

const project = {
  title: 'Projects',
  sub_title: 'showcase',
  link: '/project',
};

export const AboutPage = ({ data }: AboutPageProps) => {
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
          title={data.title}
          name={data.name}
          description={data.description}
        />
      </div>
      <div className={styles.middleSection}>
        <ExperienceBlock experience={data.experience} />
        <EducationBlock education={data.education} />
      </div>
      <div className={styles.bottomSection}>
        <Projects data={project} />
        <SpecializationContainer specialization={specialization} />
        <ProfileComponent profile={profile} />
      </div>
    </div>
  );
};
