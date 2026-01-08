import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState ={
  products:[],
  selectItems:0,
  totalPrice:0,
  tax:0,
  taxRate:0.05,
  grandTotal:0,

}

const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    addToCart:(state,action)=>{
      const payloadId = action.payload.id;

      const isExist = state.products.find((product)=>product.id===payloadId);

      if(isExist){
        console.log("items already added")
      }
      else{
        state.products.push({...action.payload,quantity:1})
      };

      state.selectItems = setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);
      state.tax = setTax(state);
      state.grandTotal = setGrandTotal(state);
      
      
    },
    updateQuantity:(state,action)=>{
      const payloadId = action.payload.id;
      state.products.map((product)=>{
        if(product.id===payloadId){
          if(action.payload.type==='increment'){
            product.quantity++;
          }else if(action.payload.type==='decrement'){
            if(product.quantity>1){
              product.quantity--;
            }
          }
        }

        return product;
      })

      state.selectItems=setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);
      state.tax = setTax(state);
      state.grandTotal = setGrandTotal(state);
    },
    removeFromCart:(state,action)=>{
      const payloadId= action.payload.id;
      state.products=state.products.filter((product)=>product.id !== payloadId)

      state.selectItems=setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);
      state.tax = setTax(state);
      state.grandTotal = setGrandTotal(state);
    }



  }
})

export const setSelectedItems = (state)=>state.products.reduce((total,product)=>{
  return Number(total+product.quantity)
},0)

export const setTotalPrice= (state)=>state.products.reduce((total,product)=>{
  return Number(total+product.quantity*product.price)
},0)

export const setTax =(state)=>setTotalPrice(state)*state.taxRate;

export const setGrandTotal = (state)=>{
  return setTotalPrice(state)+setTotalPrice(state)*state.taxRate;
}

export const {addToCart,updateQuantity,removeFromCart}=cartSlice.actions
export default cartSlice.reducer