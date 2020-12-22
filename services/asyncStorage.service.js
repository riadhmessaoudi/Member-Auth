import AsyncStorage from '@react-native-community/async-storage'

export const saveToken = async (value) => {
    try {
      await AsyncStorage.setItem("@member_token", value)
      return true
    } catch (e) {
        return false
    }
  }

export const getToken = async () => {
    try {
      const member_token = await AsyncStorage.getItem("@member_token")
  
      if (member_token !== null) {
        return member_token
      }
    } catch (e) {
      return false
    }
  }

  export const removeToken = async () => {

    await AsyncStorage.removeItem('@member_token').then( result => {
      return true
    })
    
  }