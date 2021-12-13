import "./App.css";
import { Navbar } from "./Components/Navbar";
import { HomePage } from "./Pages/Home";
import Profile from "./Pages/Profile";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Profile />
    </div>
  );
}

export default App;
