//import//
import { Header } from "../components/Header";
import { SelectedVideo } from "../components/SelectedVideo";
import { PreviewVideos } from "../components/PreviewVideos";

export const Video: React.FC = () => {
  return (
    <div>
      <div className="w-full">
        <Header />
        <div className="flex w-full flex-col md:flex-row">
          <SelectedVideo />
          <div className="md:w-[40%]">
            <PreviewVideos />
          </div>
        </div>
      </div>
    </div>
  );
};
