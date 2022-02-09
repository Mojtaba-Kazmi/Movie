const initialState = {
    favoritesMovies: [],
    dislikeMovies: [],
}

function AppGlobalReducer( state = initialState, action) {
    let nextState
    console.log("Inside Global Reducer")
    switch(action.type) {
        case 'TOGGLE_LIKE': {
            let favoriteMovieIndex = state.favoritesMovies.findIndex( item => ( item.id === action.value.id))
            let dislikeMovieIndex = state.dislikeMovies.findIndex( item => ( item.id === action.value.id))

            // if( favoriteMovieIndex === -1) {
            //     if(dislikeMovieIndex !== -1) {
            //         let Temp1 = state.favoritesMovies
            //         Temp1.push(action.value)
            //         nextState = {
            //             ...state,
            //             dislikeMovies: state.dislikeMovies.filter( (item, index) => (item !== dislikeMovieIndex) ),
            //             favoritesMovies: Temp1,
            //         }
            //     }
            //     else {
            //         let Temp1 = state.favoritesMovies
            //         Temp1.push(action.value)
            //         nextState = {
            //             ...state,
            //             // dislikeMovies: state.dislikeMovies.filter( (item, index) => (item !== dislikeMovieIndex) ),
            //             favoritesMovies: Temp1
            //         }
            //     }
            // } else {
            //     nextState = {
            //         ...state,
            //         dislikeMovies: state.dislikeMovies.filter( (item, index) => (item !== dislikeMovieIndex) ),
            //         favoritesMovies: Temp1,
            //     }
            // }
            
            let Temp1 = state.favoritesMovies
            Temp1.push(action.value)
            nextState = {
                ...state,
                dislikeMovies: state.dislikeMovies.filter( (item, index) => (index !== dislikeMovieIndex) ),
                favoritesMovies: Temp1,
            }
            console.log("FavoritesMovies : ")
            console.log(nextState.favoritesMovies)
            console.log("DislikeMovies : ")
            console.log(nextState.dislikeMovies)
            return nextState
        }
        case 'TOGGLE_DISLIKE': {
            let favoriteMovieIndex = state.favoritesMovies.findIndex( item => ( item.id === action.value.id))
            let dislikeMovieIndex = state.dislikeMovies.findIndex( item => ( item.id === action.value.id))

            // if( dislikeMovieIndex === -1) {
            //     if(favoriteMovieIndex !== -1) {
            //         let Temp1 = state.dislikeMovies
            //         Temp1.push(action.value)
            //         nextState = {
            //             ...state,
            //             favoritesMovies: state.favoritesMovies.filter( (item, index) => (item !== favoriteMovieIndex) ),
            //             dislikeMovies: Temp1
            //         }
            //     }
            //     else {
            //         let Temp1 = state.dislikeMovies
            //         Temp1.push(action.value)
            //         nextState = {
            //             ...state,
            //             // favoritesMovies: state.favoritesMovies.filter( (item, index) => (item !== favoriteMovieIndex) ),
            //             dislikeMovies: Temp1
            //         }
            //     }
            // }

            let Temp1 = state.dislikeMovies
            Temp1.push(action.value)
            nextState = {
                ...state,
                favoritesMovies: state.favoritesMovies.filter( (item, index) => (index !== favoriteMovieIndex) ),
                dislikeMovies: Temp1
            }
            console.log("FavoritesMovies : ")
            console.log(nextState.favoritesMovies)
            console.log("DislikeMovies : ")
            console.log(nextState.dislikeMovies)
            return nextState
        }
        case 'REMOVE_MOVIE' : {
            let favoriteMovieIndex = state.favoritesMovies.findIndex( item => ( item.id === action.value.id))
            let dislikeMovieIndex = state.dislikeMovies.findIndex( item => ( item.id === action.value.id))
            nextState = {
                ...state,
                favoritesMovies: state.favoritesMovies.filter( (item, index) => (index !== favoriteMovieIndex) ),
                dislikeMovies: state.dislikeMovies.filter( (item, index) => (index !== dislikeMovieIndex) ),
            }
            console.log("FavoritesMovies : ")
            console.log(nextState.favoritesMovies)
            console.log("DislikeMovies : ")
            console.log(nextState.dislikeMovies)
            return nextState
        }
        default: {
            return nextState || state
        }
    }
    // return nextState || state
}

export default AppGlobalReducer