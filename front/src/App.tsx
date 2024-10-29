import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <img
          src="waro-logo.png"
          className="App-logo"
          alt="logo"
          style={{
            height: 50,
          }}
        />
        <p>Waro</p>
      </header>
    </div>
  );
};

export default App;
