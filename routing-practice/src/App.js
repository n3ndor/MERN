import { BrowserRouter, Routes, Route } from "react-router-dom";

const Root = (props) => {
  return (
    <div>
      <h2 style={{ background: "red", padding: "50px" }}>Welcome to Routing Practice</h2>
      <div style={{ marginLeft: "50px" }}>
        <h2>There are different ways what you can test out: </h2>
        <h2>To get started, change the AddressBar input to localhost:3000/...</h2>
        <h3>localhost:3000/home</h3>
        <h3>localhost:3000/about</h3>
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



function App() {
  return (
    <div >
      <BrowserRouter>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Root />} />
        </Routes>

      </BrowserRouter>
    </div >)
}

export default App;
