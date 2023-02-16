import { Routes, Route } from "react-router-dom";
import './App.css';
import All from './all';
import Best from './best';
import Worst from './worst';

function JSONTableRows({ json }) {
  const headers = Object.keys(json[0])
  return(
    <table>
      <thead>
        <tr>
          {headers.map((header, i) => 
              <th key={i}>{header}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {json.map((row, rowI) =>
          <tr key={rowI}>
            {headers.map((header, colI) => 
              <td key={colI}>{row[header]}</td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  )
}

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
        <JSONTableRows json={Best} />
        <h4>Bottom 5 Books with 2+ Ratings</h4>
        <JSONTableRows json={Worst} />
        <br />
      </div>
    </>
  );
}

function Ratings() {
  return(
    <div className="card">
      <JSONTableRows json={All} />
      
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
        <a href="/">Home</a>
      </div>
    </>
  )
}

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ratings" element={<Ratings />} />
        <Route path="/hyperion" element={<Hyperion />} />
      </Routes>
    </div>
  )
}

export default App;
