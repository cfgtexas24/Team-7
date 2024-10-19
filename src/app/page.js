"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      className="flex h-[90vh] min-h-screen bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-center px-4 py-4 lg:py-6">
        <motion.div 
          className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-6 lg:p-8">
              <motion.h1 
                variants={itemVariants}
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4"
              >
                Get Help Today
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 mb-6"
              >
                We provide emergency and non-emergency services to help you get back on your feet.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/apply" passHref>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto" size="lg">
                      <motion.div
                        animate={{ rotate: [0, -10, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                      >
                        <AlertTriangle className="mr-2 h-5 w-5" />
                      </motion.div>
                      Emergency
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/non_emergency" passHref>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 w-full sm:w-auto" size="lg">
                      Non-Emergency
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2">
              <motion.div 
                className="h-full"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <motion.img
                  variants={imageVariants}
                  animate={isHovered ? "hover" : ""}
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
                  alt="Volunteers working together"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}