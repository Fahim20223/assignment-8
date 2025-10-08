import React, { Suspense } from "react";
import Card2 from "../Card2/Card2";

const Cards2 = ({ apps }) => {
  return (
    <div>
      <Suspense>
        <div className="grid gird-cols-1 md:grid-cols-3 lg:grid-cols-4 pb-13 mx-auto max-w-7xl gap-4">
          {apps.map((app) => (
            <Card2 key={app.id} app={app}></Card2>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Cards2;
