import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import gs from '../../constants/globalStyles';

const ItemUser = props => {
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
        <TouchableOpacity style={styles.buttonStyle} onPress={() => {}}>
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
