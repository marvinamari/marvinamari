import MainLayout from '../../../components/MainLayout';
import Admin from '../../../components/auth/Admin';
import BlogCreate from '../../../components/crud/BlogCreate'
import Link from 'next/link';

/* Link allows routing without page reload, only component changes */
const BlogCRUD = () => {
  return (
    <MainLayout>
    <Admin>
      <div className="row">
        <div className="left">
        <h2> Create new Blog</h2>
          <BlogCreate />
        </div>
      </div>
     </Admin>
  </MainLayout>
  );
};

export default BlogCRUD;
