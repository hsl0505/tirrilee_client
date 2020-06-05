/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import {Input, Button} from 'react-native-elements';

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
    marginTop: height * 0.014792899,
    marginBottom: height * 0.112426036,
  },
  header_backBtn: {
    width: 24,
    height: 24,
  },
  header_text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0379c7',
  },
  header_closeIcon: {
    width: 26,
    height: 26,
  },
  input: {
    marginBottom: height * 0.059171598,
  },
  input_label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#381f1f',
    marginHorizontal: width * 0.032,
    marginBottom: height * 0.014792899,
  },
  input_container: {
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 4,
    paddingTop: 0,
    paddingBottom: 0,
    width: width * 0.936,
    height: height * 0.065088757,
    marginHorizontal: width * 0.032,
  },
  input_container_price: {
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 4,
    paddingTop: 0,
    paddingBottom: 0,
    width: width * 0.88,
    height: height * 0.065088757,
    marginLeft: width * 0.032,
    marginRight: width * 0.026,
  },
  input_inputContainer: {
    borderBottomWidth: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  input_textInput: {
    fontSize: 14,
  },
  input_placeholder: {
    color: '#c6c6c6',
  },
  seasonBtn_container: {
    flexDirection: 'row',
  },
  season_label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#381f1f',
    marginHorizontal: width * 0.032,
    marginBottom: height * 0.029585799,
  },
  seasonBtn_spring: {
    width: width * 0.146666667,
    height: height * 0.059171598,
    borderRadius: 20,
    backgroundColor: 'white',
    borderColor: '#e6e6e6',
    borderWidth: 1,
    marginLeft: width * 0.050666667,
  },
  seasonBtn_spring_selected: {
    width: width * 0.146666667,
    height: height * 0.059171598,
    borderRadius: 20,
    backgroundColor: 'white',
    borderColor: '#0379c7',
    borderWidth: 1,
    marginLeft: width * 0.050666667,
  },
  seasonBtn: {
    width: width * 0.181333333,
    height: height * 0.059171598,
    borderRadius: 20,
    backgroundColor: 'white',
    borderColor: '#e6e6e6',
    borderWidth: 1,
    marginLeft: width * 0.032,
  },
  seasonBtn_selected: {
    width: width * 0.181333333,
    height: height * 0.059171598,
    borderRadius: 20,
    backgroundColor: 'white',
    borderColor: '#0379c7',
    borderWidth: 1,
    marginLeft: width * 0.032,
  },
  seasonBtn_text: {
    color: '#c6c6c6',
    fontSize: 14,
  },
  seasonBtn_text_selected: {
    color: '#0379c7',
    fontSize: 14,
  },
  add_label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#381f1f',
    marginHorizontal: width * 0.032,
    marginBottom: height * 0.023668639,
  },
  add_photo: {
    width: width * 0.936,
    height: height * 0.289940828,
    backgroundColor: '#f5f5f5',
    marginHorizontal: width * 0.032,
    alignItems: 'center',
    justifyContent: 'center',
  },
  add_photo_icon: {
    height: 64,
    width: 64,
  },
  completeBtn_disabled: {
    backgroundColor: '#f5f5f5',
    width,
    height: height * 0.071005917,
  },
  completeBtn_disabled_text: {
    fontSize: 14,
    color: '#c6c6c6',
  },
});

export default function CommunityWriteComponent(props) {
  const {navigation} = props;
  const [selectedBtn, setBtn] = useState();
  const [isDisabled, setDisable] = useState(true);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (name && price && selectedBtn) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [name, price, selectedBtn]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../asset/signUp/back_button_gray.png')}
            style={styles.header_backBtn}
          />
        </TouchableOpacity>

        <Text style={styles.header_text}>글 작성하기</Text>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../asset/community/close_icon.png')}
            style={styles.header_closeIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.input}>
        <Text style={styles.input_label}>상품명</Text>
        <Input
          placeholder="상품명을 입력해주세요"
          containerStyle={styles.input_container}
          inputContainerStyle={styles.input_inputContainer}
          inputStyle={styles.input_textInput}
          placeholderTextColor="#c6c6c6"
          onChangeText={text => setName(text)}
        />
      </View>

      <View style={styles.input}>
        <Text style={styles.input_label}>가격</Text>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <Input
            placeholder="상품 가격을 입력해주세요"
            containerStyle={styles.input_container_price}
            inputContainerStyle={styles.input_inputContainer}
            inputStyle={styles.input_textInput}
            placeholderTextColor="#c6c6c6"
            onChangeText={text => setPrice(text)}
          />
          <Text>원</Text>
        </View>
      </View>

      <View style={styles.input}>
        <Text style={styles.season_label}>분류</Text>
        <View style={styles.seasonBtn_container}>
          <Button
            title="봄"
            buttonStyle={
              selectedBtn !== '봄'
                ? styles.seasonBtn_spring
                : styles.seasonBtn_spring_selected
            }
            titleStyle={
              selectedBtn !== '봄'
                ? styles.seasonBtn_text
                : styles.seasonBtn_text_selected
            }
            onPress={() => setBtn('봄')}
          />
          <Button
            title="여름"
            buttonStyle={
              selectedBtn !== '여름'
                ? styles.seasonBtn
                : styles.seasonBtn_selected
            }
            titleStyle={
              selectedBtn !== '여름'
                ? styles.seasonBtn_text
                : styles.seasonBtn_text_selected
            }
            onPress={() => setBtn('여름')}
          />
          <Button
            title="가을"
            buttonStyle={
              selectedBtn !== '가을'
                ? styles.seasonBtn
                : styles.seasonBtn_selected
            }
            titleStyle={
              selectedBtn !== '가을'
                ? styles.seasonBtn_text
                : styles.seasonBtn_text_selected
            }
            onPress={() => setBtn('가을')}
          />
          <Button
            title="겨울"
            buttonStyle={
              selectedBtn !== '겨울'
                ? styles.seasonBtn
                : styles.seasonBtn_selected
            }
            titleStyle={
              selectedBtn !== '겨울'
                ? styles.seasonBtn_text
                : styles.seasonBtn_text_selected
            }
            onPress={() => setBtn('겨울')}
          />
        </View>
      </View>

      <View style={styles.input}>
        <Text style={styles.add_label}>사진 첨부</Text>
        <TouchableOpacity>
          <View style={styles.add_photo}>
            <Image
              source={require('../../asset/community/img_upload_button.png')}
              style={styles.add_photo_icon}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <Button
          title="등록완료"
          disabled={isDisabled}
          disabledStyle={styles.completeBtn_disabled}
          disabledTitleStyle={styles.completeBtn_disabled_text}
        />
      </View>
    </ScrollView>
  );
}
