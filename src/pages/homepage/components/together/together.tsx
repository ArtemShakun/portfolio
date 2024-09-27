import { ButtonComponent } from '@/components/button/button';
import { together } from '@/types/homepage-type';

import styles from '../component.module.css';

type TogetherBlockProps = {
  together: together;
};

export const TogetherBlock = ({ together }: TogetherBlockProps) => {
  return (
    <div className={`${styles.container} ${styles.wrapperContainerTogether}`}>
      <h1
        className={styles.titleInfo}
        dangerouslySetInnerHTML={{ __html: together.title }}
      />
      <ButtonComponent url={together.link} />
    </div>
  );
};
