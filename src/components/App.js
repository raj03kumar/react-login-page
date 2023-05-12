import React from "react";
import Form from "./Form";

var userIsRegistered = true; //try switching from false to true and vice versa.

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered}/>
    </div>
  );
}

export default App;