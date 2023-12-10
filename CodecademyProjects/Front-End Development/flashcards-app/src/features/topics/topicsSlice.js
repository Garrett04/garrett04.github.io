import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {
        '123': {
            id: '123',
            name: 'example topic',
            icon: 'icon url'
        },
        '234': {
            id: '234',
            name: 'example topic 2',
            icon: 'icon url 2'
        }
    }
}

const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: {
            reducer(state, action) {
                const { id, name, icon } = action.payload;
                state[id] = action.payload;
            }
        }
    }
})

export const selectAllTopics = (state) => state.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;