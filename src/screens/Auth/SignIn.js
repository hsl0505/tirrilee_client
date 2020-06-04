import React, {useContext} from 'react';
import SignInComponent from '../../components/Auth/SignInComponent';

import LoginContext from './LoginContext';

function SignIn(props) {
  const {navigation} = props;
  const login = useContext(LoginContext);

  return <SignInComponent navigation={navigation} login={login} />;
}

export default SignIn;
