import React from "react";
import { Container, Row, Col } from "shards-react";
import "./styles.css";

export default ({cards}) => {
  return (
    <footer class="footer">
      <div class="footer-right">
        <p className="introductions">Meet the developers: </p>
        <a href="#" className="introductions">
          Tyler Mathena
        </a>
        <a href="#" className="introductions">
          Anna Perkins
        </a>
        <a href="#" className="introductions">
          Alex Eversbusch
        </a>
        <a href="#" className="introductions">
          Taylor Wood
        </a>
      </div>

      <div class="footer-left">
        <p class="footer-links">
          <a href="https://github.com/taywood0011/wolf-pack">Github Repo</a>
        </p>

        <p>WolfPack &copy; Hahaha jk not yet</p>
      </div>
    </footer>
  );
};
