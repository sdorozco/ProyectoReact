import { Person } from "@/models";
import {configureStore} from '@reduxjs/toolkit';
import { favoritesSlice,peopleSlice } from "./states";


export interface AppProps {
    people: Person[];
    favorites: Person[]
}

export default configureStore<AppProps>({
    reducer:{
        people: peopleSlice.reducer,
        favorites: favoritesSlice.reducer
    }
})