import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: {}
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers: {
        addCard: {
            reducer(state, action) {
                const { id, front, back } = action.payload;
                state.cards[id] = action.payload;
            },
            prepare(id, front, back) {
                return {
                    payload: {
                        id,
                        front,
                        back
                    }
                }
            }
        }
    }
})

export const selectAllCardsById = (id) => (state) => state.cards.cards[id];
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer; 