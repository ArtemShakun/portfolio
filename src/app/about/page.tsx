import { AboutPage } from '@/pages/about/about-page';

const fetchData = async () => {
  const response = await fetch('http://localhost:3001/about', {
    cache: 'force-cache',
  });
  const data = await response.json();
  return data;
};

export default async function About() {
  const data = await fetchData();
  return <AboutPage data={data} />;
}
