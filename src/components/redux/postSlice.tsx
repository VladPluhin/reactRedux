import {createSlice} from '@reduxjs/toolkit'

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

 
const initialState: PostState = {
    posts: [],
    likedPosts:[],
    searchedPosts:[],
    likedRow:false
}

export const postsSlice= createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postsFetching(state, action:any) {
            state.posts= action.payload;
        }, 
        postsLiked(state, action:any) {
            state.likedPosts.push(action.payload) ;
            state.likedRow = true;
        }, 
        postsRemoving(state, action:any) {
            state.likedPosts =  state.likedPosts.filter(post=>post.id != action.payload);
            state.likedRow = state.likedPosts.length ==0 ? false : true;

        }, 
        postsSearching(state, action:any) {
            state.searchedPosts = action.payload;
        }, 
        
    }
})
export const { postsFetching, postsLiked, postsRemoving, postsSearching } = postsSlice.actions
export default postsSlice.reducer