import { HomePage } from '@/pages/homepage/homepage';

const fetchData = async () => {
  const response = await fetch('http://localhost:3001/home', {
    cache: 'force-cache',
  });
  const data = await response.json();
  return data;
};

export default async function Home() {
  const data = await fetchData();
  return <HomePage data={data} />;
}
