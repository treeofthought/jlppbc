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
  return(
    <form>
      <input />
    </form>
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
          <button>Rate this Book</button>
          <RatingForm />
      </>}
      <a href="/">Home</a>
    </div>
  )
}

export default BookDetail;