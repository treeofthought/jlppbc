import logo from './logo.svg';
import './App.css';
import Best from './best';
import Worst from './worst';

function tableCol(header, data) {
  return(
    <div className="flexCol">
      <div className="flexCell headerCell">{header}</div>
      {data.map(cell =>
        <div className="flexCell">{cell}</div>
      )}
    </div>
  )
}

function BestTable(props) {
  const { json } = props
  console.log(json)
  return(
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Avg</th>
          <th>St. Dev</th>
          <th>J</th>
          <th>P</th>
          <th>S</th>
        </tr>
      </thead>
      <tbody>
        {json.map(row =>
          <tr>
            <td>{row.Title}</td>
            <td>{row.Author}</td>
            <td>{row.Avg}</td>
            <td>{row[`Std.Dev`]}</td>
            <td>{row.J}</td>
            <td>{row.P}</td>
            <td>{row.S}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

function TableFromJSON(props) {
  const { json } = props
  const headers = Object.keys(json)
  const columns = headers.map(header => 
    tableCol(header, json[header])
  )
  return <div className="flexTable">{columns}</div>
}

function App() {

  return (
    <div className="page">
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
        <h2>Best and Worst</h2>
        <h3>Top 5 Books with 2+ Ratings</h3>
        <BestTable json={Best} />
        <h3>Bottom 5 Books with 2+ Ratings</h3>
        <BestTable json={Worst} />
      </div>
    </div>
  );
}

export default App;
