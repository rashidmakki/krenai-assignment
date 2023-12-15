import React, { useEffect, useRef } from 'react'
import { Text, View, StyleSheet, ScrollView, Image,Animated } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './ducks/slice'
import { getProductList } from './ducks/selector'
import { IProducts } from './type'
import Icon from 'react-native-vector-icons/FontAwesome5';
// @ts-ignore
import { heightToDp, width, widthToDp } from "rn-responsive-screen";
import SendBack from './components/sendBack'

const styles = StyleSheet.create({
  wrapper:{
    width: widthToDp(100),
    flex:1,
    flexDirection:"row",
    justifyContent:"flex-start",
    flexWrap:"wrap",
    paddingLeft:10,
    paddingBottom:10,
    paddingRight:10,
    gap:10
  },
  sendBackContainer:{
    width: widthToDp(100),
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    padding:10,
  },
  container: {
    marginTop: 20,
    flexDirection: "column",
    borderWidth: 1,
    paddingBottom: 10,
    borderColor: "#e6e6e6",
    width: widthToDp("45%"),
    borderRadius: 10,
  },
  imageWrapper:{
    width: widthToDp(45),
    height: heightToDp(30),
    borderRadius: 10,
    position:"relative"
  },
  image: {
    width: widthToDp(45),
    height: heightToDp(30),
    borderRadius: 10,
    position:"absolute"
  },
  iconContainer:{
    width: widthToDp(45),
    position:"absolute",
    flex:1,
    flexDirection:"row",
    justifyContent:"flex-end",
    padding:10
  },
  details:{
    width: widthToDp(40),
    minHeight:heightToDp(18),
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  info: {
    marginLeft: widthToDp(3),
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: heightToDp(2),
    width: widthToDp(50),
  },
  description: {
    fontSize: widthToDp(3.5),
    color: "#8e8e93",
    marginTop: heightToDp(2),
  },

  price: {
    fontSize: widthToDp(4),
  },
  quantity: {
    fontSize: widthToDp(4),
  },
  filterContainer:{
    width: widthToDp(100),
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    paddingTop:20
  },
  filterTitleContainer:{
   flex:1,
   flexDirection:"row",
   paddingLeft:4,
   alignItems:"center"
  },
  filterTitle:{
   fontSize:widthToDp(4),
   fontWeight:"bold"
  },
  rightFilterIconContainer:{
   flex:1,
   flexDirection:"row",
   justifyContent:"flex-end"
  },
  iconContent:{
    flex:1,
    flexDirection:"row",
    gap:4,
    alignItems:"center"
  }
});


const Product = ({product}:{product:IProducts}) =>{
return(
  <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: product.mediaUrl }} style={styles.image} />
        <View style={styles.iconContainer}>
        <Icon name="heart" size={28}  color={"#000"}/>
        </View>
      </View>
      <View style={styles.info}>
        <View style={styles.details}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.description}>
            {product.category[0].name} 
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.price}>₹{ product.variants[0].sellingPrice}</Text>
        </View>
      </View>
    </View>
  )
}

function Cart(props:any) {
  const dispatch = useDispatch()
  const products:Array<IProducts> = useSelector(getProductList)
  useEffect(()=>{
   dispatch(getProducts())
  },[])

  return (
    <ScrollView>
      <View style={styles.filterContainer}>
        <View style={styles.filterTitleContainer}>
        <Text style={styles.filterTitle}> {products.length} Products </Text>
        </View>
        <View style={styles.rightFilterIconContainer}>
          <View style={styles.iconContent}>
            <Icon name="sort-amount-up" size={24}  color="#000"/>
            <Text> Sort </Text>
          </View>
          <View style={styles.iconContent}>
            <Icon name="filter" size={24}  color="#000"/>
            <Text> Filter </Text>
          </View>
        </View>
      </View>
        <View style={styles.wrapper}>
        {
          products.map((product:IProducts, index:number)=>(
            <Product key={index} product={product} />
          ))
        }
        </View>
    </ScrollView>
  )
}

export default Cart