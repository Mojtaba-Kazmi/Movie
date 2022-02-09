import React, {useState} from 'react'
import { AiOutlineLike, AiTwotoneDislike, AiTwotoneLike, AiOutlineDislike } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io";
import { connect } from 'react-redux'

const MovieCard = (props) => {

    const { dislikeMovies, favoritesMovies } = props

    const [like, setLike] = useState(undefined);
    const [movie, setMovie] = useState(props.movie)

    //favourite movie

    const toggleLike = (e) => {
        const action = {
            type: "TOGGLE_LIKE", 
            value: movie
        }
        props.dispatch(action)
        console.log("action : " + action.type)
        console.log(favoritesMovies)
        if(e.target.classList.includes("active")) {
            e.target.classList.replace(" active ","")
        } else { e.target.classList += " active " }
    }

    const toggleDislike = (e) => {
        const action = {
            type: "TOGGLE_DISLIKE", 
            value: movie
        }
        props.dispatch(action)   
        console.log("action : " + action.type)     
        console.log(dislikeMovies)
    }

    const toggleLikeOrDislike = (e) => {
        let action_type = like === undefined ? 
            "TOGGLE_LIKE" : ( like === true ? "TOGGLE_DISLIKE" : "TOGGLE_LIKE")
        const action = {
            type: action_type, 
            value: movie
        }
        props.dispatch(action)   
        setLike(like === undefined ? true : !like)
        console.log("action : " + action.type)
        console.log(like)
    }

    const deleteMe = () => {
        props.onMovieDelete(movie)
        props.dispatch({
            type: "REMOVE_MOVIE",
            value: movie
        })
    }
    return (
        <div className="MovieCard">
            <div className="MovieCard__Image">
                <img width="300" height="370" src={movie.poster} alt={movie.title} loading="lazy" title={movie.title} />
            </div>
            <div className="MovieCard__Body">
                <div className="MovieCard__Title">{ movie.title }</div>
                <div className="MovieCard__Category">
                    { movie.category }
                </div>
                <div className="MovieCard__Actions">
                    <button className="toggleBtn" onClick={toggleLikeOrDislike}>
                        { like === undefined ?                         
                            <AiOutlineLike />:
                            ( like === true ? 
                                <AiTwotoneDislike />:
                                <AiTwotoneLike />
                            ) 
                        }
                        {like === undefined ? "Like" : ( like === true ? "Dislike" : "Like")}
                    </button>
                </div>
                <div className="MovieCard__Actions">
                    <div className="Like">
                        {/*  thumbup */}
                        { like === true ? <AiTwotoneLike /> : <AiOutlineLike /> }
                        <span>{ like === true ? movie.likes + 1 : movie.likes }</span>
                    </div>
                    <div className="Dislike">
                        {/* thumbdown */}
                        { like === false ? <AiTwotoneDislike /> : <AiOutlineDislike />}
                        <span>{ like === false ? movie.dislikes + 1 : movie.dislikes }</span>
                    </div>
                        {/* delete movie*/}
                    <div className="Remove">
                        <IoMdTrash onClick={deleteMe} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    favoritesMovies: state.favoritesMovies,
    dislikeMovies: state.dislikeMovies,
})


export default connect(mapStateToProps)(MovieCard)
