import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';

import {Button} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: width * 0.032,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: height * 0.014792899,
  },
  header_backBtn: {
    width: 24,
    height: 24,
  },
  header_complete: {
    fontSize: 14,
    color: '#0379c7',
  },
  profile: {
    height: height * 0.24260355,
    width,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#f7f7f7',
  },
  profile_img: {
    width: 80,
    height: 80,
  },
  profile_btn: {
    width: width * 0.266666667,
    height: height * 0.047337278,
    backgroundColor: '#f5f5f5',
    borderRadius: 6,
    marginTop: height * 0.017751479,
  },
  profile_btn_text: {
    fontSize: 12,
    color: '#0379c7',
  },
  editContainer: {
    flexDirection: 'row',
    marginTop: height * 0.047337278,
    marginHorizontal: width * 0.032,
  },
  editContainer_title: {
    fontSize: 14,
    marginRight: width * 0.130666667,
    lineHeight: height * 0.032544379,
    height: height * 0.032544379,
  },
  editContainer_title_email: {
    fontSize: 14,
    marginRight: width * 0.096,
    lineHeight: height * 0.032544379,
    height: height * 0.032544379,
  },
  editContainer_textInput: {
    paddingTop: 0,
    paddingBottom: 0,
    lineHeight: height * 0.032544379,
    height: height * 0.032544379,
    width: width * 0.74,
    fontSize: 14,
    color: '#767676',
  },
  editContainer_textInput_explain: {
    paddingTop: 0,
    paddingBottom: 0,
    lineHeight: height * 0.032544379,
    height: height * 0.068047337,
    width: width * 0.74,
    fontSize: 14,
    color: '#767676',
  },
  editContainer_divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#f5f5f5',
    paddingBottom: height * 0.01183432,
  },
});

export default function MyPageEditComponent(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../asset/signUp/back_button_gray.png')}
            style={styles.header_backBtn}
          />
        </TouchableOpacity>

        <Text style={styles.header_complete}>완료</Text>
      </View>

      <View style={styles.profile}>
        <Image
          source={require('../../asset/myPage/profile_img.png')}
          style={styles.profile_img}
        />
        <Button
          title="프로필 변경"
          buttonStyle={styles.profile_btn}
          titleStyle={styles.profile_btn_text}
        />
      </View>

      <View style={styles.editContainer}>
        <Text style={styles.editContainer_title}>이름</Text>
        <View style={styles.editContainer_divider}>
          <TextInput value="이티릴" style={styles.editContainer_textInput} />
        </View>
      </View>

      <View style={styles.editContainer}>
        <Text style={styles.editContainer_title_email}>이메일</Text>
        <View style={styles.editContainer_divider}>
          <TextInput
            value="tirrilee@gmail.com"
            style={styles.editContainer_textInput}
          />
        </View>
      </View>

      <View style={styles.editContainer}>
        <Text style={styles.editContainer_title}>소개</Text>
        <View style={styles.editContainer_divider}>
          <TextInput
            value="안녕하세요 이티릴입니다. 소개내용이 들어갑니다."
            style={styles.editContainer_textInput_explain}
            multiline
            numberOfLines={2}
          />
        </View>
      </View>
    </View>
  );
}
