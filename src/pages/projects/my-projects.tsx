import Image from 'next/image';

import { Project } from '@/types/projectpage-type';
import { ProjectCard } from './project-card';
import starIcon from '@/img/star-icon.png';

import styles from './projects.module.css';

type MyProjectsProps = {
  data: Project;
};

export const MyProjects = ({ data }: MyProjectsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {data.last_project.map(item => (
          <ProjectCard key={item.id} data={item} />
        ))}
      </div>
      <div className={styles.right}>
        <div className={styles.titleBlock}>
          <Image src={starIcon} alt="star icon" height={50} width={50} />
          <h1 className={styles.mainTitle}>{data.title}</h1>
          <Image src={starIcon} alt="star icon" height={50} width={50} />
        </div>
        <div className={styles.projectCartsBlock}>
          {data.all_project.map(item => (
            <ProjectCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
