import Image from 'next/image';

import projectTestImg from '@/img/projects/project_1.png';
import { ButtonComponent } from '@/components/button/button';
import { ProjectItem } from '@/types/projectpage-type';

import styles from './projects.module.css';

type ProjectCardProp = {
  data: ProjectItem;
};
export const ProjectCard = ({ data }: ProjectCardProp) => {
  return (
    <div className={styles.card}>
      <Image src={projectTestImg} alt="project image" />
      <div className={styles.controlBlock}>
        <div className={styles.textBlock}>
          <h4 className={styles.title}>{data.title}</h4>
          <h3 className={styles.subtitle}>{data.sub_title}</h3>
        </div>
        <ButtonComponent url={`/project/${data.id}`} />
      </div>
    </div>
  );
};
