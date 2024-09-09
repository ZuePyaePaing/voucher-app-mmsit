import React from "react";
import { Link } from "react-router-dom";

const ModuleBtn = ({ name, icon, url }) => {
  return (
    <Link to={url} className="bg-blue-600 text-white rounded-lg px-5 py-10 flex flex-col items-center justify-center gap-3">
      {icon}
      {name}
    </Link>
  );
};

export default ModuleBtn;
