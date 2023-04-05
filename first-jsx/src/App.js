import './App.css';

function App() {
  const unorderedList = ["Learn React", "Climb Mt. Everest", "Run a marathon", "Feed the dogs"]
  const todo = unorderedList.map((something) => <li>{something}</li>)
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h2>Thinks I need to do:</h2>
      <hr></hr>
      <p style={{ color: "red" }}>here hard coded:</p>
      <ul style={{ listStyle: 'none' }}>
        <li><h3>Learn React</h3></li>
        <li><h3>Climb Mt. Everest</h3></li>
        <li><h3>Run a marathon</h3></li>
        <li><h3>Feed the dogs</h3></li>
      </ul>
      <hr></hr>
      <p style={{ color: "red" }}>here with map function:</p>

      <ul style={{ listStyle: 'none' }}> {todo}</ul>

      <hr></hr>



    </div>




  );
}

export default App;
