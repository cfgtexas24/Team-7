import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-[90vh] bg-gray-50">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-center px-4 py-4 lg:py-6">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-6 lg:p-8">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                Get Help Today
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                We provide emergency and non-emergency services to help you get back on your feet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/apply" passHref>
                  <Button className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto" size="lg">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Emergency
                  </Button>
                </Link>
                <Link href="/non_emergency" passHref>
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 w-full sm:w-auto" size="lg">
                    Non-Emergency
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="h-full">
                <img
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
                  alt="Volunteers working together"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
