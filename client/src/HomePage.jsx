import Header from "./Components/Header";
import KneeImg from "./Components/KneeImg";
import Navbar from "./Components/Navbar";
import Nav from "./Components/nav";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Navbar />
      <KneeImg />
      <Nav />
      <footer>
        <span>
          Copyright 2020 Aafiya Mediretreats. All Rights Reserved. Designed by
          Ideamagix
        </span>
      </footer>
    </div>
  );
}
