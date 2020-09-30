import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <img
          style={{ marginBottom: "1rem", width: "100%", height: "75vh" }}
          src={
            "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
          }
          alt="welcome"
        />
      </header>
      <section style={{ margin: "0 auto" }}>
        <button
          style={{
            borderRadius: "5px",
            border: "1px solid",
            padding: "0.5rem",
          }}
          onClick={() => {
            window.alert("I'm interactive");
          }}
        >
          Click me to interact
        </button>
      </section>
    </>
  );
}

export default App;
