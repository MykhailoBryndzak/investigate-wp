import "./styles/styles.css";
import "./styles/test.less";
import "./styles/testScss.scss";
import "./styles/testSass.sass";

import "./babel"
import * as $ from "jquery";
import React from "react";
import {render} from "react-dom"
// import json from "./assets/json";
// import xml from "./assets/data.xml";
import csv from "./assets/data.csv";
import WebpackLogo from "@/assets/webpack-logo";
import Post from "@models/Post"

const post = new Post("Webpack Post Title", WebpackLogo);

console.log("Post to String:", post.toString());

$("pre").addClass('code').html(post.toString());git

// console.log("JSON:", json);
// console.log("XML:", xml);
console.log("CSV:", csv);

const App = () => (
  <div className="container">
    <h1>Webpack investigate</h1>
    <hr/>
    <div className="logo"/>
    <hr/>
    <pre/>
    <div className="box">
      <h2>Less</h2>
    </div>
    <div className="card">
      <h2>Scss</h2>
    </div>
    <div className="square">
      <h2>Sass</h2>
    </div>
  </div>
);

render(
  <App/>
  , document.getElementById("app"));

