import Image from "next/image";
import Navbar from "./ui/navbar";
import Sidenav from "./ui/sidenav";
import Section from "./ui/section/section";

export default function Dashboard() {
  return (
    <div class="container mx-auto px-4 ">
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
