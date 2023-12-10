import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	quizzes: {
		'456': {
			id: '456',
			name: 'quiz name',
			topicId: '123',
			cardIds: ['1', '2', '3']
		},
		'789': {
			id: '789',
			name: 'quiz name 2',
			topicId: '456',
			cardIds: ['4', '5', '6']
		}
	}
}

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: initialState,
    reducers: {
        addQuiz: {
            reducer(state, action) {
                const { id, name, topicId, cardIds } = action.payload;
                state.quizzes[id] ={
                    id,
                    name,
                    topicId,
                    cardIds: []
                }
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