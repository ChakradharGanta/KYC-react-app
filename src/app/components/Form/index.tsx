//components
import Button from 'app/components/Button';
//libs
import Input from 'app/components/Input';

const LoginForm = () => {
  return (
    <>
      <Input placeholder="Username" className="w-full" />
      <Input placeholder="Password" className="w-full" />
      <Button variant="contained" color="primary" className="mt-24 w-full">
        Login
      </Button>
    </>
  );
};

export default LoginForm;
