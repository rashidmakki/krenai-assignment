import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
// @ts-ignore
import { heightToDp, width, widthToDp } from "rn-responsive-screen";

const styles = StyleSheet.create({
    sendBackContainer:{
      width: "100%",
      height:"100%",
      flex:1,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"
    },
    titleContainer:{
     flex:1,
     flexDirection:"row",
     gap:8
    },
    title:{
     fontSize:widthToDp(5),
     color:"#000",
     fontWeight:"bold"
    },
    rightIconContainer:{
     flex:1,
     flexDirection:"row",
     gap:20,
     justifyContent:"flex-end"
    }
  });

function SendBack(props:any) {
  return (
    <View style={styles.sendBackContainer}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}> Utensils </Text>
        </View>
        <View style={styles.rightIconContainer}>
        <Icon name="search" size={24}  color="#000"/>
        <Icon name="heart" size={24}  color="#000"/>
        <Icon name="shopping-bag" size={24}  color="#000"/>
        </View>
    </View>
  )
}

export default SendBack