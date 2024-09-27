import { ExperienceBlock } from './components/experience/experience';
import { PersonalInfo } from './components/personal-info/personal-info';

import { BlogComponent } from './components/blog/blog';
import { SpecializationContainer } from './components/specialization/specialization';
import { ProfileComponent } from './components/profile/profile';
import { TogetherBlock } from './components/together/together';
import { homepage } from '@/types/homepage-type';

import styles from './homepage.module.css';

type HomePageProps = {
  data: homepage;
};

export const HomePage = ({ data }: HomePageProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.upperSection}>
        <PersonalInfo userData={data.userData} />
        <ExperienceBlock
          companyName={data.company_name}
          moreAbout={data.more_about}
          projects={data.projects}
        />
      </div>
      <div className={styles.middleSection}>
        <BlogComponent blog={data.blog} />
        <SpecializationContainer specialization={data.specialization} />
        <ProfileComponent profile={data.profile} />
      </div>
      <div className={styles.bottomSection}>
        {/* <TogetherBlock /> */}
        <TogetherBlock together={data.together} />
      </div>
    </div>
  );
};
