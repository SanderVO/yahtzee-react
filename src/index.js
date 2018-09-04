import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap';

require('./index.css');

const Index = () => {
  return <div class="container">
      <h1 class="">Greetings.</h1>
    </div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));