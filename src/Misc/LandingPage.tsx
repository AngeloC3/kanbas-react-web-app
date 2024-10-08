import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
      <div>
        <h2>Angelo Cataldo - Section 02</h2>
        <ul>
          <li><Link to="/Labs/Lab1">Lab 1</Link></li>
          <li><Link to="/Labs/Lab2">Lab 2</Link></li>
          <li><Link to="/Labs/Lab3">Lab 3</Link></li>
          <li><Link to="/Kanbas">Kanbas</Link></li>
          <li><a id="wd-github" href="https://github.com/AngeloC3/kanbas">Github Repo</a></li>
        </ul>
      </div>
    );
}  