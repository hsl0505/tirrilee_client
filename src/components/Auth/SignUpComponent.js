/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
// import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'flex-end',
  },
  signUp_text: {
    fontSize: 16,
    marginTop: height * 0.058309038,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#381f1f',
    marginLeft: width * 0.034666667,
    marginTop: height * 0.058309038,
    marginBottom: 10,
  },
  input_containerStyle: {
    borderColor: '#e6e6e6',
    borderWidth: 1,
    borderRadius: 4,
    width: width * 0.936,
    height: height * 0.064139942,
  },
  input_textInput: {
    fontSize: 14,
    justifyContent: 'center',
    color: '#767676',
  },
  input_inputContainerStyle: {
    borderBottomWidth: 0,
  },
  signUpBtn: {
    marginTop: height * 0.087463557,
    bottom: 0,
    width,
  },
  signUpBtn_disabled: {
    backgroundColor: '#f5f5f5',
  },
  signUpBtn_disabled_text: {
    fontSize: 14,
    color: '#c6c6c6',
  },
  signUpBtn_text: {
    fontSize: 14,
  },
});

function SignUpComponent() {
  // 임시 state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickName, setNickName] = useState('');
  const [mobile, setMobile] = useState('');
  const [isDisabled, setDisable] = useState(true);

  useEffect(() => {
    if (email && password && nickName && mobile) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [email, password, nickName, mobile]);

  return (
    <KeyboardAvoidingView style={{flex: 1}} keyboardVerticalOffset={10} enabled>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.container}>
          <Text style={styles.signUp_text}>가입 정보를 입력해 주세요 :)</Text>
          <Text style={styles.label}>이메일</Text>
          <Input
            placeholder="이메일을 입력해 주세요"
            containerStyle={styles.input_containerStyle}
            inputStyle={styles.input_textInput}
            inputContainerStyle={styles.input_inputContainerStyle}
            onChangeText={value => setEmail(value)}
          />
          <Text style={styles.label}>비밀번호</Text>
          <Input
            placeholder="숫자,영문,특수문자 포함 12자"
            containerStyle={styles.input_containerStyle}
            inputStyle={styles.input_textInput}
            inputContainerStyle={styles.input_inputContainerStyle}
            onChangeText={value => setPassword(value)}
          />
          <Text style={styles.label}>닉네임</Text>
          <Input
            placeholder="티릴리에서 사용할 닉네임을 입력해주세요"
            containerStyle={styles.input_containerStyle}
            inputStyle={styles.input_textInput}
            inputContainerStyle={styles.input_inputContainerStyle}
            onChangeText={value => setNickName(value)}
          />
          <Text style={styles.label}>연락처</Text>
          <Input
            placeholder="“-“ 제외, 숫자만 입력해주세요."
            containerStyle={styles.input_containerStyle}
            inputStyle={styles.input_textInput}
            inputContainerStyle={styles.input_inputContainerStyle}
            onChangeText={value => setMobile(value)}
          />
          <Button
            title="가입완료"
            containerStyle={styles.signUpBtn}
            titleStyle={styles.signUpBtn_text}
            disabled={isDisabled}
            disabledStyle={styles.signUpBtn_disabled}
            disabledTitleStyle={styles.signUpBtn_disabled_text}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignUpComponent;
