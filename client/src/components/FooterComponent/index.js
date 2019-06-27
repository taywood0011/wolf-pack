import React from "react";
import "./styles.css";

export default () => {
  return (
    <footer className="footer">
      <div className="footer-right">
        <p className="introductions">Meet the developers: </p>
        <a href="https://github.com/tymathena" className="introductions">
          Tyler Mathena
        </a>
        <a href="https://github.com/amp3193" className="introductions">
          Anna Perkins
        </a>
        <a href="https://github.com/abusch419 " className="introductions">
          Alex Eversbusch
        </a>
        <a href="https://github.com/taywood0011/" className="introductions">
          Taylor Wood
        </a>
      </div>

      <div className="footer-left">
        <p className="footer-links">
          <a href="https://github.com/taywood0011/wolf-pack">Github Repo</a>
        </p>

        <p>WolfPack <a href="https://serene-sea-50186.herokuapp.com/">&copy;</a> Hahaha jk not yet</p>
      </div>
    </footer>
  );
};
