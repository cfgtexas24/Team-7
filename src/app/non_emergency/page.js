"use client"

import { Book, Calendar, Presentation, Plus, Projector } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function NonEmergency() {
  const items = [
    { icon: Book, title: "Resources", color: "from-blue-400 to-blue-600", link: "/resources" },
    { icon: Calendar, title: "Events", color: "from-green-400 to-green-600", link: "/events" },
    { icon: Presentation, title: "Life Lessons", color: "from-purple-400 to-purple-600", link: "/life" },
    { icon: Plus, title: "Mentor Program", color: "from-orange-400 to-orange-600", link: "https://meet.google.com/tkk-xayx-pxb?ijlm=1729332460579&hs=187&adhoc=1" }
  ]
  // TODO the mentor page shouldn't show up until you're signed up

  return (
    <div className="w-full min-h-screen flex justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row gap-12 p-12 rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md h-fit mt-8"
      >
        {items.map((item, index) => (
            <Link href={item.link}>
                 <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="flex flex-col items-center gap-4 transition-all duration-300 hover:scale-110"

          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-full bg-gradient-to-br ${item.color} shadow-lg`}
            >
              <item.icon className="h-16 w-16 text-white" />
            </motion.div>
            <span className="font-bold text-2xl text-gray-800">{item.title}</span>
          </motion.div>
            </Link>
        ))}
      </motion.div>
    </div>
  )
}