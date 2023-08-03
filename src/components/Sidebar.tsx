//imports//
import { AiFillHome } from "react-icons/ai";
import { MdOutlineLibraryMusic, MdOutlineVideoLibrary } from "react-icons/md";
import { BsCollectionPlay } from "react-icons/bs";

export const Sidebar: React.FC = () => {
  return (
    <div className="hidden w-[64px] flex-col justify-center pt-4 sm:flex">
      <div className="flex flex-col items-center rounded-md py-4 hover:cursor-pointer hover:bg-gray-300">
        <AiFillHome size={25} />
        <h2 className="text-[10px]">Home</h2>
      </div>
      <div className="flex flex-col items-center rounded-md py-4 hover:cursor-pointer hover:bg-gray-300">
        <MdOutlineLibraryMusic size={25} />
        <h2 className="text-[10px]">Shorts</h2>
      </div>
      <div className="flex flex-col items-center rounded-md py-4 hover:cursor-pointer hover:bg-gray-300">
        <BsCollectionPlay size={25} />
        <h2 className="text-[10px]">Subscriptions</h2>
      </div>
      <div className="flex flex-col items-center rounded-md py-4 hover:cursor-pointer hover:bg-gray-300">
        <MdOutlineVideoLibrary size={25} />
        <h2 className="text-[10px]">Library</h2>
      </div>
    </div>
  );
};
