import MainLayout from '../../../components/MainLayout';
import Admin from '../../../components/auth/Admin';
import CategoryCRUD from '../../../components/crud/CategoryCRUD';
import TagCRUD from '../../../components/crud/TagCRUD';
import Link from 'next/link';

/* Link allows routing without page reload, only component changes */
const CategoryTag = () => {
  return (
    <MainLayout>
    <Admin>
      <h2> Manage Categores and Tags</h2>
      <Link href="/signup">
        <a> Signup</a>
      </Link>
      <div className="row">
        <div className="left">
        <h2> Categories</h2>
          <CategoryCRUD />
        </div>
        <div className="right">
        <h2> Tags </h2>
          <TagCRUD />
        </div>
      </div>
     </Admin>
  </MainLayout>
  );
};

export default CategoryTag;
