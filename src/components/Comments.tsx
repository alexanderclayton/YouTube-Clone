//import//
import { BsFilterLeft } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";

export const Comments: React.FC = () => {
  return (
    <div className="flex w-full flex-col pt-4">
      <div className="flex items-center justify-start">
        <h2 className="font-bold text-gray-700">389 Comments</h2>
        <div className="flex items-center px-4 hover:cursor-pointer">
          <BsFilterLeft size={20} className="text-gray-700" />
          <p className="px-1 text-sm font-bold text-gray-700">Sort by</p>
        </div>
      </div>
      <div className="flex w-full items-start">
        <RxAvatar size={60} className="pr-4" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full border-b pt-2 text-sm"
        />
      </div>
      <div className="flex w-full items-start py-2">
        <RxAvatar size={60} className="pr-4" />
        <div className="w-full">
          <div className="flex items-center pt-2">
            <p className="text-sm font-bold">@username</p>
            <p className="px-2 text-xs font-bold text-gray-700">15 hours ago</p>
            <p className="text-xs text-gray-700">(edited)</p>
          </div>
          <p className="max-h-[60px] w-full overflow-y-auto overflow-ellipsis text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            voluptas eligendi perferendis maiores quis sit, earum, placeat
            voluptate modi mollitia repudiandae ea facere recusandae repellat
            eius tempore eos officiis nemo. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Adipisci accusantium culpa ullam,
            recusandae esse aut consequatur excepturi accusamus eius
            voluptatibus reiciendis facilis nesciunt qui inventore commodi
            maxime expedita, similique est?
          </p>
        </div>
      </div>
      <div className="flex w-full items-start py-2">
        <RxAvatar size={60} className="pr-4" />
        <div className="w-full">
          <div className="flex items-center pt-2">
            <p className="text-sm font-bold">@username</p>
            <p className="px-2 text-xs font-bold text-gray-700">15 hours ago</p>
            <p className="text-xs text-gray-700">(edited)</p>
          </div>
          <p className="max-h-[60px] w-full overflow-y-auto overflow-ellipsis text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            voluptas eligendi perferendis maiores quis sit, earum, placeat
            voluptate modi mollitia repudiandae ea facere recusandae repellat
            eius tempore eos officiis nemo. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Adipisci accusantium culpa ullam,
            recusandae esse aut consequatur excepturi accusamus eius
            voluptatibus reiciendis facilis nesciunt qui inventore commodi
            maxime expedita, similique est?
          </p>
        </div>
      </div>
      <div className="flex w-full items-start py-2">
        <RxAvatar size={60} className="pr-4" />
        <div className="w-full">
          <div className="flex items-center pt-2">
            <p className="text-sm font-bold">@username</p>
            <p className="px-2 text-xs font-bold text-gray-700">15 hours ago</p>
            <p className="text-xs text-gray-700">(edited)</p>
          </div>
          <p className="max-h-[60px] w-full overflow-y-auto overflow-ellipsis text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            voluptas eligendi perferendis maiores quis sit, earum, placeat
            voluptate modi mollitia repudiandae ea facere recusandae repellat
            eius tempore eos officiis nemo. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Adipisci accusantium culpa ullam,
            recusandae esse aut consequatur excepturi accusamus eius
            voluptatibus reiciendis facilis nesciunt qui inventore commodi
            maxime expedita, similique est?
          </p>
        </div>
      </div>
    </div>
  );
};
