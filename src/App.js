import "./styles.css";
import AnonymousShortener from "./components/AnonymousShortener";
import Btn from "./components/Btn";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <AnonymousShortener />
    </div>
  );
}
