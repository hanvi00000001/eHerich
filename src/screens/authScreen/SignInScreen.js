import React, {useState, useRef, useContext} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Alert,
} from 'react-native';
import {colors, parameters, title} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import {Icon, Button, SocialIcon} from '@rneui/themed';
import Header from '../../components/Header';

export default function SignInScreen({navigation}) {
  const [textInput2Fossued, setTextInput2Fossued] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />

      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={title}>Sign-In</Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>registered with your account</Text>
      </View>

      <View style={{marginTop: 20}}>
        <View>
          <TextInput
            style={styles.TextInput1}
            placeholder="Email"
            ref={textInput1}
          />
        </View>

        <View style={styles.TextInput2}>
          <Animatable.View
            animation={textInput2Fossued ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              name="lock"
              iconStyle={{color: colors.grey2}}
              type="material"
            />
          </Animatable.View>

          <TextInput
            style={{width: '80%'}}
            placeholder="Password"
            ref={textInput2}
            onFocus={() => {
              setTextInput2Fossued(false);
            }}
            onBlur={() => {
              setTextInput2Fossued(true);
            }}
          />

          <Animatable.View
            animation={textInput2Fossued ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              name="visibility-off"
              iconStyle={{color: colors.grey2}}
              type="material"
              style={{marginRight: 10}}
            />
          </Animatable.View>
        </View>
      </View>
      <View style={{marginHorizontal: 20, marginTop: 30}}>
        <Button
          title="SIGN IN"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress={() => {
            navigation.navigate('DrawerNavigator');
          }}
        />
      </View>

      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
          Forget Password
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 30, marginBottom: 30}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>OR</Text>
      </View>

      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <SocialIcon
          title="Sign In With Facabook"
          button
          type="facebook"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <SocialIcon
          title="Sign In With Google"
          button
          type="google"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{alignItems: 'center', marginHorizontal: 20, marginTop: 35}}>
        <Button
          title="Create an account"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text1: {
    color: colors.grey3,
    fontSize: 16,
  },

  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between', //192.168.1.13:8081
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },

  SocialIcon: {
    borderRadius: 12,
    height: 50,
    width: '100%',
  },

  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    paddingHorizontal: 20,
  },

  createButtonTitle: {
    color: '#ff8c52',
    fontSize: 16,
    fontweight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
