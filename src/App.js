import React from "react";
import "./App.css";
// import firebase from "./firebase";
import PopUp from "./components/orderPop/orderPopup";
import { useState } from "react";
import CancelPop from "./components/cancalPop/CancelPop";

function App() {
  const [buttonPopUp, setButtonPopUp] = useState(false);
  //   React.useEffect(() => {
  //     const msg = firebase.messaging();
  //     msg
  //       .requestPermission()
  //       .then(() => {
  //         return msg.getToken();
  //       })
  //       .then((data) => {
  //         console.warn("token", data);
  //       });
  //   });
  return (
    <div className="App">
      <main>
        <h1> React Pop up </h1>
        <br></br>
        <button
          onClick={() => {
            setButtonPopUp(true);
          }}
        >
          {" "}
          Open PopUp
        </button>
      </main>
      <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}></PopUp>
    </div>
  );
}

export default App;
