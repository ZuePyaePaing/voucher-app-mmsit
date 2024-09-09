import React from "react";
import { Database, Files, MonitorCheck } from "lucide-react";
import Container from "../components/Container";
import ModuleBtn from "../components/ModuleBtn";
import Breadcrumb from "../components/Breadcrumb";

const Dashboard = () => {
  return (
    <section className="w-full min-h-screen">
      <Container className={` space-y-3`}>
        <div className=" grid grid-cols-3 gap-5">
          <div className=" col-span-3  md:col-span-1">
            <ModuleBtn
              name={"Product"}
              icon={<Database size={35} />}
              url={"/product"}
            />
          </div>
          <div className=" col-span-3  md:col-span-1">
            <ModuleBtn
              name={"Sale"}
              icon={<MonitorCheck size={35} />}
              url={"/sale"}
            />
          </div>
          <div className=" col-span-3  md:col-span-1">
            <ModuleBtn
              name={"Voucher"}
              icon={<Files size={35} />}
              url={"/voucher"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Dashboard;
