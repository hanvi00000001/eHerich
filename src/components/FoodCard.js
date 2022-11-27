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
} from 'react-native';
import {Icon} from '@rneui/themed';
import {colors, paremeters} from '../global/styles';

export default function FoodCard({
  OnPressFoodCard,
  restaurantName,
  deliveryAvailable,
  discountAvailable,
  discountPercent,
  numberOfReview,
  businessAddress,
  farAway,
  averageReview,
  images,
  screenWidth,
}) {
  return (
    <TouchableOpacity>
      <View style={{...styles.cardView, width: screenWidth}}>
        <Image
          style={{...styles.image, width: screenWidth}}
          source={{uri: images}}
        />

        {/* <View>
                <View>
                    <Text style={styles.restaurantName}>{restaurantName}</Text>
                </View>
                <View style={{flex:1,flexDirection:"row"}}>
                    <View>
                        <Icon
                            name='place'
                            type='material'
                            color={colors.grey2}
                            size={18}
                            iconStyle={{
                                marginTop:3
                            }}
                        />
                        <Text style={styles.Min}>{farAway} Min</Text>
                    </View>

                    <View style={{flex:9,flexDirection:"row"}}>
                        <Text style={styles.address}>{businessAddress}</Text>
                    </View>
                    </View>
                </View> */}
      </View>

      <View style={styles.review}>
        <Text style={styles.average}>{averageReview} </Text>
        <Text style={styles.offtext}>OFF</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 200,
  },

  restaurantName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.grey1,
    marginTop: 5,
  },

  distance: {
    flex: 4,
    flexDirection: 'row',
    borderRightColor: colors.grey4,
    paddingHorizontal: 5,
    borderRightWidth: 1,
  },

  Min: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    color: colors.grey3,
  },

  address: {
    fontSize: 12,
    paddingTop: 5,
    color: colors.grey2,
    paddingHorizontal: 10,
  },

  review: {
    position: 'absolute',
    top: 0,
    right: 10,
    backgroundColor: 'rgba(249, 180, 45,1)',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },

  average: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -3,
  },
  offtext: {
    color: 'white',
    fontSize: 21,
    marginRight: 0,
    marginLeft: 0,
  },
});
