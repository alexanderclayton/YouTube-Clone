//import//
import { Header } from "../components/Header";
import { SelectedVideo } from "../components/SelectedVideo";
import { PreviewVideos } from "../components/PreviewVideos";
import { Comments } from "../components/Comments";

export const Video: React.FC = () => {
  return (
    <div>
      <div className="w-full">
        <Header />
        <div className="flex w-full flex-col pt-[56px] lg:flex-row">
          <SelectedVideo />
          <div className="lg:w-[40%]">
            <PreviewVideos />
            <div className="px-4 lg:hidden">
              <Comments />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
