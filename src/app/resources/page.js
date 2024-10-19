"use client";

import { useState } from "react";
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

const categories = [
  {
    title: "CPS Case Court Hearings",
    description: "Information and resources related to CPS court proceedings",
    image: "/CPS.jpg",
    data: [
      {
        id: 1,
        value:
          "Information on what an attorney for a Parent does in a CPS case",
        link: "https://texasfosteryouth.org/download/4892/",
      },
    ],
  },
  {
    title: "Benefits for Aged Out and Older Youth",
    description:
      "Resources and information for foster youth transitioning to adulthood",
    image: "/Youth.jpg",
    data: [
      {
        id: 9,
        value: "Tuition Waiver FAQ",
        link: "https://texasfosteryouth.org/download/13598/",
      },
    ],
  },
  {
    title: "Getting Your History",
    description: "How to obtain your CPS records and personal history",
    image: "/Records.jpg",
    data: [
      {
        id: 22,
        value: "Obtaining Your CPS Records*",
        link: "https://texasfosteryouth.org/download/109/",
      },
    ],
  },
];

export default function Resources() {
  const [openCategory, setOpenCategory] = useState(null);

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
                <CardDescription>{category.description}</CardDescription>
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
                        {category.data.map((item) => (
                          <li
                            key={item.id}
                            className="hover:bg-secondary rounded-md p-2 transition-colors"
                          >
                            <Link
                              href={item.link}
                              className="text-primary hover:underline"
                            >
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
