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
      <th>S</th></tr>
      <tr><td>The Amazing Adventures of Kavalier and Clay</td><td>Michael Chabon</td><td>9.3</td><td>9.4</td><td>9.2</td></tr>
      <tr><td>The Remains of the Day</td><td>Kazuo Ishiguro</td><td>9.1</td><td>9.1</td><td>9</td></tr>
      <tr><td>Hyperion</td><td>Dan Simmons</td><td>8.9</td><td>8.9</td><td>8.9</td></tr>
      <tr><td>Red Rising</td><td>Pierce Brown</td><td>8.5</td><td>8.6</td><td>8.4</td></tr>
      <tr><td>Golden Son</td><td>Pierce Brown</td><td>8.3</td><td>8.5</td><td>8.2</td></tr></table>
      <h3>Bottom 5 Books with 2+ Ratings</h3>
      <table><tr><th>Title</th>
<th>Author</th>
<th>Avg</th>
<th>J</th>
<th>S</th></tr>
<tr><td>The Peacemaker's Code</td><td>Deepak Mahotra</td><td>1</td><td>0</td><td>2</td></tr>
<tr><td>The Ruin of Kings</td><td>Jenn Lyons</td><td>2.5</td><td>1</td><td>4.1</td></tr>
<tr><td>A Divided Spy</td><td>Charles Cumming</td><td>3.9</td><td>1</td><td>6.7</td></tr>
<tr><td>The Dragon Reborn</td><td>Robert Jordan</td><td>7.5</td><td>7.8</td><td>7.2</td></tr>
<tr><td>Royal Assassin</td><td>Robin Hobb</td><td>7.6</td><td>7.5</td><td>7.6</td></tr></table>
</div>
    </div>
  );
}

export default App;
