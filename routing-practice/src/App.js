import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const Root = (props) => {
  return (
    <div>
      <h2 style={{ background: "#000080", color: "white", padding: "50px" }}>Welcome to Routing Practice</h2>
      <div style={{ marginLeft: "50px" }}>
        <h2>There are different ways what you can test out! </h2>
        <h2>To get started, change the AddressBar to:</h2>
        <h3>localhost:3000/home</h3>
        <h3>localhost:3000/about</h3>
        <h3>localhost:3000/ (add a text or number [<span style={{ color: "red" }}>caution!</span>  in this case text+number=text ])</h3>
        <h2 style={{ background: "#000080", color: "white", padding: "20px", width: "300px" }}>Fun begins with colors!</h2>
        <h3>localhost:3000/text/textcolor</h3>
        <h3>localhost:3000/text/textcolor/backroundcolor</h3>
      </div>
    </div>
  );
}

const Home = (props) => {
  return (
    <h2 style={{ background: "lightgreen", padding: "50px" }}>Welcome to Home Component</h2>
  );
}

const About = (props) => {
  return (
    <h2 style={{ background: "gold", padding: "50px" }}>Welcome to About Component</h2>
  );
}

const Text = (props) => {
  const { text, color, bgCol } = useParams();
  return (
    <div>
      {
        isNaN(text)
          ? <h2 style={color ? { color: color, backgroundColor: bgCol, padding: "50px" } : { padding: "50px" }}>Your input is a text, look: {text}</h2>
          : <h2 style={{ padding: "50px" }}>Your input is a number, look: {text} </h2>
      }
    </div>
  )
}



function App() {
  return (
    <div >
      <BrowserRouter>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Root />} />
          <Route path="/:text" element={<Text />} />
          <Route path="/:text/:color" element={<Text />} />
          <Route path="/:text/:color/:bgCol" element={<Text />} />
        </Routes>

      </BrowserRouter>
    </div >)
}

export default App;
