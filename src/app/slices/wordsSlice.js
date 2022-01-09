import { createSlice } from '@reduxjs/toolkit'

export const wordsSlice = createSlice({
    name: 'words',
    initialState: [{
        id: 0,
        englishWord: "Hello",
        turkishWord: "Merhaba",
    },
    {
        id: 1,
        englishWord: "Congrulations",
        turkishWord: "Tebrikler",
    },
    ],
    reducers: {
        addWord: (state, action) => {

            //tüm elemanları gez , eğer elemanın turkcesi VE ingilizcesi bizim payloadınki ile aynıysa  fonksiyonu çalıştırmayı durdur(return state)
            for (let i = 0; i < state.length; i++) {
                if (action.payload.englishWord == state[i].englishWord && action.payload.turkishWord == state[i].turkishWord) {
                    return state
                }
            }
            action.payload.id = state.length + action.payload.englishWord + action.payload.turkishWord
            state.push(action.payload)
            return state
        },
        editWord: (state, action) => {
            //action.payload { id:1,englishWord:"welcome",turkishWord:"Hoşgeldiniz" }
            const word = state.find(word => word.id == action.payload.id)
            word.englishWord = action.payload.en
            word.turkishWord = action.payload.tr
            return state
        },
        deleteWord: (state, action) => {
            state = state.filter(word => word.id != action.payload)
            return state
        },
    },
})

// Action creators are generated for each case reducer function
export const { addWord, editWord, deleteWord } = wordsSlice.actions

export default wordsSlice.reducer