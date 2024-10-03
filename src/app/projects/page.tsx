import { MyProjects } from '@/pages/projects/my-projects';

const fetchData = async () => {
  const response = await fetch('http://localhost:3001/projects', {
    cache: 'force-cache',
  });
  const data = await response.json();
  return data;
};

export default async function ProjectsPage() {
  const data = await fetchData();
  return <MyProjects data={data} />;
}
