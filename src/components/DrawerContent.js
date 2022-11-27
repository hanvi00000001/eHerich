import React, {useState, useConText, useEffect} from 'react';

import {
  View,
  StyleSheet,
  Text,
  Linking,
  Pressable,
  Alert,
  Switch,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Avatar, Button, Icon} from '@rneui/themed';
import {colors} from '../global/styles';

export default function DrawerContent(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{backgroundColor: colors.buttons}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              size={75}
              source={{
                uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6233922d-753c-4152-9afe-3b82ce990681/d9vwexy-37ac9f4d-253b-4579-9764-e44b362136ae.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYyMzM5MjJkLTc1M2MtNDE1Mi05YWZlLTNiODJjZTk5MDY4MVwvZDl2d2V4eS0zN2FjOWY0ZC0yNTNiLTQ1NzktOTc2NC1lNDRiMzYyMTM2YWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9ZKCJjZY70YeyQxoqAThaHnAt78HgU_F2lBuljklaIA',
              }}
            />
            <View style={{marginLeft: 15}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: colors.cardbackground,
                  fontSize: 18,
                }}>
                Elsa
              </Text>
              <Text style={{color: colors.cardbackground, fontSize: 14}}>
                elsa@gmail.com
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingBottom: 5,
            }}>
            <View style={{flexDirection: 'row', marginTop: 0}}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: colors.cardbackground,
                    fontSize: 18,
                  }}>
                  1
                </Text>
                <Text style={{color: colors.cardbackground, fontSize: 14}}>
                  My Likes
                </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginTop: 0}}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: colors.cardbackground,
                    fontSize: 18,
                  }}>
                  0
                </Text>
                <Text style={{color: colors.cardbackground, fontSize: 14}}>
                  Shopping Cart
                </Text>
              </View>
            </View>
          </View>
        </View>

        <DrawerItemList {...props} />

        <DrawerItem
          label="Payment"
          icon={({color, size}) => (
            <Icon
              type="material-commuinity"
              name="credit-card"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Promotions"
          icon={({color, size}) => (
            <Icon type="material" name="loyalty" color={color} size={size} />
          )}
        />

        <DrawerItem
          label="Settings"
          icon={({color, size}) => (
            <Icon type="material" name="settings" color={color} size={size} />
          )}
        />

        <DrawerItem
          label="Help"
          icon={({color, size}) => (
            <Icon
              type="material"
              name="help-outline"
              color={color}
              size={size}
            />
          )}
        />

        <View style={{borderTopWidth: 1, borderTopColor: colors.grey5}}>
          <Text style={styles.preferrences}>Preferrences</Text>

          <View style={styles.switchText}>
            <Text style={styles.darkthemeText}>Dark Theme</Text>
            <View style={{paddingRight: 10}}>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor="#f4f3f4"
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>

      <DrawerItem
        label="Sign Out"
        icon={({color, size}) => (
          <Icon type="material" name="logout" color={color} size={size} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    borderWidth: 4,
    borderColor: colors.pagebackground,
  },

  preferrences: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 20,
  },
  switchText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingVertical: 5,
    paddingRight: 10,
  },
  darkthemeText: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 0,
    fontWeight: 'bold',
  },
});
