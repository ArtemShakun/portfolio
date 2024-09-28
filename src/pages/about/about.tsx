import { AboutInterface } from '@/types/aboutpage-type';

type AboutPageProp = {
  data: AboutInterface;
};
export const AboutPage = ({ data }: AboutPageProp) => {
  return <h1 style={{ color: '#fff' }}>Hello from ABOUT</h1>;
};
