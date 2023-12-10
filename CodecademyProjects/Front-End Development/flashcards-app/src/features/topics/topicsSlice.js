import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {},
}

const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        addTopic: {
            reducer(state, action) {
                const { id, name, icon } = action.payload;
                state.topics[id] = {
                    id, 
                    name, 
                    icon, 
                    quizIds: [] 
                }; 
            },
            prepare(id, name, icon) {
                return {
                    payload: {
                        id,
                        name,
                        icon,
                        quizIds: []
                    }
                }
            }
        },
        addQuizId: {
            reducer(state, action) {
                const { id, name, topicId, cardIds } = action.payload;
                const quizId = state.quizzes.find(topicId => state.quizzes[topicId] === id);
                if (quizId) {
                    state.quizIds.push(quizId);
                }
            },
            prepare(id) {
                return {
                    payload: {
                        id
                    }
                }
            }
        }
    }
})

export const selectAllTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;