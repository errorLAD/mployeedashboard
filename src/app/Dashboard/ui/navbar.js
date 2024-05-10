import Image from "next/image";

export default function Navbar() {
  return (
  <>
  <div class="container mx-auto px-4">
  <header className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <img class="w-50 h-10 rounded" src="https://i.postimg.cc/CLj1WJVY/Screenshot-2024-05-10-122428.png" alt="Neil image"/>
                   
        </a>
      </div>
      
      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-gray-900 transition hover:text-gray-800/75" href="#"> Resume Scan </a>
            </li>
            <span
            className="text-xs inline-flex items-center justify-center rounded-full bg-orange-100 px-2.5 py-0.5 text-orange-500"
             >
            <li>
              <a className=" transition hover:text-gray-500/75" href="#"> New Launch </a>
            </li>
           </span>
            <li>
              <a className="text-gray-900 transition hover:text-gray-500/75" href="#"> Resume Keyowrds </a>
            </li>

            <li>
              <a className="text-gray-900 transition hover:text-gray-500/75" href="#">Resume Services </a>
            </li>

            <li>
              <a className="text-gray-900 transition hover:text-gray-500/75" href="#">Career Blogs </a>
            </li>

            <li>
              <a className="text-gray-900 transition hover:text-gray-500/75" href="#"> About Us</a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
        <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-100 py-1.5 rounded-full">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="size-7 rounded-full object-cover"
      />

      <div>
        <p className="text-xs">
          <strong className="block font-medium">Divyanshu </strong>

         </p>
      </div>
    </a>

          <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
  </div>

  </>

  );
}
