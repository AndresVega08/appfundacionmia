import React, { useState, useEffect, Component } from 'react';
import axios from 'axios'
import { StyleSheet, Alert, View, TextInput, TouchableOpacity, } from 'react-native';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Form,
  Thumbnail,
  Label,
  Button,
  Text
} from 'native-base';
import { AuthContext } from '../context/AuthContext';

const Login = ({navigation}) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading, Login} = useContext(AuthContext);



  return (
    <Container style={styles.body}>
      <View style={styles.form}>
        <Text style={styles.logintext1}>Bienvenido</Text>
        <Text style={styles.logintext2}>Fundación Mía</Text>
        <Text style={styles.logintext3}>Construyendo Futuro</Text>
        <Form>
          <Text style={styles.inputtext}>Usuario</Text>
          <Item style={styles.email} >
            <TextInput
              placeholder="Introduzca su usuario"
              value={usernameOrEmail}
              onChangeText={text => setUsernameOrEmail(text)}
            />
          </Item>
          <Text style={styles.inputtext}>Contraseña</Text>
          <Item style={styles.contraseña} >
            <TextInput
              placeholder="Introduzca su contraseña" secureTextEntry 
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </Item>
          <Button style={styles.boton} onPress={() => {login(email, password)}} >
            <Text style={styles.botontext} >Iniciar Sesion</Text>
          </Button>
        </Form>
      </View>
    </Container>
  );
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
    marginTop: 100,
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
    fontSize: 25,
    marginTop: 50,
    textAlign: 'center',
  },

  logintext2: {
    color: "black",
    fontSize: 20,
    marginTop: 30,
    textAlign: 'center',
  },

  logintext3: {
    color: "black",
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },

  inputtext: {
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
    marginTop: -20,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "gray",
  },

  contraseña: {
    height: 50,
    color: "black",
    fontSize: 20,
    marginTop: -20,
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
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 20,
    width: 240,
    height: 55,
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
  },

});

export default Login;