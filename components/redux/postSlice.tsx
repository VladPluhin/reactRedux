import {createSlice} from '@reduxjs/toolkit'
interface User {
    photoURL: string,
    displayName: string
}
 export interface PostState {
    posts: any[],
    likedPosts: any[],
    searchedPosts: any[],
    loading?: boolean,
    likedRow: boolean, 
    userData: User,
    login: boolean
}

const initialState: PostState = {
    posts: [],
    likedPosts:[],
    searchedPosts:[],
    loading: false,
    likedRow: false,
    userData: {
        photoURL:'',
        displayName: ''
    },
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
            state.likedRow = true;
        }, 
        getLogOut(state) {
            state.userData =  {
                photoURL:'',
                displayName: ''
            };
            state.login = false;
            state.likedRow = false;
        }, 
        
    }
})
export const { postsFetching, postsLiked, postsRemoving, postsSearching } = postsSlice.actions
export default postsSlice.reducer