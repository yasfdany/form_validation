import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import gs from '../../../constants/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../../../redux/actions/userActions';
import ItemUser from '../../components/ItemUser';
import {useNavigation} from '@react-navigation/native';

const UsersScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.loadingGetUser);
  const response = useSelector(state => state.user.getUserResponse);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    console.log(response?.data?.data);
  }, [response]);

  return (
    <SafeAreaView style={gs.container}>
      <StatusBar backgroundColor="#ffffff" barStyle={'dark-content'} />

      <View style={[gs.flex, gs.column]}>
        <Text style={[gs.black24, gs.m18]}>List User</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={response?.data?.data}
          style={styles.listStyle}
          contentContainerStyle={styles.contentListStyle}
          renderItem={({item, _}) => (
            <ItemUser user={item} style={styles.itemStyle} />
          )}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        title="Submit"
        onPress={() => {
          navigation.navigate('CreateUserScreen');
        }}>
        <Icon name="add" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    flexGrow: 0,
    marginVertical: 6,
  },
  itemStyle: {
    marginBottom: 12,
  },
  contentListStyle: {
    paddingHorizontal: 14,
  },
  button: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#24a4ff',
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    right: 32,
    bottom: 32,
  },
});

export default UsersScreen;
