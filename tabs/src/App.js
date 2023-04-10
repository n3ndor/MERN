import React from "react"
import './App.css';
import Tabs from './components/Tabs';

function App() {
  const pages = [
    {
      label: "Tab 1",
      content: "Tab1 content is showing here",
    },
    {
      label: "Tab 2",
      content: "Tab2 content is showing here",
    },
    {
      label: "Tab 3",
      content: "Tab3 content is showing here",
    },
  ]
  return (
    <div className="App">
      <h2>Example of Tabs</h2>
      <h3>Click on the Tab Button to change the content:</h3>
      <hr />
      <React.StrictMode>
        <Tabs pages={pages} />
      </React.StrictMode>

      <hr />
    </div>
  );
}

export default App;
