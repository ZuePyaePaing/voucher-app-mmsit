import React from "react";
import { Database, Files, MonitorCheck, UserRoundPen } from "lucide-react";
import Container from "../components/Container";
import ModuleBtn from "../components/ModuleBtn";

const Dashboard = () => {
  return (
    <section className="w-full h-screen">
      <Container className={` space-y-3`}>
        <div className=" grid grid-cols-3 gap-5">
          <div className=" col-span-3  md:col-span-1">
            <ModuleBtn
              name={"Product"}
              icon={<Database size={35} />}
              url={"/dashboard/product"}
            />
          </div>
          <div className=" col-span-3  md:col-span-1">
            <ModuleBtn
              name={"Sale"}
              icon={<MonitorCheck size={35} />}
              url={"/dashboard/sale"}
            />
          </div>
          <div className=" col-span-3  md:col-span-1">
            <ModuleBtn
              name={"Voucher"}
              icon={<Files size={35} />}
              url={"/dashboard/voucher"}
            />
          </div>
          <div className=" col-span-3  md:col-span-1">
            <ModuleBtn
              name={"Profile"}
              icon={<UserRoundPen size={35} />}
              url={"/dashboard/profile"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Dashboard;
