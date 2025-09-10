import React from "react";
import { cardData } from "../Card/cardData";
import {
  Card,
  CardDescription,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const myCard = () => {
  const Cards = cardData;
  return (
    <div>
      <div className="Feature text-2xl md:text-3xl font-extrabold font-serif p-6 ">
        Featured Products
      </div>
      <div className="flex gap-4 overflow-x-auto hide-scrollbar p-6">
        {Cards.map((data) => (
          <Card className="w-80 rounded-2xl shadow-lg" key={data.id}>
            <CardHeader>
              <img
                src={data.image}
                alt="Wireless Earbuds"
                className="w-full h-48 object-contain rounded-t-2xl bg-slate-100"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-bold line-clamp-1">
                {data.name}
              </CardTitle>
              <CardDescription>
                <p className="text-gray-600 text-sm  line-clamp-2">
                  {data.description}
                </p>
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between items-center px-4 py-3 bg-slate-50 rounded-b-2xl">
              <span className="text-xl font-bold text-blue-600">
                ₹{data.price.toLocaleString()}
              </span>
              <Button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="Feature text-2xl md:text-3xl font-extrabold font-serif p-6 ">
        Most Sell-
      </div>
      <div className="flex gap-4 overflow-x-auto hide-scrollbar p-6">
        {Cards.map((data) => (
          <Card className="w-80 rounded-2xl shadow-lg" key={data.id}>
            <CardHeader>
              <img
                src={data.image}
                alt="Wireless Earbuds"
                className="w-full h-48 object-contain rounded-t-2xl bg-slate-100"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-bold line-clamp-1">
                {data.name}
              </CardTitle>
              <CardDescription>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {data.description}
                </p>
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between items-center px-4 py-3 bg-slate-50 rounded-b-2xl">
              <span className="text-xl font-bold text-blue-600">
                ₹{data.price.toLocaleString()}
              </span>
              <Button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default myCard;
