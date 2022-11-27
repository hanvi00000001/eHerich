import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Pressable,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import {Icon} from '@rneui/themed';
import {colors, paremeters} from '../global/styles';
import {filterData, restaurantsData} from '../global/Data';
import HomeHeader from '../components/HomHeader';
import FoodCard from '../components/FoodCard';
import CountDown from 'react-native-countdown-component';

const SREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen({navigation}) {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState('0');
  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation} />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View
          style={{backgroundColor: colors.cardbackground, paddingBottom: 5}}>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.buttons : colors.grey3,
                }}>
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.grey3 : colors.buttons,
                }}>
                <Text style={styles.deliveryText}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.fliterView}>
          <View style={styles.addressView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
              }}>
              <Icon
                type="material"
                name="room"
                color={colors.grey1}
                size={26}
              />
              <Text style={{marginLeft: 10, color: 'black'}}>
                20 Tăng Nhơn Phú, Phước Long B
              </Text>
            </View>
          </View>

          <View>
            <Icon type="material" name="tune" color={colors.grey1} size={26} />
          </View>
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item, index}) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}>
                <View
                  style={
                    indexCheck === item.id
                      ? {...styles.smallCardSelected}
                      : {...styles.smallCard}
                  }>
                  <Image
                    style={{height: 60, width: 60, borderRadius: 30}}
                    source={item.image}
                  />
                  <View>
                    <Text
                      style={
                        indexCheck === item.id
                          ? {...styles.smallCardTextSected}
                          : {...styles.smallCardText}
                      }>
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Sale-Off</Text>
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 16,
                marginTop: -10,
                marginRight: 5,
                color: 'black',
              }}>
              Options changing in
            </Text>
            <CountDown
              until={85400}
              size={14}
              digitStyle={{backgroundColor: colors.lightgreen}}
              digitTxtStyle={{color: colors.cardbackground}}
              timeToShow={['H', 'M', 'S']}
              timeLabels={{h: 'Hour', m: 'Min', s: 'Sec'}}
            />
          </View>
          <FlatList
            style={{marginTop: 10, marginBottom: 10}}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{marginRight: 5}}>
                <FoodCard
                  screenWidth={SREEN_WIDTH * 0.8}
                  images={item.images}
                  averageReview={item.averageReview}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },

  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
  },

  fliterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
  },

  clockView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: colors.cardbackground,
    borderRadius: 15,
    paddingHorizontal: 5,
    marginRight: 20,
  },

  addressView: {
    flexDirection: 'row',
    backgroundColor: colors.grey5,
    borderRadius: 15,
    paddingVertical: 3,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  headerText: {
    color: colors.grey2,
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 10,
  },

  headerTextView: {
    //backgroundColor: colors.grey5,
    paddingVertical: 3,
  },

  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 90,
    margin: 10,
    height: 100,
  },

  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 90,
    margin: 10,
    height: 100,
  },

  smallCardTextSected: {
    fontWeight: 'bold',
    color: colors.cardbackground,
  },

  smallCardText: {
    fontWeight: 'bold',
    color: colors.grey2,
  },
});
