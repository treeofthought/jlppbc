import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./webpages/login.js";
import UserRatings from "./webpages/user-ratings.js";
import BookDetail from "./webpages/book-detail.js";
import Header from "./components/header.js";
import JSONTableRows from "./components/json-table-rows.js";
import userService from './services/user-service.js';
import './App.css';

function Home() {

  return (
    <>
      <div className="headerWrap">
        <h1>JLPPBC</h1>
        <h3>James Long Perfection Personified Book Club</h3>
      </div>
      <div className="card">
        <h2>Currently Reading</h2>
        <h3><a href="/hyperion">Hyperion</a></h3>
        <h4>Dan Simmons</h4>
        <h5>Book One of the Hyperion Cantos</h5>
      </div>
      <div className="card">
        <h2>Next Call</h2>
        <h3>Monday, February 20th at 6/9</h3>
      </div>
      <div className="card">
        <h2><a href="/ratings">Table of Books</a></h2>
        <h3>Best and Worst</h3>
        <h4>Top 5 Books with 2+ Ratings</h4>
        <JSONTableRows target='top-five' />
        <h4>Bottom 5 Books with 2+ Ratings</h4>
        <JSONTableRows target='bottom-five' includeAvg={true} />
        <br />
      </div>
    </>
  );
}

function Ratings() {
  return(
    <div className="card">
      <JSONTableRows target='ratings' includeAvg={true} />
      <a href="/">Home</a>
    </div>
  )
}

