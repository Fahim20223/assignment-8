import React, { Suspense, useEffect, useState } from "react";
import Card2 from "../Card2/Card2";
import Spinner from "../Spinner/Spinner";

const Cards2 = ({ apps }) => {
  const [loading, setLoading] = useState(true);

  // When apps come from parent (fetched), stop showing spinner
  useEffect(() => {
    // When data changes, show spinner briefly
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [apps]);

  return (
    <div>
      <Suspense>
        {loading ? (
          <Spinner />
        ) : (
          <div className="grid gird-cols-1 md:grid-cols-3 lg:grid-cols-4 pb-13 mx-auto max-w-7xl gap-4">
            {apps.map((app) => (
              <Card2 key={app.id} app={app}></Card2>
            ))}
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default Cards2;
