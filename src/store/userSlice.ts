import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export type User = {
  id: number;
  name: string;
  email: string;
  address?: {
    street: string;
    city: string;
  };
};


type UserState = {
  users: User[];
  loading: boolean;
};

const initialState: UserState = {
  users: [],
  loading: false,
};


export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return (await res.json()) as User[];
});


const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },

    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter(
        (user) => user.id !== action.payload
      );
    },

    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(
        (u) => u.id === action.payload.id
      );

      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;