import { localStorageTypes, Person } from '@/models';
import {createSlice, current} from '@reduxjs/toolkit';
import { Action } from 'rxjs/internal/scheduler/Action';

const initialState : Person[] = []

 const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem('people', JSON.stringify(value));
 }
 const getLocalStorage = (key: string) => {
    return localStorage.getItem(key); 
 }
 
export const favoritesSlice = createSlice({
    name: 'people',    
    initialState: getLocalStorage(localStorageTypes.FAVORITE) ? JSON.parse(getLocalStorage(localStorageTypes.FAVORITE) as string) : initialState,
    reducers: {
        addFavorite: (state, action) => {
            setLocalStorage(localStorageTypes.FAVORITE,action.payload)
            return action.payload;
        },
        revomeFavorites: (state, action) => {
            const filteredState = current(state).filter((p: Person) =>
            p.id !== action.payload.id)
            return filteredState;
        }
    }
})

export const {addFavorite,revomeFavorites} = favoritesSlice.actions;
