import {
  AiFillHome,
  AiOutlinePlaySquare,
  AiOutlineLike,
  AiOutlineShopping,
} from "react-icons/ai";
import {
  BsCollectionPlay,
  BsBroadcast,
  BsController,
  BsTrophy,
  BsYoutube,
} from "react-icons/bs";
import {
  MdOutlineVideoLibrary,
  MdOutlineLibraryMusic,
  MdOutlineWatchLater,
  MdOutlinePodcasts,
  MdOutlineFlag,
} from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { RxAvatar } from "react-icons/rx";
import { SiMediafire, SiYoutubestudio, SiYoutubemusic } from "react-icons/si";
import { RiMusic2Line, RiFeedbackLine } from "react-icons/ri";
import { BiMoviePlay, BiHelpCircle } from "react-icons/bi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { GoLightBulb } from "react-icons/go";
import { TbHanger, TbBrandYoutubeKids } from "react-icons/tb";
import { PiMonitorPlayFill } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";

export const Sidedrawer: React.FC = () => {
  return (
    <div className="side-drawer">
      <div>
        <AiFillHome size={20} className="w-[25%]" />
        <h2 className="pl-4">Home</h2>
      </div>
      <div>
        <MdOutlineLibraryMusic size={20} className="w-[25%]" />
        <h2 className="pl-4">Shorts</h2>
      </div>
      <div>
        <BsCollectionPlay size={20} className="w-[25%]" />
        <h2 className="pl-4">Subscriptions</h2>
      </div>
      <section className="my-2 w-[90%] border-b-2" />
      <div>
        <MdOutlineVideoLibrary size={20} className="w-[25%]" />
        <h2 className="pl-4">Library</h2>
      </div>
      <div>
        <GrHistory size={20} className="w-[25%]" />
        <h2 className="pl-4">History</h2>
      </div>
      <div>
        <AiOutlinePlaySquare size={20} className="w-[25%]" />
        <h2 className="pl-4">Your Videos</h2>
      </div>
      <div>
        <MdOutlineWatchLater size={20} className="w-[25%]" />
        <h2 className="pl-4">Watch Later</h2>
      </div>
      <div>
        <AiOutlineLike size={20} className="w-[25%]" />
        <h2 className="pl-4">Liked Videos</h2>
      </div>
      <section className="my-2 w-[90%] border-b-2" />
      <h1 className="pl-4">Subscriptions</h1>
      <div>
        <RxAvatar size={20} className="w-[25%]" />
        <h2 className="pl-4">Synthwave Boy</h2>
      </div>
      <div>
        <RxAvatar size={20} className="w-[25%]" />
        <h2 className="pl-4">ThatsGoodSports</h2>
      </div>
      <div>
        <RxAvatar size={20} className="w-[25%]" />
        <h2 className="pl-4">Lofi Girl</h2>
      </div>
      <section className="my-2 w-[90%] border-b-2" />
      <div>
        <SiMediafire size={20} className="w-[25%]" />
        <h2 className="pl-4">Trending</h2>
      </div>
      <div>
        <AiOutlineShopping size={20} className="w-[25%]" />
        <h2 className="pl-4">Shopping</h2>
      </div>
      <div>
        <RiMusic2Line size={20} className="w-[25%]" />
        <h2 className="pl-4">Music</h2>
      </div>
      <div>
        <BiMoviePlay size={20} className="w-[25%]" />
        <h2 className="pl-4">Movies & TV</h2>
      </div>
      <div>
        <BsBroadcast size={20} className="w-[25%]" />
        <h2 className="pl-4">Live</h2>
      </div>
      <div>
        <BsController size={20} className="w-[25%]" />
        <h2 className="pl-4">Gaming</h2>
      </div>
      <div>
        <HiOutlineNewspaper size={20} className="w-[25%]" />
        <h2 className="pl-4">News</h2>
      </div>
      <div>
        <BsTrophy size={20} className="w-[25%]" />
        <h2 className="pl-4">Sports</h2>
      </div>
      <div>
        <GoLightBulb size={20} className="w-[25%]" />
        <h2 className="pl-4">Learning</h2>
      </div>
      <div>
        <TbHanger size={20} className="w-[25%]" />
        <h2 className="pl-4">Fashion & Beauty</h2>
      </div>
      <div>
        <MdOutlinePodcasts size={20} className="w-[25%]" />
        <h2 className="pl-4">Podcasts</h2>
      </div>
      <section className="my-2 w-[90%] border-b-2" />
      <h1>More from YouTube</h1>
      <div>
        <BsYoutube size={20} className="w-[25%] text-red-600" />
        <h2 className="pl-4">YoutTube Premium</h2>
      </div>
      <div>
        <SiYoutubestudio size={20} className="w-[25%] text-red-600" />
        <h2 className="pl-4">YouTube Studio</h2>
      </div>
      <div>
        <SiYoutubemusic size={20} className="w-[25%] text-red-600" />
        <h2 className="pl-4">YouTube Music</h2>
      </div>
      <div>
        <TbBrandYoutubeKids size={20} className="w-[25%] text-red-600" />
        <h2 className="pl-4">YouTube Kids</h2>
      </div>
      <div>
        <PiMonitorPlayFill size={20} className="w-[25%] text-red-600" />
        <h2 className="pl-4">YouTube TV</h2>
      </div>
      <section className="my-2 w-[90%] border-b-2" />
      <div>
        <SlSettings size={20} className="w-[25%]" />
        <h2 className="pl-4">Settings</h2>
      </div>
      <div>
        <MdOutlineFlag size={20} className="w-[25%]" />
        <h2 className="pl-4">Report History</h2>
      </div>
      <div>
        <BiHelpCircle size={20} className="w-[25%]" />
        <h2 className="pl-4">Help</h2>
      </div>
      <div>
        <RiFeedbackLine size={20} className="w-[25%]" />
        <h2 className="pl-4">Send feedback</h2>
      </div>
      <section className="my-2 w-[90%] border-b-2" />
      <div className="nohover flex flex-col">
        <div className="nohover text-xs font-bold text-gray-700">
          <p className="pl-3 hover:cursor-pointer">About</p>
          <p className="pl-3 hover:cursor-pointer">Press</p>
          <p className="pl-3 hover:cursor-pointer">Copyright</p>
        </div>
        <div className="nohover text-xs font-bold text-gray-700">
          <p className="pl-3 hover:cursor-pointer">Contact us</p>
          <p className="pl-3 hover:cursor-pointer">Creators</p>
        </div>
        <div className="nohover text-xs font-bold text-gray-700">
          <p className="pl-3 hover:cursor-pointer">Advertise</p>
          <p className="pl-3 hover:cursor-pointer">Developers</p>
        </div>
        <div className="nohover pt-3 text-xs font-bold text-gray-700">
          <p className="pl-3 hover:cursor-pointer">Terms</p>
          <p className="pl-3 hover:cursor-pointer">Privacy</p>
          <p className="pl-3 hover:cursor-pointer">Policy & Safety</p>
        </div>
        <div className="nohover text-xs font-bold text-gray-700">
          <p className="pl-3 hover:cursor-pointer">How YouTube works</p>
        </div>
        <div className="nohover text-xs font-bold text-gray-700">
          <p className="pl-3 hover:cursor-pointer">Test new features</p>
        </div>
        <div className="nohover text-xs font-bold text-gray-700">
          <p className="pl-3 hover:cursor-pointer">NFL Sunday Ticket</p>
        </div>
        <div className="nohover pt-4 text-[11px] text-gray-700">
          <p className="pl-3 hover:cursor-pointer">© 2023 Fake Google LLC</p>
        </div>
      </div>
    </div>
  );
};
