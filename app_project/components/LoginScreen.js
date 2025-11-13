import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ navigation }) {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email').required('Please fill out all fields'),
    password: Yup.string().required('Please fill out all fields'),
  });

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Login to access your smart cane features.</Text>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            // Aquí puedes agregar la lógica de autenticación real
            Alert.alert('Éxito', 'Bienvenido de vuelta!', [
              { text: 'OK', onPress: () => navigation.navigate('Home') }
            ]);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[
                    styles.input,
                    touched.email && errors.email ? styles.inputError : null,
                  ]}
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholderTextColor="#999"
                />
                {touched.email && errors.email && (
                  <Text style={{ color: 'red', fontSize: 12 }}>{errors.email}</Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={[
                    styles.input,
                    touched.password && errors.password ? styles.inputError : null,
                  ]}
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                  placeholderTextColor="#999"
                />
                {touched.password && errors.password && (
                  <Text style={{ color: 'red', fontSize: 12 }}>{errors.password}</Text>
                )}
              </View>

              <TouchableOpacity onPress={handleSubmit}>
                <LinearGradient
                  colors={['#007bff', '#0056b3']}
                  style={styles.loginButton}
                >
                  <Text style={styles.loginButtonText}>Login</Text>
                </LinearGradient>
              </TouchableOpacity>
            </>
          )}
        </Formik>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>¿Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <LinearGradient
              colors={['#007bff', '#0056b3']}
              style={styles.registerLinkContainer}
            >
              <Text style={styles.registerLink}>sing up here</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    color: '#666',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 2,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  registerText: {
    color: '#666',
    fontSize: 16,
  },
  registerLinkContainer: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  registerLink: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
