import { createSlice } from "@reduxjs/toolkit";

const persons={
  Namık: true,
  Eda: true,
  Suzan: true,
  Engin: true,
  Samet: true,
}
const initialState ={
  persons
}

const usersSlice = createSlice({
name:"user",
initialState,
reducers:{
  randomUsers:(state,action)=>{
    const { name, status } = action.payload;
    if (state.persons[name] !== undefined) {
      state.persons[name] = status;
    }


  }
}



})
export const { randomUsers} = usersSlice.actions

export default usersSlice.reducer