import MainLayout from '../../components/MainLayout';
import Private from '../../components/auth/Private';
import Link from 'next/link';

/* Link allows routing without page reload, only component changes */
const UserIndex = () => {
  return (
    <MainLayout>
    <Private>
      <h2> User Dashboard </h2>
      <Link href="/signup">
        <a> Signup</a>
      </Link>
     </Private>
  </MainLayout>
  );
};

export default UserIndex;
