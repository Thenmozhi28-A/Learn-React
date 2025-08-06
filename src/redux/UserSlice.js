import { createSlice } from "@reduxjs/toolkit";

const initialState={
    users:[],
}

export const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        //frst parameter state = current state second parameter action = dispatch pana pothu ena data pass panureno atha action ellam kedaikum

        //action,payload = state,action

        setUsers:(state,action)=>{
            state.users=[...state.users,action.payload];
        },

        deleteUser:(state,action)=>{
            state.users=state.users.filter(
                (user,index)=>index !== action.payload
            );
        },
    },
});

export const{setUsers,deleteUser}=userSlice.actions;
 
export default userSlice.reducer;