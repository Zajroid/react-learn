/* eslint-disable jsx-a11y/alt-text */
// import React, { component } from "react";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fgithub%2Fgithub_PNG28.png&f=1&nofb=1"></img>
      </header>

      <nav className="nav">
        <ul>
          <li>
            {" "}
            <a href="#Profile">Profile</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#Messages">Messages</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#News">News</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#Music">Music</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#Settings">Settings</a>{" "}
          </li>
        </ul>
      </nav>

      <div className="content">
        <div>
          <img className="bgImg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhelpx.adobe.com%2Fcontent%2Fdam%2Fhelp%2Fen%2Fphotoshop%2Fusing%2Fconvert-color-image-black-white%2Fjcr_content%2Fmain-pars%2Fbefore_and_after%2Fimage-before%2FLandscape-Color.jpg&f=1&nofb=1" />
        </div>

        <div>
          <img className="avatarImg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fkatzenworld.co.uk%2Fwp-content%2Fuploads%2F2019%2F06%2Ffunny-cat.jpeg%3Ffit%3D1020%252C1020%26ssl%3D1&f=1&nofb=1" />
        </div>

        <div>
          my posts
          <div>
            New Post
          </div>
        </div>

        <div>
          <div>
          Post 1
          </div>

          <div>
          Post 1
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
