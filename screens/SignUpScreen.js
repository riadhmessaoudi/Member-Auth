import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Container, Content, Toast, Item, Input, Label, Icon, Button, Picker } from 'native-base';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { signUpMember as signUpMemberAction } from "../redux/actions/memberAction";

const validationSchema = Yup.object().shape({

  member_firstName: Yup.string().required("First Name required"),
  member_lastName: Yup.string().required("Last Name required"),
  member_email: Yup.string().email("Email invalid").required("Email required"),
  member_gender: Yup.string().required("Gender required"),
  member_password: Yup.string().required("Password required").min(4, "Password must contain at least 4 characters"),
  member_confirmPassword: Yup.string().required("Confirm Password required ").oneOf([Yup.ref('member_password'), null], "Incorrect password"),
});


export default function SignUpScreen({ navigation }) {

  const [passwordHidden, setPasswordHidden] = useState(true)
  const [confirmPasswordHidden, setConfirmPasswordHidden] = useState(true)

  const dispatch = useDispatch()

  const handleRegister = async (values) => {

    dispatch(signUpMemberAction(values)).then(result => {
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

    <Container >
      <Content contentContainerStyle={styles.container} >

        <LinearGradient
          colors={['gold', 'white']}
          style={styles.linearGradientContainer}
          start={{ x: 0, y: 0.4 }}
          end={{ x: 1, y: 1 }}
        >

          <View style={styles.titleContainer} >
            <Text style={styles.titleText}>SIGN UP</Text>
          </View>

          <Formik

            validationSchema={validationSchema}
            initialValues={
              {
                member_firstName: '',
                member_lastName: '',
                member_email: '',
                member_gender: '',
                member_password: '',
                member_confirmPassword: '',
              }
            }
            onSubmit={values => {
              handleRegister(values)
            }}
          >
            {props => 
               (
                <View style={styles.form} >

                  <Item floatingLabel style={styles.itemInput}>
                    <Label>First Name</Label>
                    <Input
                      value={props.values.member_firstName}
                      onChangeText={props.handleChange('member_firstName')}
                      onBlur={props.handleBlur('member_firstName')}
                    />

                  </Item>
                  <View style={styles.errorMessageContainer} >
                    <Text style={styles.errorMessage}> {props.touched.member_firstName && props.errors.member_firstName}  </Text>
                  </View>

                  <Item floatingLabel style={styles.itemInput}>
                    <Label>Last Name</Label>
                    <Input
                      value={props.values.member_lastName}
                      onChangeText={props.handleChange('member_lastName')}
                      onBlur={props.handleBlur('member_lastName')}
                    />
                  </Item>

                  <View style={styles.errorMessageContainer} >
                    <Text style={styles.errorMessage}> {props.touched.member_lastName && props.errors.member_lastName}  </Text>
                  </View>

                  <Item floatingLabel style={styles.itemInput}>
                    <Label>E-Mail</Label>
                    <Input
                      value={props.values.member_email}
                      onChangeText={props.handleChange('member_email')}
                      onBlur={props.handleBlur('member_email')}
                    />
                  </Item>

                  <View style={styles.errorMessageContainer} >
                    <Text style={styles.errorMessage}> {props.touched.member_email && props.errors.member_email}  </Text>
                  </View>

                  <Item picker style={styles.itemInput}>
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="arrow-down" />}
                      placeholderStyle={{ color: "#bfc6ea" }}
                      placeholderIconColor="#007aff"
                      selectedValue={props.values.member_gender}
                      onValueChange={props.handleChange('member_gender')}
                      onBlur={props.handleBlur('member_gender')}
                    >
                      <Picker.Item disabled={true} label="Select Gender" value="" />
                      <Picker.Item label="Male" value="male" />
                      <Picker.Item label="Female" value="female" />
                    </Picker>
                  </Item>

                  <View style={styles.errorMessageContainer} >
                    <Text style={styles.errorMessage}> {props.touched.member_gender && props.errors.member_gender}  </Text>
                  </View>

                  <Item floatingLabel last style={styles.itemInput} >

                    <Icon type="AntDesign" name='lock1' />

                    <Label>Password</Label>

                    <Input
                      value={props.values.member_password}
                      onChangeText={props.handleChange('member_password')}
                      secureTextEntry={passwordHidden}
                      onBlur={props.handleBlur('member_password')}
                    />

                    <Icon
                      type="Feather"
                      name={passwordHidden ? 'eye' : 'eye-off'}
                      onPress={() => setPasswordHidden(!passwordHidden)}
                    />

                  </Item>

                  <View style={styles.errorMessageContainer} >
                    <Text style={styles.errorMessage}> {props.touched.member_password && props.errors.member_password}  </Text>
                  </View>

                  <Item floatingLabel last style={styles.itemInput} >

                    <Icon type="AntDesign" name='lock1' />

                    <Label>Confirm Password</Label>

                    <Input
                      value={props.values.member_confirmPassword}
                      onChangeText={props.handleChange('member_confirmPassword')}
                      secureTextEntry={confirmPasswordHidden}
                      onBlur={props.handleBlur('member_confirmPassword')}
                    />

                    <Icon
                      type="Feather"
                      name={confirmPasswordHidden ? 'eye' : 'eye-off'}
                      onPress={() => setConfirmPasswordHidden(!confirmPasswordHidden)}
                    />

                  </Item>

                  <View style={styles.errorMessageContainer} >
                    <Text style={styles.errorMessage}> {props.touched.member_confirmPassword && props.errors.member_confirmPassword}  </Text>
                  </View>

                  <View style={styles.buttonContainer} >
                    <Button
                      style={(props.dirty && props.isValid) ? styles.button : styles.buttonDisabled}
                      full
                      onPress={props.handleSubmit}
                      disabled={!(props.dirty && props.isValid)}
                    >
                      <Text style={styles.buttonText} > S'inscrire </Text>
                    </Button>
                    <View style={styles.linkTextContainer}>
                      <Text style={styles.linkText} onPress={() => navigation.navigate("SignInScreen") } > Sign In</Text>
                    </View>

                  </View>

                </View>
              )
            }
          </Formik>
        </LinearGradient>
      </Content>
    </Container>

  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexGrow: 1,
  },
  linearGradientContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginBottom: "5%"
  },
  titleText: {
    color: "#5f0f40",
    fontWeight: "bold",
    fontSize: 50,
    marginTop: "5%",
  },
  form: {
    alignItems: "center",
    justifyContent: "center",
    width: "70%"
  },

  itemInput: {
    marginTop: "1%",
  },
  errorMessageContainer: {
    display: "flex",
    width: "100%",
    marginTop: 10,
  },
  errorMessage: {
    color: "red",
  },
  buttonContainer: {
    marginTop: "10%",
    width: "100%",
  },
  button: {
    backgroundColor: "#5a189a"
  },
  buttonDisabled: {
    backgroundColor: "grey"
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