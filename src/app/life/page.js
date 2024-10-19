"use client"

import { CreditCard, DollarSign, Briefcase } from "lucide-react"
import { motion } from "framer-motion"

export default function Life() {
  const lifeLessons = [
    { 
      icon: CreditCard, 
      title: "Debit vs Credit Cards", 
      color: "from-yellow-300 to-yellow-600", 
      videoUrl: "https://www.youtube.com/watch?v=sm0FzHMInig", // Replace with actual video URL
      gameUrl: "https://scratch.mit.edu/projects/1083696854/embed"
    },
    { 
      icon: DollarSign, 
      title: "Budget Routine", 
      color: "from-green-400 to-green-600", 
      videoUrl: "https://www.youtube.com/watch?v=IIKr2915l2g", // Replace with actual video URL
      gameUrl: "https://scratch.mit.edu/projects/1083758756/embed"
    },
    { 
      icon: Briefcase, 
      title: "Goal Setting", 
      color: "from-purple-400 to-purple-600", 
      videoUrl: "https://www.youtube.com/watch?v=XpKvs-apvOs", // Replace with actual video URL
      gameUrl: "https://scratch.mit.edu/projects/1083717728/embed"
    },
  ]


  //Fetching Resources Resources from backend
  /* useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://52.91.214.247:8080/api/events/"); // Replace with your backend API URL
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setEvents(data.sort((a, b) => new Date(a.date) - new Date(b.date)));
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };
    fetchEvents();
  }, []); */

  return (
    <div className="w-full min-h-screen flex justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-12">
        {lifeLessons.map((lesson, index) => (
          <motion.div
            key={lesson.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="flex flex-col items-center gap-4 p-4 rounded-lg shadow-lg bg-white transition-all duration-300 hover:scale-105 h-fit"
          >
            <div className={`p-6 rounded-full bg-gradient-to-br ${lesson.color} shadow-lg`}>
              <lesson.icon className="h-16 w-16 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-800">{lesson.title}</span>
            <a 
              href={lesson.videoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-2 px-4 py-2 rounded-lg bg-violet-950 text-white hover:bg-violet-800 transition-colors duration-300"
            >
              Watch Video
            </a>
            <a 
              href={lesson.gameUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-2 px-4 py-2 rounded-lg bg-violet-950 text-white hover:bg-violet-800 transition-colors duration-300"
            >
              Play Game
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}