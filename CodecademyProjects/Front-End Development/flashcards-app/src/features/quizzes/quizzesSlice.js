import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	quizzes: {}
}

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        addQuiz: {
            reducer(state, action) {
                const { id } = action.payload;
                state.quizzes[id] = action.payload
            },
            prepare(id, name, topicId, cardIds) {
                return {
                    payload: {
                        id,
                        name,
                        topicId,
                        cardIds
                    }
                }
            }
        }
    }
})

export const selectAllQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;