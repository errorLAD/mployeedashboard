import Image from "next/image";
import Navbar from "./navbar";
import Sidenav from "./sidenav";
import Section from "./section";

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 ">
      <Navbar />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div className="h-32 rounded-lg bg-gray-200">
          <Sidenav />
      </div>
      <div className="h-32 rounded-lg  lg:col-span-2">
            <Section />
      </div>
      </div>
     
     </div>
  );
}
