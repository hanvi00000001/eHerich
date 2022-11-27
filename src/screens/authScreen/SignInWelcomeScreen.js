import React, {useState, useRef} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {colors, parameters, title} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import {Icon, Button, SocialIcon} from '@rneui/themed';
import Swiper from 'react-native-swiper';
export default function SignInWelcomScreen({navigation}) {
  return (
    <View style={{flex: 3}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          HERICH
        </Text>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          PASSION IS ENERGY
        </Text>
      </View>

      <View style={{flex: 4, justifyContent: 'center'}}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://www.yonex.com/media/scandiweb/slider/2/8/2880x1120_string-ao-logo_3.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <View style={styles.slide2}>
            <Image
              source={{
                uri: 'https://www.yonex.com/media/scandiweb/slider/2/8/2880x1120_momota.png',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://www.yonex.com/media/scandiweb/slider/a/r/arc7_a1_kv_hero_pc_banner.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://www.yonex.com/media/scandiweb/slider/a/r/arcsaber_web.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </Swiper>
      </View>
      <View style={{flex: 4, marginBottom: 20, justifyContent: 'flex-end'}}>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}
          />
        </View>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundcolor: '#92BBD9',
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 50,
    paddingHorizontal: 20,
    borderColor: colors.buttons,
  },

  createButtonTitle: {
    color: colors.grey1,
    fontSize: 20,
    fontweight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
