import MainLayout from '../components/MainLayout';
import Link from 'next/link';

/* Link allows routing without page reload, only component changes */
const Index = () => {
  return (
    <MainLayout>
      <h2> Hello World </h2>
      <Link href="/signup">
        <a> Signup</a>
      </Link>
  </MainLayout>
  );
};

export default Index;
