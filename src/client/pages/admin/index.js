import MainLayout from '../../components/MainLayout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';

/* Link allows routing without page reload, only component changes */
const AdminIndex = () => {
  return (
    <MainLayout>
    <Admin>
      <h2> Admin Dashboard </h2>
      <Link href="/signup">
        <a> Signup</a>
      </Link>
     </Admin>
  </MainLayout>
  );
};

export default AdminIndex;
