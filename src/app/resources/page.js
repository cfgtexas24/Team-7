"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
    // Function to fetch the resource from the backend
    const fetchResource = async () => {
      try {
        const response = await fetch('http://52.91.214.247:8080/api/resources/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const resource = await response.json();
        console.log('Fetched resource:', resource);


        // Transform the data to match the current categories structure
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
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="relative h-64 bg-blue-600 mb-12">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/svgs/bg-pattern.svg')] bg-no-repeat bg-center bg-cover z-0 opacity-80" />
          <h1 className="text-4xl font-bold text-white text-center">
            Resources
          </h1>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="flex flex-col h-full">
              <div className="h-48 w-full">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
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
                      <ul className="space-y-2">
                        {category.body.map((item) => (
                          <li
                            key={item.id}
                            className="hover:bg-secondary rounded-md p-2 transition-colors"
                          >
                            <Link href={item.link} className="text-primary hover:underline">
                              {item.value}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
