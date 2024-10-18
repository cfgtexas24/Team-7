

export default function NavBar() {
  return (
    <header className="sticky px-60 h-16 flex items-center bg-gray-900 z-10">
      <div className="relative w-full">
        <div className="absolute -inset-0.5 bg-gradient-to-tl from-gray-700 to-gray-700 via-gray-400 rounded-xl opacity-75 blur-sm"></div>
        <div className="relative bg-white flex items-center justify-between w-full px-14 py-8 pb-6 rounded-xl text-white">
          <a className="flex items-center justify-center" href="#">
            <img className="w-40" src="https://irp.cdn-website.com/c61e8e49/dms3rep/multi/Storm+Center+of+Hope+and+Service+Logo+F-01.png"/>
          </a>
          <div>
            <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2563eb%,#c084fc_50%,#fde047_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-600 px-3 py-1 text-sm text-white backdrop-blur-3xl ">
                Sign in
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}