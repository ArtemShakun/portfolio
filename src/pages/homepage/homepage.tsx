import { ExperienceBlock } from './components/experience/experience';
import { PersonalInfo } from './components/personal-info/personal-info';

import { BlogComponent } from './components/blog/blog';
import { SpecializationContainer } from './components/specialization/specialization';
import { ProfileComponent } from './components/profile/profile';

import styles from './homepage.module.css';
import { TogetherBlock } from './components/together/together';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upperSection}>
        <PersonalInfo />
        <ExperienceBlock />
      </div>
      <div className={styles.middleSection}>
        <BlogComponent />
        <SpecializationContainer />
        <ProfileComponent />
      </div>
      <div className={styles.bottomSection}>
        <TogetherBlock />
        <TogetherBlock />
      </div>
    </div>
  );
};
