import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <MyNav />
      <MyFooter firm="kun.spa 131213121312" />
    </div>
  );
}

export default App;
