import React, { useState } from "react";

const Pi = window.Pi;
if (Pi) {
  Pi.init({ version: "2.0", sandbox: true });
}
const symbols = ["🍒", "🍋", "🔔", "🍊", "⭐", "💎"];
function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function App() {
  const [slots, setSlots] = useState(["🍒", "🍋", "🔔"]);
  const [user, setUser] = useState(null);

  const spin = () => {
    setSlots([getRandomSymbol(), getRandomSymbol(), getRandomSymbol()]);
  };

  const login = () => {
    Pi.authenticate(["username"], (auth) => {
      console.log("Auth data:", auth);
      setUser(auth);
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎰 Pi Slot Game</h1>
      <div style={{ fontSize: "3rem" }}>{slots.join(" | ")}</div>
      <button onClick={spin} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Spin
      </button>
      <br /><br />
      {user ? (
        <p>Welcome, {user.user.username}</p>
      ) : (
        <button onClick={login} style={{ padding: "10px 20px" }}>
          Login with Pi
        </button>
      )}
    </div>
  );
}

export default App;
