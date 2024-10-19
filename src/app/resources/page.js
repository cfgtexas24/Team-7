"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Resources() {
  const [openCategory, setOpenCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const response = await fetch('http://52.91.214.247:8080/api/resources/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const resource = await response.json();
        console.log('Fetched resource:', resource);

        const transformedCategories = resource.map(item => ({
          title: item.category,
          description: item.category,
          image: item.link,
          body: JSON.parse(item.body)
        }));

        setCategories(transformedCategories);
        console.log('Transformed categories:', transformedCategories);
      } catch (error) {
        console.error('Error fetching resource:', error);
      }
    };

    fetchResource();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-blue-100 to-white"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative h-64 bg-blue-600 mb-12"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/svgs/bg-pattern.svg')] bg-no-repeat bg-center bg-cover z-0 opacity-80" />
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-4xl font-bold text-white text-center"
          >
            Resources
          </motion.h1>
        </div>
      </motion.div>

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="flex flex-col h-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="h-48 w-full"
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <CardHeader className="flex-grow">
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Dialog
                    open={openCategory === index}
                    onOpenChange={(isOpen) =>
                      setOpenCategory(isOpen ? index : null)
                    }
                  >
                    <DialogTrigger asChild>
                      <Button className="w-full">View Resources</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>{category.title}</DialogTitle>
                        <DialogDescription>
                          {category.description}
                        </DialogDescription>
                      </DialogHeader>
                      <ScrollArea className="h-[60vh] mt-4 pr-4">
                        <motion.ul className="space-y-2">
                          <AnimatePresence>
                            {category.body.map((item, itemIndex) => (
                              <motion.li
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.2, delay: itemIndex * 0.05 }}
                                className="hover:bg-secondary rounded-md p-2 transition-colors"
                              >
                                <Link href={item.link} className="text-primary hover:underline">
                                  {item.value}
                                </Link>
                              </motion.li>
                            ))}
                          </AnimatePresence>
                        </motion.ul>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </motion.div>
  );
}