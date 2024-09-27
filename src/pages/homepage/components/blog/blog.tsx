import Image from 'next/image';

import { ButtonComponent } from '@/components/button/button';
import { blockInfo } from '@/types/homepage-type';
import blogIcon from '@/img/blog_icon.png';

import styles from '../component.module.css';

type BlogComponentProp = {
  blog: blockInfo;
};

export const BlogComponent = ({ blog }: BlogComponentProp) => {
  return (
    <div className={styles.container}>
      <span className={styles.imgWrapper}>
        <Image src={blogIcon} alt="signature" width={150} height={120} />
      </span>
      <div className={styles.signatureInfo}>
        <div>
          <h3 className={styles.subTitle}>{blog.sub_title}</h3>
          <h1 className={styles.title}>{blog.title}</h1>
        </div>
        <ButtonComponent url={blog.link} />
      </div>
    </div>
  );
};
