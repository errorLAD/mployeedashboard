import Image from "next/image";
import SemiCircleProgressBar from "react-progressbar-semicircle";
export default function Section() {
  return (
    <>
     <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
       <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
       <div className=" lg:col-span-2">
       <div className="text-center sm:text-left">
          <h1 className="text-xl font-bold text-gray-900 sm:text-xl">Properties</h1>
          {/* Success */}
  
          <span class="bg-gray-100 text-xs font-medium me-2 px-2.5 py-1.5 rounded border border-gray-200"><span class="text-gray-400 ">  Job Type: </span> Hybrid</span>
          <span class="bg-gray-100 text-xs font-medium me-2 px-2.5 py-1.5 rounded border border-gray-200"><span class="text-gray-400 ">  Date Posted: </span>24-04-2024 to 30-04-2024</span>
          <div class="pt-2">
          <span class="bg-gray-100 text-xs font-medium me-2 px-2.5 py-1.5 rounded border border-gray-200"><span class="text-gray-400 "> Job Type: </span> Full-Time</span>
          
          <span class="bg-gray-100 text-xs font-medium me-2 px-2.5 py-1.5 rounded border border-gray-200"><span class="text-gray-400 ">  Salary Range: </span>$1000 - $2,500</span>
          </div>
          <div class="pt-2">
          <span class="bg-gray-100 text-xs font-medium me-2 px-2.5 py-1.5 rounded border border-gray-200"><span class="text-gray-400 ">  Locations: </span> Pune   &gt;   Delhi   &gt;   Hyderabad   &gt;   Tamil Nadu</span>
          <span class="bg-gray-100 text-xs font-medium me-2 px-2.5 py-1.5 rounded border border-gray-200"><span class="text-gray-400 "> </span>+1</span>
   
          <span class="bg-orange-100 text-xs font-medium me-2 px-2.5 py-1.5 rounded border border-orange-200"><span class="text-orange-400 "> </span>Edit Profile</span>
       
          </div>
    
        </div>
       </div>
       
       
       <div className="h-32 rounded-lg">
       <article className="rounded-xl border border-gray-700 bg-gray-900 p-4">

        <p className="py-2 mt-1 text-xs font-medium text-gray-300">
        Lorem ipsum dolor sit consectetur adipiscing elit 
        </p>
        <a
         class="inline-block rounded bg-orange-400 px-10 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
        href="#"
        >
         Refresh Jobs
       </a>
      </article>


       </div>
     </div>


     </div>


 {/* section jobs */}


     <div class="pt-4">
     <h2 className="py-2 text-l font-bold text-gray-900 sm:text-l">Jobs(44)</h2>
          
     <div class=" w-full p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
         <div class="w-full p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
             <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                 <div className="h-32 rounded-lg  lg:col-span-2">
                   
                 <div class="flex ">
                    <div class="flex-shrink-0">
                        <img class="w-10 h-10 rounded" src="https://i.postimg.cc/kgS3Xz3n/Screenshot-2024-05-10-104816.png" alt="Neil image"/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          UI/UX Designer
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                     Google   
                        {/* Success */}
   <span class="px-2"><span
     className="inline-flex items-center justify-center rounded-full bg-orange-50 px-2.5 py-0.5 text-orange-700"
    >
   <p className="text-xs whitespace-nowrap text-sm">Figma</p>
   </span>
   </span>
  <span
  className="inline-flex items-center justify-center rounded-full bg-red-50 px-2.5 py-0.5 text-red-700"
  >
  <p className="text-xs whitespace-nowrap text-sm">Prototyping</p>
  </span>
  <span class="px-2">
  <span
  className="text-sm inline-flex items-center justify-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-indigo-700"
  >


  <p className=" text-xs whitespace-nowrap">User Interface</p>
  </span>
</span>
                        </p>
                    </div>
                </div>
{ /*added new */}
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
  0-3 Years
Full Time
Posted on:
02 April 2024
*/}

<nav aria-label="Breadcrumb" className="py-2 px-2">
  <ol className="flex items-center gap-1 text-sm text-gray-600">
    <li>
      <a href="#" className="block transition hover:text-gray-700">
        <span className="sr-only">  </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </a>
    </li>
    <li>
      <a href="#" className="block transition hover:text-gray-700">  0-3 Years </a>
    </li>
    |
    <li className="rtl:rotate-180">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>

    </li>
  
    <li>
      <a href="#" className="block transition hover:text-gray-700">Full Time </a>
    </li>
  |
    <li>
      <a href="#" className="block transition hover:text-gray-700"> Posted on:
02 April 2024 </a>
    </li>
  </ol>
</nav>


{/* l*/}
<p class="py-1 line-clamp-3 text-xs/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae 
     
    </p>
    <p class=" line-clamp-3 text-xs/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae 
     
    </p>


                 </div>

                 { /*added new */}
                 <div className="h-32 rounded-lg ">
                     {/* Base */}

                           <a
                           className=" gap-2 inline-block rounded-lg border border-orange-400 bg-orange-400 px-4 py-1.5 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                           href="#"
                           >
                          Apply Now
                          </a>

                           <span class="px-3">
                            <a
                            className=" gap-2  inline-block rounded-lg  border border-gray-400 px-4 gap-4 py-1.5 text-sm font-medium text-gray-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                            href="#"
                             >
                          Save
                           </a>
                           </span>

                             <SemiCircleProgressBar percentage={92} strokeWidth={15} showPercentValue  />
                            <h6 class="text-center text-xs">match score </h6>
               </div>
             </div>
      </div>
        <br/>
      <div class="w-full p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
             <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                 <div className="h-32 rounded-lg  lg:col-span-2">
                   
              <div class="flex ">
                    <div class="flex-shrink-0">
                        <img class="w-10 h-10 rounded" src="https://i.postimg.cc/kgS3Xz3n/Screenshot-2024-05-10-104816.png" alt="Neil image"/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          UI/UX Designer
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                     Google   
                        {/* Success */}
   <span class="px-2"><span
     className="inline-flex items-center justify-center rounded-full bg-orange-50 px-2.5 py-0.5 text-orange-700"
    >
   <p className="text-xs whitespace-nowrap text-sm">Figma</p>
   </span>
   </span>
  <span
  className="inline-flex items-center justify-center rounded-full bg-red-50 px-2.5 py-0.5 text-red-700"
  >
  <p className="text-xs whitespace-nowrap text-sm">Prototyping</p>
  </span>
  <span class="px-2">
  <span
  className="text-sm inline-flex items-center justify-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-indigo-700"
  >


  <p className=" text-xs whitespace-nowrap">User Interface</p>
  </span>
</span>
                        </p>
                    </div>
      </div>
{ /*added new */}
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
  0-3 Years
Full Time
Posted on:
02 April 2024
*/}

