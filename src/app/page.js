import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center text-black bg-white pt-20">
      <div className="border border-black max-w-[600px] w-full rounded-lg p-5 flex flex-col text-white justify-center gap-4 items-center font-semibold shadow-2xl h-fit">
        <a href="/apply" className="px-5 py-3 bg-red-600 rounded-md w-full text-center sm:max-w-[456px]">Emergency</a>
        <a className="bg-black rounded-lg px-5 py-3 w-full sm:max-w-[456px] text-center">Non-Emergency</a>
      </div>
    </div>
  );
}
