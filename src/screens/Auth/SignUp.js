import * as React from 'react';
import SignUpComponent from '../../components/Auth/SignUpComponent';

function SignUp(props) {
  const {navigation} = props;
  return <SignUpComponent navigation={navigation} />;
}

export default SignUp;
