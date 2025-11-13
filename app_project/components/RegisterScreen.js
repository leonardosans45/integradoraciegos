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
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function RegisterScreen({ navigation }) {
  const RegisterSchema = Yup.object().shape({
    Name: Yup.string().required('Please fill out all fields'),
    email: Yup.string().email('Please enter a valid email').required('Please fill out all fields'),
    password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Please fill out all fields'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords do not match')
      .required('Please fill out all fields'),
  });

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Crear Cuenta</Text>
          <Text style={styles.subtitle}>¡Únete a nosotros!</Text>

          <Formik
            initialValues={{
              Name: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={RegisterSchema}
            onSubmit={(values) => {
              // Aquí puedes agregar la lógica de registro real
              Alert.alert('Éxito', '¡Cuenta creada exitosamente!', [
                { text: 'OK', onPress: () => navigation.navigate('Login') }
              ]);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[
                      styles.input,
                      touched.Name && errors.Name ? styles.inputError : null,
                    ]}
                    placeholder="Nombre"
                    onChangeText={handleChange('Name')}
                    onBlur={handleBlur('Name')}
                    value={values.Name}
                    autoCapitalize="words"
                    placeholderTextColor="#999"
                  />
                  {touched.Name && errors.Name && (
                    <Text style={{ color: 'red', fontSize: 12 }}>{errors.Name}</Text>
                  )}
                </View>

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
                    placeholder="Contraseña (mín. 6 caracteres)"
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

                <View style={styles.inputContainer}>
                  <TextInput
                    style={[
                      styles.input,
                      touched.confirmPassword && errors.confirmPassword ? styles.inputError : null,
                    ]}
                    placeholder="Confirmar contraseña"
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                    secureTextEntry
                    placeholderTextColor="#999"
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <Text style={{ color: 'red', fontSize: 12 }}>{errors.confirmPassword}</Text>
                  )}
                </View>

                <TouchableOpacity onPress={handleSubmit}>
                  <LinearGradient
                    colors={['#007bff', '#0056b3']}
                    style={styles.registerButton}
                  >
                    <Text style={styles.registerButtonText}>Crear Cuenta</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </>
            )}
          </Formik>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>¿Ya tienes cuenta? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <LinearGradient
                  colors={['#007bff', '#0056b3']}
                  style={styles.loginLinkContainer}
                >
                  <Text style={styles.loginLink}>Inicia sesión aquí</Text>
                </LinearGradient>
              </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
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
  registerButton: {
    backgroundColor: '#28a745',
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
  registerButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  loginText: {
    color: '#666',
    fontSize: 16,
  },
  loginLinkContainer: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  loginLink: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
