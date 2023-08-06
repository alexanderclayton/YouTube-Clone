//import//
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Topics } from "../components/Topics";
import { HomeVideos } from "../components/HomeVideos";
import { Sidedrawer } from "../components/Sidedrawer";

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="flex pt-[56px]">
        <div className="2xl:hidden">
          <Sidebar />
        </div>
        <div className="scroll-y hidden h-screen w-[240px] 2xl:block">
          <Sidedrawer />
        </div>
        <div className="2xl:w-[85%] pl-6 w-[90%]">
          <Topics />
          <HomeVideos />
        </div>
      </div>
    </div>
  );
};
