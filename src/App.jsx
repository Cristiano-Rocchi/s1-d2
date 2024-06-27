import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import LibriHorror from "./data/horror.json";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <BookList books={LibriHorror} />

      <MyFooter firm="kun.spa 131213121312" />
    </div>
  );
}

export default App;
