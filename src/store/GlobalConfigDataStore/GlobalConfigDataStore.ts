import {createSlice} from '@reduxjs/toolkit'

interface IGlobalConfigDataStore {
    toggleModal:boolean,
    eventData: {}
}

const initialState: IGlobalConfigDataStore = {
    toggleModal:false,
    eventData:{}
}

const GlobalConfigDataStore = createSlice({
    name: 'GlobalConfigDataStore',
    initialState,
    reducers: {
       toggleModalCalendar(state){
           state.toggleModal = !state.toggleModal
       },
        setEventData(state,action){
           state.eventData = action.payload
        }
    },
})

export const {
    toggleModalCalendar,
    setEventData
} = GlobalConfigDataStore.actions

export default GlobalConfigDataStore.reducer