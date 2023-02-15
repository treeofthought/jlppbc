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
        <h3>Hyperion</h3>
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

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ratings" element={<Ratings />} />
      </Routes>
    </div>
  )
}

export default App;
