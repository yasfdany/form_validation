import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  TextInput,
  View,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import React from 'react';

const App = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle={'dark-content'} />
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={'Email'}
          />
        )}
        name="email"
      />
      <View style={styles.errorContainer}>
        {errors.email && (
          <Text style={styles.errorText}>Email tidak valid.</Text>
        )}
      </View>

      <Button
        style={styles.button}
        title="Submit"
        onPress={handleSubmit(onSubmit)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 24,
  },
  input: {
    borderColor: '#afafaf',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  button: {
    borderRadius: 12,
  },
  errorContainer: {
    marginVertical: 6,
  },
  errorText: {
    color: 'red',
  },
});

export default App;
