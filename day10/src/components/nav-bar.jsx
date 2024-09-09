import { BellRing, Search } from "lucide-react";
import { Button } from "./ui/button";
const Navbar = () => {
  return (
    <nav className="p-4 w-full flex items-center justify-between gap-x-2">
      <div className="w-3/4 flex items-center justify-between">
        <div className=" space-y-2">
          <h2 className="text-lg font-bold">Welcome, Zue Pyae</h2>
          <p className=" text-xs text-muted font-semibold">22/8/2024</p>
        </div>
        <div className="flex bg-secondary text-secondary-foreground rounded-md p-2 gap-x-2">
          <Search className="text-black" />
          <input
            type="text"
            placeholder="Search anything"
            className="bg-transparent border-none outline-none"
          />
        </div>
      </div>
      <div className=" w-1/3 flex items-center  justify-evenly">
        <BellRing />
        <div className=" w-10 h-10 overflow-hidden rounded-full ">
          <img
            src="https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149659.png"
            alt="image"
          />
        </div>
        <Button variant="secondary">Create New Task</Button>
      </div>
    </nav>
  );
};

export default Navbar;
