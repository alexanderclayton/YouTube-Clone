//import//
import Kanye from "../assets/kanye-rest-image.jpg";
import { Comments } from "./Comments";
import { RxAvatar } from "react-icons/rx";
import { CiBellOn } from "react-icons/ci";
import { BsChevronDown, BsThreeDots } from "react-icons/bs";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillCheckCircle,
} from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { HiOutlineScissors } from "react-icons/hi";

export const SelectedVideo: React.FC = () => {
  return (
    <div className="w-full p-4 lg:w-[60%]">
      <img src={Kanye} alt="yeezy" className="aspect-video object-cover" />
      <h2 className="pt-2 text-xl font-bold">Title to a Popular Video</h2>
      <div className="flex w-full flex-col items-start justify-start sm:flex-row sm:items-center">
        <div className="flex w-[50%] items-center justify-start">
          <div>
            <RxAvatar size={40} className="hover:cursor-pointer" />
          </div>
          <div className="bg- p-2">
            <div className="flex w-full items-center justify-between">
              <h3 className="cut max-w-[80%] pr-3 font-bold hover:cursor-pointer">
                Creator Name
              </h3>
              <AiFillCheckCircle />
            </div>
            <p className="text-sm text-gray-700">420k subscribers</p>
          </div>
          <div className="flex h-[36px] items-center rounded-full bg-gray-200 px-4 hover:cursor-pointer hover:bg-gray-300">
            <CiBellOn size={25} />
            <p className="p-2 text-sm">Subscribed</p>
            <BsChevronDown size={15} />
          </div>
        </div>
        <div className="my-2 flex w-[50%] items-center justify-start sm:mx-2 sm:justify-end">
          <div className="flex h-[36px] items-center rounded-full bg-gray-200">
            <div className="inherit-left flex h-full w-full items-center pl-3 hover:cursor-pointer hover:bg-gray-300">
              <AiOutlineLike size={20} />
              <p className="w-[70%] border-r border-gray-700 pl-1 pr-4 text-sm">
                1.6k
              </p>
            </div>
            <div className="inherit flex h-full w-full items-center pl-2 pr-3 hover:cursor-pointer hover:bg-gray-300">
              <AiOutlineDislike size={20} />
            </div>
          </div>
          <div className="m-2 flex h-[36px] items-center rounded-full bg-gray-200 px-3 hover:cursor-pointer hover:bg-gray-300">
            <PiShareFat size={20} />
            <p className="pl-2 text-sm">Share</p>
          </div>
          <div className="full flex h-[36px] items-center rounded-full bg-gray-200 px-3 hover:cursor-pointer hover:bg-gray-300 sm:hidden">
            <LiaDownloadSolid size={20} />
            <p className="pl-2 text-sm">Download</p>
          </div>
          <div className="full m-2 flex h-[36px] items-center rounded-full bg-gray-200 px-3 hover:cursor-pointer hover:bg-gray-300 sm:hidden">
            <HiOutlineScissors size={20} />
            <p className="pl-2 text-sm">Clip</p>
          </div>
          <div className=" flex h-[36px] w-[36px] items-center justify-center rounded-full bg-gray-200 px-2 hover:cursor-pointer hover:bg-gray-300">
            <BsThreeDots size={20} />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col rounded-lg bg-gray-200 p-2 hover:cursor-pointer hover:bg-gray-300">
        <div className="flex flex-row items-center">
          <p className="text-xs font-bold">124k views</p>
          <p className="px-2 text-xs font-bold">15 hours ago</p>
          <div className="flex flex-row items-center text-xs font-bold text-gray-700">
            <p className="px-1 text-xs">#Tags</p>
            <p className="px-1 text-xs">#Tags</p>
            <p className="px-1 text-xs">#Tags</p>
          </div>
        </div>
        <div className="max-h-[60px] overflow-y-auto overflow-ellipsis text-xs text-gray-700">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            odio exercitationem dignissimos? Ex tempore assumenda voluptatum non
            necessitatibus itaque possimus natus quisquam saepe accusamus, at
            soluta repellat voluptatem excepturi sed?
          </p>
        </div>
      </div>
        <div className="hidden lg:flex">
          <Comments />
        </div>
    </div>
  );
};