function Hyperion() {
  return(
    <>
      <div className="headerWrap">
        <h1>Hyperion</h1>
        <h2>Dan Simmons</h2>
        <h3>Book One of the Hyperion Cantos</h3>
      </div>
      <div className="card">
        <h2>Story Rankings</h2>
        <h3>Stu</h3>
        <ol>
          <li>The Priest's Tale</li>
          <li>The Detective's Tale</li>
          <li>The Consul's Tale</li>
          <li>The Scholar's Tale</li>
          <li>The Soldier's Tale</li>
          <li>The Poet's Tale</li>
        </ol>
        <h3>James</h3>
        <ol>
          <li>The Scholar's Tale</li>
          <li>The Priest's Tale</li>
          <li>The Consul's Tale</li>
          <li>The Soldier's Tale</li>
          <li>The Poet's Tale</li>
          <li>The Detective's Tale</li>
        </ol>
        <h3>Pierce</h3>
        <ul>
          <li>Sol is best</li>
          <li>Poet is top 3</li>
          <li>Priest is 6 or 7</li>
        </ul>
        <h3>Chris</h3>
        <ol>
          <li>The Scholar's Tale</li>
          <li>The Priest's Tale</li>
          <li>The Consul's Tale</li>
          <li>The Detective's Tale</li>
          <li>The Soldier's Tale</li>
          <li>The Poet's Tale</li>
        </ol>
      </div>
      <h1>Spoilers below! Proceed with caution!!</h1>
      <br />
      <br />
      <br />
      <br />
      <div className="card">
        <h2>Stu Reactions</h2>
        <p>What is the connection between the Shrike and cruciforms?</p>
        <p>Does the TechnoCore succeed in creating UI/God? Is this a causality loop where TC makes God, God makes man, man makes TC?</p>
        <p>I love the TechnoCore!</p>
        <ul>
          <li>Gonna extinct humanity any day</li>
          <li>"Who knows why AIs do what they do?"</li>
          <li>In contact with forms of life the Hegemony of Man could only dream of!</li>
        </ul>
        <p>Is the UI the voice of "God" that Sol dreams of?</p>
        <p>The core needs humanity</p>
        <p>I laughed aloud when I realized Martin's "satyr period" was LITERAL</p>
        <p>When did the realization that Rachel is Benjamin Button dawn on you?</p>
        <p>Did the Consul cause that when he "opened" the Time Tombs courtesy of the Ousters device?</p>
        <p>My heart leapt with wonder when the translator whistled and clicked at the dolphins. I loved that whole scene. "Miss shark!"</p>
        <p>The core thinks that the time tombs are the eventual winner of a far future war setting their victory into motion back through time. They just aren't sure if that winner is them, or the Ousters...do you believe this dichotomy, or is the truth a third option?</p>
        <p>I'm floored the Poet's is C's least favorite tale! I thought he was going to love that character. Maybe he still did, but I'm surprised!</p>
      </div>
      <div className="card">
        <h2>Chris Reactions</h2>
        <h4>Stu Wrote:</h4>
        <blockquote>Did the Consul cause that when he "opened" the Time Tombs courtesy of the Ousters device?</blockquote>
        <p>I very much think the Consul opening the time tombs is what happened to Rachel. In fact I wish they spelled out that more clearly. I think they assume we will all "know" that to be true, but if that's their intention I wanted them to say it. </p>
        <p>Bigger thought on that - I wanted more overlap in general with all the stories. There was probably more than I think and I missed a bunch. But I wanted it to be the most tangled web ever. Like wait, that was you??!? Same thing with it possibly being Het as the Templar in the detective story. I hope it was and I wish they told me. </p>
        <h4>Stu Wrote:</h4>
        <blockquote>When did the realization that Rachel is Benjamin Button dawn on you?</blockquote>
        <p>Rachel being Benjamin Buttoned didn't dawn on me until way way too late. Just before he was coming out of the story and Rachel was nearing infancy again I was like oh I'm an idiot. But I gotta say that was easily the most AMPED the book got me. That story was cool, not that it was that original because see Button, Benjamin. But it was after Priest, Soldier, Poet, this was a very welcome new twist on what these stories could be. Plus the realization was the most impactful coming out of the story. The rest of the ship, along with myself, was like WHAT THE FUCK. I liked how no one could sleep after that. </p>
        <h4>Stu Wrote:</h4>
        <blockquote>My heart leapt with wonder when the translator whistled and clicked at the dolphins. I loved that whole scene. "Miss shark!"</blockquote>
        <p>I wanted more from the Dolphins! I loved that scene too and I also had a dancing heart, and maybe I'm being greedy. But this book did so much with tech and how far we have come as humans. I've always pictured dolphins talking in beautiful prose, since they are so smart, we just can't hear it. So I kinda wanted this mythical translator we came up with to work better. I guess that was the humor in it. But I was like we should just be conversing with really smart dolphins. I would have loved that. Miss shark did make me laugh. Though I wanted that to pay off too. Why miss shark? </p>
        <p>The time tombs are very TENET. Nolan as we know takes a lot of inspiration from books. Even inception is slightly stolen from a Christopher Priest novel. I haven't done any research but this is very close to the entire plot of Tenet. Would like to do some digging there. </p>
        <p>I was getting big Ready Player 1 vibes in some of the stories. Anyone else?</p>
        <p>Did people like the time between stories? I didn't really haha. I know it was so short and the book might have felt dumb if there was no buffer. But a story would end and I would have to listen to Martin bitch for 20 pages. And I was like STFU and get me to the next tale! I don't care about how a windwagon works in the sea of grass!!</p>
        <p>But to that point, the Het Masteen part was sick! I was very into that. Was that him out on the Dunes at the end? I assume yes but wasn't sure. Would be pretty random if it wasn't. What did everyone else think? </p>
        <p>The spy on the ship. They say that at the very beginning, and then I think literally never mention it again until the Consul's tale. For that reason, I COMPLETELY forgot about it. (you guys read faster than me though so maybe it was still fresh for you). My question was going to be, was that a good move or a bad move. I liked that I completely forgot, so when they were like you're the spy I was like ohhhhh yea! So that's cool. But I kind of wish I had been reminded once or twice so I could have been more suspicious of some of the tales. </p>
        <p>I liked the poet tale the least by a pretty wide margin. I think I'm not doing it total justice because stu referencing his satyr period made me laugh when I remembered that. But I am excited to hear why P enjoyed it so much! </p>
        <a href="/">Home</a>
      </div>
    </>
  )
}

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(userService.isLoggedIn())
  const [name, setName] = useState(userService.getName())
  const navigate = useNavigate();

  const login = async (email, password) => {
    const success = await userService.login(email, password);
    if (success) {
      setIsLoggedIn(true);
      setName(userService.getName());
    }
    return success
  }

  const logout = (e) => {
    e.preventDefault()
    userService.logout()
    setIsLoggedIn(false);
    setName(undefined);
    navigate('/login')
  }

  return (
    <div className="page">
      <Header logout={logout}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login login={login}/>} />
        <Route path="/ratings" element={<Ratings />} />
        <Route path="/hyperion" element={<Hyperion />} />
        <Route path="/ratings/:name" element={<UserRatings />} />
        <Route path="/books/:slug" element={<BookDetail />} />
      </Routes>
    </div>
  )
}

export default App;
