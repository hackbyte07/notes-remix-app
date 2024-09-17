import { Link } from "@remix-run/react";
import React from "react";

const Index = () => {
  return (
    <div className="h-screen flex flex-1 justify-center items-center">
      <Link to={"/notes"} className="btn btn-primary">
        Go to Notes
      </Link>
    </div>
  );
};

export default Index;
