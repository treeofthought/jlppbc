import logo from './logo.svg';
import './App.css';

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
<table><tr><th>Title</th>
<th>Author</th>
<th>Avg</th>
<th>J</th>
<th>P</th>
<th>S</th></tr>
<tr><td>Hyperion</td><td>Dan Simmons</td><td>9.1</td><td>8.9</td><td>9.4</td><td>8.9</td></tr>
<tr><td>The Amazing Adventures of Kavalier and Clay</td><td>Michael Chabon</td><td>9.1</td><td>9.4</td><td>8.75</td><td>9.2</td></tr>
<tr><td>The Remains of the Day</td><td>Kazuo Ishiguro</td><td>9.1</td><td>9.1</td><td>--</td><td>9</td></tr>
<tr><td>Red Rising</td><td>Pierce Brown</td><td>9</td><td>8.6</td><td>10</td><td>8.4</td></tr>
<tr><td>Neverwhere</td><td>Neil Gaiman</td><td>8.9</td><td>--</td><td>9.8</td><td>7.9</td></tr></table>


      <h3>Bottom 5 Books with 2+ Ratings</h3>
<table><tr><th>Title</th>
<th>Author</th>
<th>Avg</th>
<th>J</th>
<th>P</th>
<th>S</th></tr>
<tr><td>The Peacemaker's Code</td><td>Deepak Mahotra</td><td>0.7</td><td>0</td><td>0</td><td>2</td></tr>
<tr><td>The Ruin of Kings</td><td>Jenn Lyons</td><td>1.7</td><td>1</td><td>0</td><td>4.1</td></tr>
<tr><td>Artemis</td><td>Andy Weir</td><td>2</td><td>--</td><td>0</td><td>3.9</td></tr>
<tr><td>Lethal White</td><td>Robert Galbraith</td><td>2.6</td><td>--</td><td>2</td><td>3.2</td></tr>
<tr><td>A Divided Spy</td><td>Charles Cumming</td><td>2.7</td><td>1</td><td>0.5</td><td>6.7</td></tr></table>
</div>
    </div>
  );
}

export default App;
