import MainLayout from '../components/MainLayout';
import SigninComponent from '../components/auth/SigninComponent';

const Signin = () => {
  return (
    <MainLayout>
      <h2> signIn </h2>
      <a href="/">Home</a>
      <SigninComponent />
  </MainLayout>
  );
};

export default Signin;
