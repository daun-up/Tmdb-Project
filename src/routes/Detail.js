import { useParams } from "react-router-dom";
import {useEffect} from "react";
function Detail() {
    const {id} = useParams();
    // useEffect(() => {
    //     const json = await fetch(`https://api.themoviedb.org/3/movie/{movie_id}`)
    // }, []);
    console.log(id);
    return <h1>Detail</h1>;
}

export default Detail;