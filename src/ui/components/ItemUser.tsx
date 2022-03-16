import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

const ItemUser = props => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={[styles.itemContainer, props.style]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 12,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 6,
  },
});

export default ItemUser;
