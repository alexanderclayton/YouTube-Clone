//import//
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Topics } from "../components/Topics";
import { HomeVideos } from "../components/HomeVideos";

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="flex items-start pt-[56px]">
        <Sidebar />
        <div className="w-[94%] pl-6">
          <Topics />
          <HomeVideos />
        </div>
      </div>
    </div>
  );
};
