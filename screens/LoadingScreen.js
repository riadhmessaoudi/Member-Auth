import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container,  Content, Spinner } from 'native-base';import { LinearGradient } from 'expo-linear-gradient';

export default function AuthLoadingScreen() {

  return (
    <Container>
      <Content contentContainerStyle={styles.container}>
        <LinearGradient
          colors={['#8f44ad', 'white']}
          style={styles.linearGradientContainer}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Spinner color='black' />
          <Text style={styles.loadingText} >Loading ...  </Text>
        </LinearGradient>
      </Content>
    </Container>
  )

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
  loadingText : {
    fontWeight:"bold",
    fontSize: 20,
    color:"black"
  }
})