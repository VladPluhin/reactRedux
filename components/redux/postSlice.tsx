import {createSlice} from '@reduxjs/toolkit'

 export interface PostState {
    posts: any[],
    likedPosts: any[],
    searchedPosts: any[],
    loading?: boolean,
    likedRow: boolean, 
    userData: any[],
    login: boolean
}

const initialState: PostState = {
    posts: [],
    likedPosts:[],
    searchedPosts:[],
    loading: false,
    likedRow: false,
    userData: [],
    login: false
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postsFetching(state, action:any) {
            state.posts= action.payload;
            state.loading = false;
        }, 
        postsLiked(state, action:any) {
            state.likedPosts.push(action.payload) ;
            state.likedRow = true;
        }, 
        postIsLoading(state) {
            state.loading =  true;
        },
        postsRemoving(state, action:any) {
            state.likedPosts =  state.likedPosts.filter(post=>post.id != action.payload);
            state.likedRow = state.likedPosts.length ==0 ? false : true;

        }, 
        postsSearching(state, action:any) {
            state.searchedPosts = action.payload;
            state.loading = false;
        }, 
        getLogin(state, action:any) {
            state.userData = action.payload;
            state.login = true;
        }, 
        getLogOut(state) {
            state.userData = [];
            state.login = fales;
        }, 
        
    }
})
export const { postsFetching, postsLiked, postsRemoving, postsSearching } = postsSlice.actions
export default postsSlice.reducer