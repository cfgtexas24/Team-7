import { Book, Calendar, Presentation } from "lucide-react";

export default function NonEmergency() {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="flex flex-row gap-8 border-2 border-black p-8 rounded-lg shadow-lg bg-white h-fit mt-4">
        <div className="flex flex-col items-center gap-2 transition-transform transform hover:scale-110">
          <Book className="h-12 w-12 text-black" />
          <span className="font-bold text-xl">Resources</span>
        </div>
        <div className="flex flex-col items-center gap-2 transition-transform transform hover:scale-110">
          <Calendar className="h-12 w-12 text-black" />
          <span className="font-bold text-xl">Events</span>
        </div>
        <div className="flex flex-col items-center gap-2 transition-transform transform hover:scale-110">
          <Presentation className="h-12 w-12 text-black" />
          <span className="font-bold text-xl">Life Lessons</span>
        </div>
      </div>
    </div>
  );
}
