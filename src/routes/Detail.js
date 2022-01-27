import {useParams} from "react-router-dom";
import {useEffect,useState } from "react";
import { Link } from 'react-router-dom';
import style from 'C:/Users/SMU/Desktop/react_app/src/Detail.module.css';

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
  <div className={style.div}>
    {loading ? (<h1>Loading...</h1>) : (
      <div >
        <h1 className={style.title}>
        <Link to ={`/movie/${id}/more`}>
          {json.title}</Link></h1>
        <img src={json.background_image} />

        <h3>Intro : {json.description_intro.length > 235 ? `${json.description_intro.slice(0, 30)}...` : json.description_intro}</h3>
        <p>Description : {json.description_full.length > 400 ? `${json.description_full.slice(0,400)}...` : json.description_intro}</p>
        <p>Rating : {json.rating}</p>
       
    </div>)}
    
  </div>

  )}

export default Detail
