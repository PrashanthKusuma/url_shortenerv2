import "../styles.css";
import AnonymousShortener from "./AnonymousShortener";
import Btn from "./Btn";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <div className="App">
      <NavBar />
      <AnonymousShortener />
    </div>
  );
}
