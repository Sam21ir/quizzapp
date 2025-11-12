function Navbar() {
  return (
    <nav className="stylenavbar">
      <h1 className="logo">Quiz App</h1>
      <ul className="liststyle">
        <li><a href="/">Home</a></li>
        <li><a href="/quiz">Quiz</a></li>
        <li><a href="/result">Result</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
