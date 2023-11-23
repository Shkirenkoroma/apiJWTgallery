import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBInput } from 'mdb-react-ui-kit';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Auth: FC = (): JSX.Element => {
  const [formValue, setFormValue] = useState(initialState);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {}, []);

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-4 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          
        </div>
      </div>
    </section>
  );
};

export default Auth;
