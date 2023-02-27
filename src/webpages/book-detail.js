import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userService from "../services/user-service.js";

async function fetchTableData(target) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${target}`)
  const text = await response.text();
  const json = JSON.parse(text);
  return json
}

function RatingForm() {

  const [values, setValues] = useState({rating: ``});
  const [error, setError] = useState();

  const changeHandler = ({ target: { name, value } }) => {
    const newState = { ...values, [name]: value };
    setValues(newState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(values)
  }


  return(
    <>
    <form onSubmit={submitHandler} id="ratingForm">
      <input id="rating" name="rating" value={values.rating} onChange={changeHandler}/>
    </form>
    <button form="ratingForm">Rate this Book</button>
    </>
  )
}

function BookDetail() {
  const { slug } = useParams();
  const [data, setData] = useState({title: '', author: '', ratings: []})
  const [isLoggedIn, setIsLoggedIn] = useState(userService.isLoggedIn())

  useEffect(() => {
    (async () => {
      const data = await fetchTableData(`books/${slug}`)
      setData(data);
    })()
  }, [])

  console.log(slug)
  return (
    <div className="card">
      <h1>{data.title}</h1>
      <h2>{data.author}</h2>
      <h3>Ratings</h3>
      <div>
        {data.ratings.map((rating, i) => 
          <div key={i}>{rating.user} - {rating.rating}</div>
        )}
      </div>
      {isLoggedIn && <>
          <RatingForm />
      </>}
      <a href="/">Home</a>
    </div>
  )
}

export default BookDetail;