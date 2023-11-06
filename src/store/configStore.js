import { configureStore } from '@reduxjs/toolkit'
import counterReducer from 'store/reducers/counter';

const configStore = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default configStore