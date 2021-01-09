import MainLayout from '../../components/MainLayout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';

/* Link allows routing without page reload, only component changes */
const AdminIndex = () => {
    return (
        <MainLayout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Admin Dashboard</h2>
                        </div>
                        <div className="col-md-4">
                            <ul class="list-group">
                                <li className="list-group-item">
                                    <Link href="/admin/crud/Category-Tag">
                                        <a>Create Category</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/admin/crud/Category-Tag">
                                        <a>Create Tag</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/admin/crud/BlogCRUD">
                                        <a>Create Blog</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8">right</div>
                    </div>
                </div>
            </Admin>
        </MainLayout>
    );
};

export default AdminIndex;