<nav aria-label="Breadcrumb" className="py-2 px-2">
  <ol className="flex items-center gap-1 text-sm text-gray-600">
    <li>
      <a href="#" className="block transition hover:text-gray-700">
        <span className="sr-only">  </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </a>
    </li>
    <li>
      <a href="#" className="block transition hover:text-gray-700">  0-3 Years </a>
    </li>
    |
    <li className="rtl:rotate-180">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>

    </li>
  
    <li>
      <a href="#" className="block transition hover:text-gray-700">Full Time </a>
    </li>
  |
    <li>
      <a href="#" className="block transition hover:text-gray-700"> Posted on:
        02 April 2024 </a>
    </li>
  </ol>
</nav>


{/* l*/}
<p class="py-1 line-clamp-3 text-xs/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae 
     
    </p>
    <p class=" line-clamp-3 text-xs/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae 
     
    </p>


                 </div>

                 { /*added new */}
                 <div className="h-32 rounded-lg ">
                     {/* Base */}

                           <a
                           className=" gap-2 inline-block rounded-lg border border-orange-400 bg-orange-400 px-4 py-1.5 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                           href="#"
                           >
                          Apply Now
                          </a>

                           <span class="px-3">
                            <a
                            className=" gap-2  inline-block rounded-lg  border border-gray-400 px-4 gap-4 py-1.5 text-sm font-medium text-gray-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                            href="#"
                             >
                          Save
                           </a>
                           </span>

                             <SemiCircleProgressBar percentage={92} strokeWidth={15} showPercentValue  />
                            <h6 class="text-center text-xs">match score </h6>
               </div>
             </div>
        </div>
        <br/>
        <div class="w-full p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
             <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                 <div className="h-32 rounded-lg  lg:col-span-2">
                   
                 <div class="flex ">
                    <div class="flex-shrink-0">
                        <img class="w-10 h-10 rounded" src="https://i.postimg.cc/kgS3Xz3n/Screenshot-2024-05-10-104816.png" alt="Neil image"/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          UI/UX Designer
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                     Google   
                        {/* Success */}
      <span class="px-2"><span
         className="inline-flex items-center justify-center rounded-full bg-orange-50 px-2.5 py-0.5 text-orange-700"
      >
     <p className="text-xs whitespace-nowrap text-sm">Figma</p>
      </span>
     </span>
    <span
      className="inline-flex items-center justify-center rounded-full bg-red-50 px-2.5 py-0.5 text-red-700"
    >
    <p className="text-xs whitespace-nowrap text-sm">Prototyping</p>
    </span>
    <span class="px-2">
    <span
    className="text-sm inline-flex items-center justify-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-indigo-700"
    >


  <p className=" text-xs whitespace-nowrap">User Interface</p>
  </span>
</span>
                        </p>
                    </div>
                </div>
{ /*added new */}
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
  0-3 Years
Full Time
Posted on:
02 April 2024
*/}

<nav aria-label="Breadcrumb" className="py-2 px-2">
  <ol className="flex items-center gap-1 text-sm text-gray-600">
    <li>
      <a href="#" className="block transition hover:text-gray-700">
        <span className="sr-only">  </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </a>
    </li>
    <li>
      <a href="#" className="block transition hover:text-gray-700">  0-3 Years </a>
    </li>
    |
    <li className="rtl:rotate-180">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>

    </li>
  
    <li>
      <a href="#" className="block transition hover:text-gray-700">Full Time </a>
    </li>
  |
    <li>
      <a href="#" className="block transition hover:text-gray-700"> Posted on:
02 April 2024 </a>
    </li>
  </ol>
</nav>


{/* l*/}
<p class="py-1 line-clamp-3 text-xs/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae 
     
    </p>
    <p class=" line-clamp-3 text-xs/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae 
     
    </p>


                 </div>

                 { /*added new */}
                 <div className="h-32 rounded-lg ">
                     {/* Base */}

                           <a
                           className=" gap-2 inline-block rounded-lg border border-orange-400 bg-orange-400 px-4 py-1.5 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                           href="#"
                           >
                          Apply Now
                          </a>

                           <span class="px-3">
                            <a
                            className=" gap-2  inline-block rounded-lg  border border-gray-400 px-4 gap-4 py-1.5 text-sm font-medium text-gray-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                            href="#"
                             >
                          Save
                           </a>
                           </span>

                             <SemiCircleProgressBar percentage={92} strokeWidth={15} showPercentValue  />
                            <h6 class="text-center text-xs">match score </h6>
               </div>
             </div>
        </div>
   </div>
   </div>
     </>
  );
}