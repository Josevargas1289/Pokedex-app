import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userNameSlice = createSlice({
		name: 'Username',
    initialState: 'jose',
    reducers: {
        changeUsername: (state, action)=>{
        const inputValue = action.payload;
        return inputValue;
        }
        
    }
});

export const {changeUsername} = userNameSlice.actions;

export default userNameSlice.reducer;