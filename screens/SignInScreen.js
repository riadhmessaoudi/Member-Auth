import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Toast, Item, Input, Label, Icon, Button } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

import { Formik } from 'formik';

import { signInMember as signInMemberAction } from "../redux/actions/memberAction";


export default function SignInScreen({ navigation }) {

  const dispatch = useDispatch()

  const [passwordHidden, setPasswordHidden] = useState(true)

  const handleLogin = async (member_email, member_password) => {

    await dispatch(signInMemberAction(member_email, member_password)).then(result => {
      if (!result.response) {
        Toast.show({
          text: result.error,
          buttonText: "Ok",
          duration: 3000,
          type: "danger"
        })
      }
    })
  }

  return (

    <Container  >
      <Content contentContainerStyle={styles.container} >
        <LinearGradient
          colors={['gold', 'white']}
          style={styles.linearGradientContainer}
          start={{ x: 0, y: 0.4 }}
          end={{ x: 1, y: 1 }}
        >

          <View style={styles.titleContainer} >
            <Text style={styles.titleText}>SIGN IN</Text>
          </View>

          <Formik
            initialValues={{ email_member: '', password_member: '' }}
            onSubmit={values => {
              handleLogin(values.email_member, values.password_member)
            }}
          >
            {props => (
              <View style={styles.form} >

                <Item floatingLabel style={styles.itemInput}>
                  <Icon type="AntDesign" name='user' />
                  <Label style={styles.itemLabel}> E-Mail</Label>
                  <Input
                    value={props.values.email_member}
                    onChangeText={props.handleChange('email_member')}
                  />
                </Item>

                <Item floatingLabel last style={styles.itemInput} >

                  <Icon type="AntDesign" name='lock1' />

                  <Label style={styles.itemLabel} >Password</Label>

                  <Input
                    value={props.values.password_member}
                    onChangeText={props.handleChange('password_member')}
                    secureTextEntry={passwordHidden}
                  />

                  <Icon
                    type="Feather"
                    name={passwordHidden ? 'eye' : 'eye-off'}
                    onPress={() => setPasswordHidden(!passwordHidden)}

                  />

                </Item>

                <View style={styles.buttonContainer} >
                  <Button style={styles.button} full onPress={props.handleSubmit}>
                    <Text style={styles.buttonText}> Login </Text>
                  </Button>
                  <View style={styles.linkTextContainer}>
                      <Text style={styles.linkText} onPress={() => navigation.navigate("SignUpScreen") } > Sign Up</Text>
                    </View>
                </View>

              </View>

            )}
          </Formik>

        </LinearGradient>

      </Content>
    </Container>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradientContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginBottom: "20%"
  },
  titleText: {
    color: "#5f0f40",
    fontWeight: "bold",
    fontSize: 50,

  },

  form: {
    alignItems: "center",
    justifyContent: "center",
    width: "70%"
  },

  itemInput: {
    marginTop: "5%",
  },

  buttonContainer: {
    marginTop: "20%",
    width: "100%",
  },
  button: {
    backgroundColor: "#5a189a"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  linkTextContainer: {
    marginTop: "3%",
    display: "flex",
    flexDirection:"row",
    justifyContent:"center",

  },
  linkText: {
    display: "flex",
    textDecorationLine: "underline",
    fontSize : 18,
  },
});