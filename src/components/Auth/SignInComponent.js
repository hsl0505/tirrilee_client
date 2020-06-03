/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Input, CheckBox, Button} from 'react-native-elements';

const {width, height} = Dimensions.get('window');
// console.log(Dimensions.get('window').height);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: width * 0.48,
    height: height * 0.089955022,
    resizeMode: 'contain',
    marginTop: height * 0.157421289,
    marginBottom: height * 0.04797601199,
  },
  input_containerStyle: {
    marginTop: height * 0.011994003,
    borderColor: '#e6e6e6',
    borderWidth: 1,
    borderRadius: 4,
    width: width * 0.936,
    height: height * 0.065967016,
  },
  input_textInput: {
    fontSize: 14,
    justifyContent: 'center',
  },
  input_inputContainerStyle: {
    borderBottomWidth: 0,
  },
  checkbox_containerStyle: {
    alignSelf: 'flex-start',
    borderWidth: 0,
    marginLeft: width * 0.032,
    backgroundColor: 'white',
    paddingLeft: 0,
    paddingTop: height * 0.023988006,
    paddingBottom: 0,
    marginTop: 0,
    justifyContent: 'center',
    marginBottom: height * 0.08995502249,
  },
  checkbox_textStyle: {
    fontSize: 12,
    color: '#767676',
    marginLeft: 10,
  },
  loginBtn_btnStyle: {
    width: width * 0.936,
  },
  signUpBtn_btnStyle: {
    width: width * 0.936,
    marginTop: height * 0.011994003,
  },
  btn_textStyle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  find_box: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: height * 0.035982009,
    justifyContent: 'center',
    alignItems: 'center',
  },
  find_id_password: {
    fontSize: 12,
    color: '#c6c6c6',
  },
  find_bar: {
    width: 1,
    height: 14,
    backgroundColor: '#c6c6c6',
    marginHorizontal: 10,
  },
  footer_content: {
    marginTop: height * 0.103448276,
  },
  footer_text: {
    fontSize: 11,
    color: '#c6c6c6',
  },
  footer_agreeText: {
    color: '#0379c7',
  },
});

function SignInComponent() {
  // 임시 체크 state
  const [isChecked, setCheck] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Image
        source={require('../../asset/signIn/email_login_logo.png')}
        style={styles.logo}
      />
      <Input
        placeholder="아이디 / 메일주소"
        placeholderTextColor={'#c6c6c6'}
        containerStyle={styles.input_containerStyle}
        inputStyle={styles.input_textInput}
        inputContainerStyle={styles.input_inputContainerStyle}
      />
      <Input
        placeholder="비밀번호"
        placeholderTextColor={'#c6c6c6'}
        containerStyle={styles.input_containerStyle}
        inputStyle={styles.input_textInput}
        inputContainerStyle={styles.input_inputContainerStyle}
      />
      <CheckBox
        title="로그인 상태 유지하기"
        checked={isChecked}
        containerStyle={styles.checkbox_containerStyle}
        textStyle={styles.checkbox_textStyle}
        uncheckedIcon={
          <Image
            source={require('../../asset/signIn/checkBtn_disabled.png')}
            style={{width: 20, height: 20}}
          />
        }
        uncheckedColor={'#e6e6e6'}
        checkedIcon={
          <Image
            source={require('../../asset/signIn/checkBtn.png')}
            style={{width: 20, height: 20}}
          />
        }
        onPress={() => {
          if (isChecked) {
            setCheck(false);
          } else {
            setCheck(true);
          }
        }}
      />
      <Button
        title="로그인"
        containerStyle={styles.loginBtn_btnStyle}
        titleStyle={styles.btn_textStyle}
      />
      <Button
        title="회원가입"
        type="outline"
        containerStyle={styles.signUpBtn_btnStyle}
        titleStyle={styles.btn_textStyle}
      />

      <View style={styles.find_box}>
        <TouchableOpacity>
          <Text style={styles.find_id_password}>아이디 찾기</Text>
        </TouchableOpacity>
        <View style={styles.find_bar} />
        <TouchableOpacity>
          <Text style={styles.find_id_password}>비밀번호 찾기</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer_content}>
        <Text style={styles.footer_text}>
          회원가입 없이 카카오톡 계정만으로 바로 이용이 가능합니다.
        </Text>
        <Text style={styles.footer_text}>
          로그인 시,{' '}
          <Text style={styles.footer_agreeText}>
            이용약관 및 개인정보처리방침
          </Text>{' '}
          동의로 간주됩니다.
        </Text>
      </View>
    </View>
  );
}

export default SignInComponent;
