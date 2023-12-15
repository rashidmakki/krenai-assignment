import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IInitialState, IProducts } from '../type';


const initialState:IInitialState = {
    products:[]
}
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
     getProducts:()=>{},
     setProducts:(state:any,actions:PayloadAction<Array<IProducts>>)=>{
        state.products = actions.payload
     },
    }
  })
  
  export const {
    getProducts,
    setProducts
  } = productSlice.actions
  
  export default productSlice.reducer;
  