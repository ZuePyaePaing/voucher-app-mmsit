import { Button } from "@/components/ui/button";
import { Check, Clock3, Files } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-screen overflow-y-scroll scrollbar-hide flex gap-4 ">
      <div className="w-2/3">
        <div className=" flex  justify-between gapx-5">
          <div className=" px-5 py-5 rounded-md border-2 space-y-3 ">
            <h1>Total</h1>
            <p>4</p>
            <Button>Buy More Task</Button>
          </div>
          <div className=" px-5 py-5 bg-slate-400 rounded-md flex gap-x-4">
            <div>
              <Check />
              <p>Done</p>
              <h2 className=" font-bold">2</h2>
            </div>
            <div>
              <Clock3 />
              <p>In Progress</p>
              <h2 className=" font-bold">2</h2>
            </div>
            <div>
              <Files />
              <p>In Queue</p>
              <h2 className=" font-bold">2</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3">r</div>
    </div>
  );
};

export default Home;
