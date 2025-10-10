import React, { Suspense, useEffect, useState } from "react";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";

const Cards = ({ cards }) => {
  const [loads, setLoads] = useState(true);
  useEffect(() => {
    setLoads(true);
    const timeSetter = setTimeout(() => {
      setLoads(false);
    }, 400);
    return () => clearTimeout(timeSetter);
  }, [cards]);
  return (
    <div>
      <div className="pb-7">
        <h2 className="text-center text-2xl font-bold">Trending Apps</h2>
        <p className="text-gray-500 text-center mt-2 mb-7">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div>
          {loads ? (
            <Spinner></Spinner>
          ) : (
            <Suspense>
              <div className="grid gird-cols-1 md:grid-cols-3 lg:grid-cols-4 pb-13 mx-auto max-w-7xl gap-4">
                {cards.map((card) => (
                  <Card key={card.id} card={card}></Card>
                ))}
              </div>
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
