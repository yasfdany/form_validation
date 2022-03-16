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
import {ProgressBar} from '@react-native-community/progress-bar-android';

const UsersScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.loadingGetUser);
  const response = useSelector(state => state.user.getUserResponse);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <SafeAreaView style={gs.container}>
      <StatusBar backgroundColor="#ffffff" barStyle={'dark-content'} />

      <View style={[gs.flex, gs.column]}>
        <Text style={[gs.black24, gs.m18]}>List User</Text>

        {loading ? (
          <View style={[gs.flex, gs.column, gs.mainCenter]}>
            <ProgressBar
              styleAttr="Normal"
              indeterminate={false}
              color="blue"
              progress={0.5}
            />
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={response?.data?.data}
            style={styles.listStyle}
            contentContainerStyle={styles.contentListStyle}
            renderItem={({item, _}) => (
              <ItemUser
                onPress={() => {
                  navigation.push('CreateUserScreen', item);
                }}
                user={item}
                style={styles.itemStyle}
              />
            )}
          />
        )}
      </View>

      <TouchableOpacity
        style={styles.button}
        title="Submit"
        onPress={() => {
          navigation.push('CreateUserScreen');
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
