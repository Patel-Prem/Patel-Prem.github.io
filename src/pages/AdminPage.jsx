import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Dashboard from '../components/Admin/Dashboard';
import Loader from '../components/Common/Loader';

const AdminPage = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  // if (!user) {
  //   return <Navigate to="/admin/login" replace />;
  // }

  return <Dashboard />;
};

export default AdminPage;
