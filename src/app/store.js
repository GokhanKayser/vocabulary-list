import { configureStore } from '@reduxjs/toolkit'
import wordsSlice from './slices/wordsSlice'

export default configureStore({
    reducer: {
        words: wordsSlice
    },
})