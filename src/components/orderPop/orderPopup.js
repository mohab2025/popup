import React from "react";
import "./Popup.css";
import axios from "axios";
import { useState } from "react";
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xNjQuOTAuMjA3LjIxOTo5MDgwXC9hcGlcL3YyXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY2MTQ2NjQ1MSwibmJmIjoxNjYxNDY2NDUxLCJqdGkiOiI0Smc3dlU1VXdyZ0lYaE95Iiwic3ViIjo2NTMsInBydiI6ImExMDBlYmJhNTNlMmYwZWQwN2JiNDY3ODUyOGQ1M2U5Y2ZkMjc0ZTcifQ.i5OQTM95GvleOWF23m3j4zwQ-zduEyz2kiB1fdRy7Eg";

function PopUp(props) {
  const [refusedOptions, setRefusedOptions] = useState([]);
  const [cancelTrigger, setCancelTrigger] = useState(false);

  function refusedOrder() {
 
    axios
      .get("http://164.90.207.219:9080/api/v2/orders/refused-reasons", {
        headers: { Authorization: `bearer ${token}`, "accept-language": "en" },
      })
      .then((res) => {
        console.log(res);
        setRefusedOptions(res.data.data);
        props.setTrigger(false);
        setCancelTrigger(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h3>my popup</h3>
        <p>this is my popup</p>
        <button
          className="close-btn"
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          close
        </button>

        <button
          className="close-btn"
          onClick={() => {
            refusedOrder();
          }}
        >
          cancal order
        </button>
      </div>
    </div>
  ) : cancelTrigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div>
          {refusedOptions.map((option, i) => {
            return (<div key={i}>
              <input type="radio" id={option.id} value={option.reason} />
              <label htmlFor={option.id}>{option.reason}</label>
              <br></br>
            </div>)
          })}

          <button
            className="close-btn"
            onClick={() => {
              setCancelTrigger(false);
            }}
          >
            close
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUp;
