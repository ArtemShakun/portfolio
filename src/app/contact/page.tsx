import { ContactPage } from '@/pages/contact/contact-page';

const fetchData = async () => {
  const response = await fetch('http://localhost:3001/contact', {
    cache: 'force-cache',
  });
  const data = await response.json();
  return data;
};

export default async function Contact() {
  const data = await fetchData();
  return <ContactPage data={data} />;
}
