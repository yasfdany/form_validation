import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';

import {deleteUser, getUsers} from '../../redux/actions/userActions';
import gs from '../../constants/globalStyles';

const ItemUser = props => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={[
          gs.row,
          gs.crossCenter,
          gs.spaceBetween,
          styles.itemContainer,
          props.style,
        ]}>
        <View style={gs.column}>
          <Text style={gs.black18}>{props.user.username}</Text>
          <Text style={gs.gray16}>{props.user.email}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            Alert.alert(
              'Delete User',
              'Are you sure want to delete this user?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {},
                },
                {
                  text: 'Delete',
                  onPress: () => {
                    dispatch(
                      deleteUser({email: props.user.email}, response => {
                        if (response?.data?.status === 200) {
                          dispatch(getUsers());
                          Alert.alert('Success', response?.data?.message, [
                            {
                              text: 'OK',
                            },
                          ]);
                        }
                      }),
                    );
                  },
                },
              ],
            );
          }}>
          <Icon name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
  },
  itemContainer: {
    padding: 12,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 6,
  },
});

export default ItemUser;
