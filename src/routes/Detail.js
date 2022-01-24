import {useParams} from "react-router-dom";
import {useEffect,useState } from "react";
import { Link } from 'react-router-dom'
function Detail() {
  const[loading, setLoading]=useState(true)
  const[json, setJson]=useState([])
  const {id} =useParams();
  
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`) 
      ).json();
      setLoading(false);
      setJson(json.data.movie);
    }
  useEffect(()=>{
    getMovie();
  },[]);
  return(
  <div>
    {loading ? (<h1>Loading...</h1>) : (
      <div>
        <h1>
        <Link to ={`/movie/${id}/more`}>
          {json.title}</Link></h1>
        <img src={json.background_image} />
        <h3>Intro : {json.description_intro}</h3>
        <p>Description : {json.description_full}</p>
        <p>Rating : {json.rating}</p>
       
    </div>)}
    
  </div>

  )}

export default Detail
