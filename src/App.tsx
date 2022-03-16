// import {
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   View,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import {useForm, Controller} from 'react-hook-form';
// import React, {useState, useEffect} from 'react';
// import DropDownPicker from 'react-native-dropdown-picker';
// import Moment from 'moment';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import {createUser} from '../src/redux/actions/userActions';
// import {useDispatch, useSelector} from 'react-redux';
// import {ProgressBar} from '@react-native-community/progress-bar-android';

// const App = () => {
//   const {
//     control,
//     handleSubmit,
//     formState: {errors},
//     getValues,
//   } = useForm();
//   const dispatch = useDispatch();
//   const registerResponse = useSelector(state => state.user.registerResponse);
//   const loading = useSelector(state => state.user.loading);

//   const [openDate, setOpenDate] = useState(false);

//   const [openDropdown, setOpenDropdown] = useState(false);
//   const onSubmit = data => {
//     console.log(data);
//     dispatch(createUser(data));
//   };

//   useEffect(() => {
//     if (registerResponse?.data?.status === 200) {
//       Alert.alert('Success', registerResponse?.data?.message, [{text: 'OK'}]);
//     }
//   }, [registerResponse]);

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar backgroundColor="#ffffff" barStyle={'dark-content'} />
//       <ScrollView>
//         <Text style={[styles.text24, styles.mt12]}>Register</Text>
//         <Text>Please register first</Text>
//         <Controller
//           control={control}
//           rules={{
//             required: {
//               value: true,
//               message: 'Username Required',
//             },
//           }}
//           render={({field: {onChange, onBlur, value}}) => (
//             <View style={styles.mt6}>
//               <TextInput
//                 style={styles.input}
//                 onBlur={onBlur}
//                 onChangeText={text => {
//                   onChange(text.replace(/[^a-z0-9._]/g, '').trim());
//                 }}
//                 value={value}
//                 placeholder={'Username'}
//               />
//               <View style={styles.errorContainer}>
//                 {errors.username && (
//                   <Text style={styles.errorText}>
//                     {errors.username.message}
//                   </Text>
//                 )}
//               </View>
//             </View>
//           )}
//           name="username"
//         />
//         <Controller
//           control={control}
//           rules={{
//             required: {
//               value: true,
//               message: 'Email Required',
//             },
//             pattern: {
//               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//               message: 'Email not valid',
//             },
//           }}
//           render={({field: {onChange, onBlur, value}}) => (
//             <View>
//               <TextInput
//                 style={styles.input}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 placeholder={'Email'}
//               />
//               <View style={styles.errorContainer}>
//                 {errors.email && (
//                   <Text style={styles.errorText}>{errors.email.message}</Text>
//                 )}
//               </View>
//             </View>
//           )}
//           name="email"
//         />
//         <Controller
//           control={control}
//           rules={{
//             required: {
//               value: true,
//               message: 'Phone Required',
//             },
//             minLength: {
//               value: 10,
//               message: 'Minimum 10 Numbers',
//             },
//           }}
//           render={({field: {onChange, onBlur, value}}) => (
//             <View>
//               <TextInput
//                 keyboardType="numeric"
//                 style={styles.input}
//                 onBlur={onBlur}
//                 onChangeText={text => {
//                   onChange(text.replace(/[^0-9]/g, '').trim());
//                 }}
//                 value={value}
//                 placeholder={'Phone Number'}
//               />
//               <View style={styles.errorContainer}>
//                 {errors.phone && (
//                   <Text style={styles.errorText}>{errors.phone.message}</Text>
//                 )}
//               </View>
//             </View>
//           )}
//           name="phone"
//         />
//         <Controller
//           control={control}
//           rules={{
//             required: {
//               value: true,
//               message: 'Gender Required',
//             },
//           }}
//           render={({field: {onChange, _, value}}) => (
//             <View>
//               <DropDownPicker
//                 open={openDropdown}
//                 setOpen={setOpenDropdown}
//                 style={styles.input}
//                 value={value}
//                 items={[
//                   {label: 'Male', value: 'male'},
//                   {label: 'Female', value: 'female'},
//                 ]}
//                 onSelectItem={data => {
//                   onChange(data.value);
//                 }}
//                 listMode="SCROLLVIEW"
//                 placeholder="Select Gender"
//               />
//               <View style={styles.errorContainer}>
//                 {errors.gender && (
//                   <Text style={styles.errorText}>{errors.gender.message}</Text>
//                 )}
//               </View>
//             </View>
//           )}
//           name="gender"
//         />
//         <Controller
//           control={control}
//           rules={{
//             required: {
//               value: true,
//               message: 'Birthdate Required',
//             },
//           }}
//           render={({field: {onChange, _, value}}) => (
//             <View>
//               <TouchableOpacity
//                 onPress={() => {
//                   setOpenDate(true);
//                 }}>
//                 <View style={[styles.input, styles.p14]}>
//                   <Text style={value ? styles.defaultText : styles.hintText}>
//                     {value
//                       ? Moment(value).format('D MMMM yyyy')
//                       : 'Select Birthdate'}
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//               <DateTimePickerModal
//                 isVisible={openDate}
//                 mode="date"
//                 date={value ?? new Date(new Date().getYear() + 1900 - 17, 0, 1)}
//                 onConfirm={data => {
//                   setOpenDate(false);
//                   onChange(data);
//                 }}
//                 onCancel={() => {
//                   setOpenDate(false);
//                 }}
//               />
//               <View style={styles.errorContainer}>
//                 {errors.birthdate && (
//                   <Text style={styles.errorText}>
//                     {errors.birthdate.message}
//                   </Text>
//                 )}
//               </View>
//             </View>
//           )}
//           name="birthdate"
//         />
//         <Controller
//           control={control}
//           rules={{
//             required: {
//               value: true,
//               message: 'Password required',
//             },
//             minLength: {
//               value: 6,
//               message: 'Minimum 6 Characters',
//             },
//           }}
//           render={({field: {onChange, onBlur, value}}) => (
//             <View>
//               <TextInput
//                 secureTextEntry={true}
//                 style={styles.input}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 placeholder={'Password'}
//               />
//               <View style={styles.errorContainer}>
//                 {errors.password && (
//                   <Text style={styles.errorText}>
//                     {errors.password.message}
//                   </Text>
//                 )}
//               </View>
//             </View>
//           )}
//           name="password"
//         />
//         <Controller
//           control={control}
//           rules={{
//             required: {
//               value: true,
//               message: 'Confirm password required',
//             },
//             minLength: {
//               value: 6,
//               message: 'Minimum 6 Characters',
//             },
//             validate: value =>
//               value === getValues('password') || 'Password not match',
//           }}
//           render={({field: {onChange, onBlur, value}}) => (
//             <View>
//               <TextInput
//                 secureTextEntry={true}
//                 style={styles.input}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 placeholder={'Confirm Password'}
//               />
//               <View style={styles.errorContainer}>
//                 {errors.confirm_password && (
//                   <Text style={styles.errorText}>
//                     {errors.confirm_password.message}
//                   </Text>
//                 )}
//               </View>
//             </View>
//           )}
//           name="confirm_password"
//         />

