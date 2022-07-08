export interface PostState {
    posts: any[],
    likedPosts: any[],
    searchedPosts: any[],
    likedRow: boolean
}

export enum ACTIONS_LIST {
    FETCH_POSTS = 'FETCH_POSTS',
    LIKED_POST = 'LIKED_POST',
    REMOVE_POST = 'REMOVE_POST',
    FIND_POST = 'FIND_POST'
}


interface FetchPostAction {
    type: any
    payload?: any
}

export const FETCH_POST:  FetchPostAction = {
   type: ACTIONS_LIST.FETCH_POSTS
}
export const REMOVE_POST:  FetchPostAction = {
    type: ACTIONS_LIST.REMOVE_POST
 }

export const LIKED_POST:  FetchPostAction = {
    type: ACTIONS_LIST.LIKED_POST
}
export const  FIND_POST:  FetchPostAction = {
    type: ACTIONS_LIST. FIND_POST
 }
 
const initialState: PostState = {
    posts: [],
    likedPosts:[],
    searchedPosts:[],
    likedRow:false
}

export const postReducer = (state = initialState,  action:FetchPostAction): PostState => {
    switch (action.type) {
        case ACTIONS_LIST.FETCH_POSTS:
            return { ...state, posts: [...action.payload] }
        case ACTIONS_LIST.LIKED_POST:
            return { ...state, likedPosts: [...state.likedPosts, ...action.payload],likedRow:true }
        case ACTIONS_LIST.REMOVE_POST:
            return { ...state, likedPosts: state.likedPosts.filter(post=>post.id != action.payload), likedRow:state.likedPosts.length==0 ? false: true }
        case ACTIONS_LIST.FIND_POST:
            return { ...state, searchedPosts: [...state.searchedPosts, ...action.payload] }
        default:
            return state
    }
}