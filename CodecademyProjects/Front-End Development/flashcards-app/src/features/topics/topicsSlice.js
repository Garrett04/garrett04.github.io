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
                        icon
                    }
                }
            }
        },
        addQuizId: {
            reducer(state, action) {
                const { id, topicId } = action.payload;
                state.topics[topicId].quizIds.push(id);
            },
            prepare(id, topicId) {
                return {
                    payload: {
                        id,
                        topicId
                    }
                }
            }
        }
    }
})

export const selectAllTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;