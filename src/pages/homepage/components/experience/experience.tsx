import { MoreAbout } from './more-about';
import { Projects } from './projects';
import { blockInfo } from '@/types/homepage-type';

import styles from '../component.module.css';

type ExperienceBlockProp = {
  companyName: string[];
  moreAbout: blockInfo;
  projects: blockInfo;
};

export const ExperienceBlock = ({
  companyName,
  moreAbout,
  projects,
}: ExperienceBlockProp) => {
  return (
    <div className={styles.experienceBlock}>
      <div className={styles.projectsAnimation}>
        <p>{companyName.map(item => `${item} * `)}</p>
      </div>
      <MoreAbout data={moreAbout} />
      <Projects data={projects} />
    </div>
  );
};
