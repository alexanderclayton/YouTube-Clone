//import//
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Topics } from "../components/Topics";
import { HomeVideos } from "../components/HomeVideos";

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="flex items-start">
        <Sidebar />
        <div className="w-[94%]">
          <Topics />
          <HomeVideos />
        </div>
      </div>
    </div>
  );
};
