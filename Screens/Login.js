import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  loginValidationSchema
} from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function Login() {

  const navigation = useNavigation();

  return (
    <View style={styles.body}>
      <View style={styles.form}>
        <Text style={styles.logintext1}>Bienvenido</Text>
        <Text style={styles.logintext2}>Fundación Mía</Text>
        <Text style={styles.logintext3}>Construyendo Futuro</Text>

        <Formik
          validateOnMount={true}
          validationSchema={loginValidationSchema}
          initialValues={{ email: '', contraseña: '' }}
          onSubmit={values => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <Text style={styles.inputtext} >Usuario</Text>
              <TextInput style={styles.email}
                placeholder="Usuario"
              />

              {(errors.email && touched.email) &&
                <Text style={styles.errorText}>{errors.email}</Text>
              }
              <Text style={styles.inputtext} >Contraseña</Text>
              <TextInput style={styles.contraseña}
                placeholder="Contraseña"
              />

              {(errors.telefono && touched.telefono) &&
                <Text style={styles.errorText}>{errors.telefono}</Text>
              }

              <TouchableOpacity
                style={styles.boton}
                onPress={() => navigation.navigate("auth")}
              >
                <Text style={styles.botontext}>Iniciar Sesion</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({

  body: {
    backgroundColor: "#FF3939",
    height: "100%",
    width: "100%"
  },

  form: {
    backgroundColor: "white",
    margin: 30,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },

  logintext1: {
    color: "black",
    fontSize:25,
    marginTop: 50,
    textAlign: 'center',
  },

  logintext2: {
    color: "black",
    fontSize:20,
    marginTop: 30,
    textAlign: 'center',
  },

  logintext3: {
    color: "black",
    marginTop: 10,
    fontSize:20,
    textAlign: 'center',
  },

  inputtext:{
    height: 45,
    color: "black",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  email: {
    height: 45,
    color: "black",
    fontSize: 20,
    marginTop:-20,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "gray",
  },

  contraseña: {
    height: 45,
    color: "black",
    fontSize: 20,
    marginTop:-20,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "gray",
  },

  boton: {
    backgroundColor: '#198754',
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 20,
    width: 220,
    borderColor: "#CDD1E2",
          borderWidth: 1.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },

  botontext: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: "center",
    padding: 11
  },

  errorText: {
    fontSize: 14,
    color: 'red',
    marginBottom: 20,
    marginLeft: 20
  }

});

