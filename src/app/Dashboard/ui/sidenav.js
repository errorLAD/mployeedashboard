import Image from "next/image";
export default function Sidenav() {
  {/* Job Recommendation Tool
s*/}
  return (
  <>
  <div class="container mx-auto">
  <div className="flex h-screen flex-col justify-between bg-white">
  <div className="px-2 py-2">
       <ul className="mt-2 space-y-1">
       <li className="py-2">
        <a
          href="#"
          className="inline block rounded-lg px-4 py-2 text-sm font-medium text-gray-900"
        >
        
            Job Recommendation Tool
        </a>
      </li>
 
      <span className="grid h-7 w-48 py-2 place-content-center rounded-lg bg-gray-900 text-xs text-gray-50">
        Job Boards
     </span>
      
      <li>
     <a
     className="grid h-7 w-48 place-content-center rounded-lg  border border-gray-400 text-xs text-orange-400"
     href="#"
     >
     UI/UX Designer
    </a>
      </li>
      <li>
        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Web Developer
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Analyst
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-orange-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Create a new profile
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-m font-medium text-gray-900"
        >
          History
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-m font-medium text-gray-900"
        >
          Saved Jobs
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-m font-medium text-gray-900"
        >  
      Plans
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-m font-medium text-gray-900"
        >
          Manage Profiles
        </a>
      </li>
    </ul>
  </div>
<br/>
  <div className="  bottom-0 border-t border-gray-100">
  <h6 class="text-xs px-4 py-2">Help & Support</h6>

<ul>
  <li>
        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Settings

        </a>
      </li>
      <li>
        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
      Help Center
        </a>
      </li>
      <li>
      <a href="" class=" text-xs font-medium me-2 px-2.5 py-1.5 rounded border border-gray-200">Job Type: <span class="text-orange-500 ">  Full-Time</span></a>
      </li>
      
      
      <li className="py-4">
      <a
       className="inline-block rounded border border-orange-600 px-4 py-3 text-sm font-medium text-gray-800 bg-orange-50"
       href="#"
      >
      <div class="flex ">
                    <div class="flex-shrink-0">
                        <img class="w-10 h-10 rounded" src="https://i.postimg.cc/kgS3Xz3n/Screenshot-2024-05-10-104816.png" alt="Neil image"/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                         UPGRADE TO PRO 
                        </p>
                        <h6 class="text-xs text-gray-500 truncate dark:text-gray-200">
                         Get All Feature 
                        {/* Success */}

                        </h6>
                    </div>
                </div>
         </a>
      </li>
      </ul>
  </div>
  </div>
  </div>
  </>
  );
}
