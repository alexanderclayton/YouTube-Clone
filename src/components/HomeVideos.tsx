//import//
import { RxAvatar } from "react-icons/rx";
import { AiFillCheckCircle } from "react-icons/ai";
import Kanye from "../assets/kanye-rest-image.jpg";
import Seascape from "../assets/placeholder-image-4.jpg";
import Mountains from "../assets/group-project-1.jpg";
import Signs from "../assets/languages-signpost.jpg";
import Computer from "../assets/security.png";
import Lightbulb from "../assets/first-application.jpg";

export const HomeVideos: React.FC = () => {
  return (
    <div className="grid w-full gap-4 sm:p-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="grid aspect-[4/3] grid-cols-6 grid-rows-5 p-4">
        <img
          src={Kanye}
          alt="yeezy"
          className="col-start-1 col-end-7 row-start-1 row-end-5 h-full w-full rounded-lg object-cover"
        />
        <div className="col-start-1 col-end-7 row-start-5 row-end-6 flex pt-2">
          <RxAvatar size={40} />
          <div className="mx-3">
            <div className="">
              <h1 className="text-sm font-bold">
                Here is a Clever Title for a Popular Video
              </h1>
            </div>
            <div className="flex items-center">
              <p className="pr-1 text-xs text-gray-600">Creator Username</p>
              <AiFillCheckCircle className=" text-xs text-gray-600" />
            </div>
            <div className="flex">
              <p className="text-xs text-gray-600">### views •</p>
              <p className="text-xs text-gray-600">1 year ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid aspect-[4/3] grid-cols-6 grid-rows-5 p-4">
        <img
          src={Seascape}
          alt="seascape"
          className="col-start-1 col-end-7 row-start-1 row-end-5 h-full w-full rounded-lg object-cover"
        />
        <div className="col-start-1 col-end-7 row-start-5 row-end-6 flex pt-2">
          <RxAvatar size={40} />
          <div className="mx-3">
            <div className="">
              <h1 className="text-sm font-bold">
                Here is a Clever Title for a Popular Video
              </h1>
            </div>
            <div className="flex items-center">
              <p className="pr-1 text-xs text-gray-600">Creator Username</p>
              <AiFillCheckCircle className=" text-xs text-gray-600" />
            </div>
            <div className="flex">
              <p className="text-xs text-gray-600">### views •</p>
              <p className="text-xs text-gray-600">1 year ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid aspect-[4/3] grid-cols-6 grid-rows-5 p-4">
        <img
          src={Mountains}
          alt="mountains"
          className="col-start-1 col-end-7 row-start-1 row-end-5 h-full w-full rounded-lg object-cover"
        />
        <div className="col-start-1 col-end-7 row-start-5 row-end-6 flex pt-2">
          <RxAvatar size={40} />
          <div className="mx-3">
            <div className="">
              <h1 className="text-sm font-bold">
                Here is a Clever Title for a Popular Video
              </h1>
            </div>
            <div className="flex items-center">
              <p className="pr-1 text-xs text-gray-600">Creator Username</p>
              <AiFillCheckCircle className=" text-xs text-gray-600" />
            </div>
            <div className="flex">
              <p className="text-xs text-gray-600">### views •</p>
              <p className="text-xs text-gray-600">1 year ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid aspect-[4/3] grid-cols-6 grid-rows-5 p-4">
        <img
          src={Signs}
          alt="signs"
          className="col-start-1 col-end-7 row-start-1 row-end-5 h-full w-full rounded-lg object-cover"
        />
        <div className="col-start-1 col-end-7 row-start-5 row-end-6 flex pt-2">
          <RxAvatar size={40} />
          <div className="mx-3">
            <div className="">
              <h1 className="text-sm font-bold">
                Here is a Clever Title for a Popular Video
              </h1>
            </div>
            <div className="flex items-center">
              <p className="pr-1 text-xs text-gray-600">Creator Username</p>
              <AiFillCheckCircle className=" text-xs text-gray-600" />
            </div>
            <div className="flex">
              <p className="text-xs text-gray-600">### views •</p>
              <p className="text-xs text-gray-600">1 year ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid aspect-[4/3] grid-cols-6 grid-rows-5 p-4">
        <img
          src={Computer}
          alt="computer"
          className="col-start-1 col-end-7 row-start-1 row-end-5 h-full w-full rounded-lg object-cover"
        />
        <div className="col-start-1 col-end-7 row-start-5 row-end-6 flex pt-2">
          <RxAvatar size={40} />
          <div className="mx-3">
            <div className="">
              <h1 className="text-sm font-bold">
                Here is a Clever Title for a Popular Video
              </h1>
            </div>
            <div className="flex items-center">
              <p className="pr-1 text-xs text-gray-600">Creator Username</p>
              <AiFillCheckCircle className=" text-xs text-gray-600" />
            </div>
            <div className="flex">
              <p className="text-xs text-gray-600">### views •</p>
              <p className="text-xs text-gray-600">1 year ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid aspect-[4/3] grid-cols-6 grid-rows-5 p-4">
        <img
          src={Lightbulb}
          alt="lightbulb"
          className="col-start-1 col-end-7 row-start-1 row-end-5 h-full w-full rounded-lg object-cover"
        />
        <div className="col-start-1 col-end-7 row-start-5 row-end-6 flex pt-2">
          <RxAvatar size={40} />
          <div className="mx-3">
            <div className="">
              <h1 className="text-sm font-bold">
                Here is a Clever Title for a Popular Video
              </h1>
            </div>
            <div className="flex items-center">
              <p className="pr-1 text-xs text-gray-600">Creator Username</p>
              <AiFillCheckCircle className=" text-xs text-gray-600" />
            </div>
            <div className="flex">
              <p className="text-xs text-gray-600">### views •</p>
              <p className="text-xs text-gray-600">1 year ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