//         <TouchableOpacity
//           style={styles.button}
//           title="Submit"
//           onPress={handleSubmit(onSubmit)}>
//           {loading ? (
//             <ProgressBar
//               styleAttr="Normal"
//               indeterminate={false}
//               color="white"
//               progress={0.5}
//               style={styles.progressStyle}
//             />
//           ) : (
//             <Text style={styles.buttonText}>Register</Text>
//           )}
//         </TouchableOpacity>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   progressStyle: {width: 18, height: 18},
//   text24: {
//     fontSize: 24,
//     color: 'black',
//     fontFamily: 'overpass',
//   },
//   mt6: {
//     marginTop: 6,
//   },
//   mt12: {
//     marginTop: 12,
//   },
//   p14: {
//     padding: 14,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ffffff',
//     paddingHorizontal: 24,
//   },
//   picker: {
//     borderColor: '#afafaf',
//     borderWidth: 2,
//     borderRadius: 8,
//     marginTop: 12,
//   },
//   input: {
//     borderColor: '#afafaf',
//     borderWidth: 2,
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     marginTop: 12,
//     fontSize: 14,
//     fontFamily: 'overpass',
//   },
//   buttonText: {
//     fontSize: 14,
//     color: 'white',
//   },
//   button: {
//     marginBottom: 24,
//     marginTop: 12,
//     padding: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 8,
//     backgroundColor: '#24a4ff',
//   },
//   errorContainer: {
//     marginTop: 6,
//   },
//   errorText: {
//     color: 'red',
//     fontFamily: 'overpass',
//   },
//   defaultText: {
//     color: 'black',
//     fontFamily: 'overpass',
//   },
//   hintText: {
//     color: 'gray',
//     fontFamily: 'overpass',
//   },
// });

// export default App;

import React from 'react';
import Navigator from './containers/Navigator';

const App = () => {
  return <Navigator />;
};

export default App;
