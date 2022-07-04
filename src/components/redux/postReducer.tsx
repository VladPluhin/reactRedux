export interface PostState {
    posts: any[],
}

export enum ACTIONS_LIST {
    FETCH_POST = 'FETCH_POST',
}

interface FetchPostAction {
    type: any
    payload?: any
}

export const FETCH_POST:  FetchPostAction = {
   type: ACTIONS_LIST.FETCH_POST
}

const initialState: PostState = {
    posts: [],
}

export const postReducer = (state = initialState,  action:FetchPostAction): PostState => {
    switch (action.type) {
        case ACTIONS_LIST.FETCH_POST:
            return { ...state, posts: [...action.payload] }
        default:
            return state
    }
}