//import//
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { HomeVideos } from "./components/HomeVideos";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="flex items-start">
        <Sidebar />
        <HomeVideos />
      </div>
    </div>
  );
}

export default App;
