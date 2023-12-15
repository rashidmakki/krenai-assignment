import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
  } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
function Home(props:any) {
  return (
   <View style={styles.container}>
    <Button title="Go To Utensils" onPress={()=>{props.navigation.navigate('Utensils',{screen:"Utensils"})}} />
   </View>
  )
}

export default Home