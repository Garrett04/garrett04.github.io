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
        }
    }
})

export const selectAllTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;