import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApps } from "../Utilities/addTODB";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";

const InstalledApps = () => {
  const [appList, setAppList] = useState([]);
  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    const storedAppsData = getStoredApps();
    // console.log(storedAppsData);
    const convertedStoredApps = storedAppsData.map((id) => parseInt(id));
    // console.log(convertedStoredApps);
    const myAppList = data.filter((app) =>
      convertedStoredApps.includes(app.id)
    );
    setAppList(myAppList);
    // console.log(myAppList);
  }, [data]);
  const [sortOrder, setSortOrder] = useState("");
  const handleSort = (type) => {
    setSortOrder(type);
    if (type === "downloads asc") {
      const sortedByPage = [...appList].sort(
        (a, b) => a.downloads - b.downloads
      );
      setAppList(sortedByPage);
    }
    if (type === "downloads dsc") {
      const sortedByRatings = [...appList].sort(
        (a, b) => b.downloads - a.downloads
      );
      setAppList(sortedByRatings);
    }
  };
  const handleUninstallBtn = (id) => {
    const existingList = JSON.parse(localStorage.getItem("appList"));

    const updatedStored = existingList.filter(
      (stored) => parseInt(stored) !== id
    );

    const updatedAppList = appList.filter((app) => app.id !== id);

    setAppList(updatedAppList);
    localStorage.setItem("appList", JSON.stringify(updatedStored));

    toast.success(`App uninstalled!`);

    // toast.success(appList.title);
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const timerSet = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => clearTimeout(timerSet);
  }, [appList]);

  return (
    <div>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="pb-8 bg-[#F5F5F5] min-h-[60vh]">
          <div className="pt-7 pb-11">
            <h1 className="text-center text-2xl font-bold">
              Your Installed Apps
            </h1>
            <p className="text-gray-500 text-center pt-3">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div className="mx-auto max-w-7xl">
            <div className="flex justify-between">
              <h1 className="text-2xl font-semibold pb-7">
                {appList.length} Apps Found
              </h1>
              <select
                className="select"
                defaultValue=""
                onChange={(e) => handleSort(e.target.value)}
              >
                <option value="" disabled>
                  Sort by downloads
                </option>
                <option value="downloads asc">Low to high</option>
                <option value="downloads dsc">High to low</option>
              </select>
            </div>
            <div className="space-y-3 w-full">
              {appList.map((app) => (
                <div className="">
                  <div
                    key={app.id}
                    className="shadow-md p-4 rounded-lg bg-white flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={app.image}
                        alt={app.title}
                        className="rounded-xl w-20 h-20 object-cover"
                      />
                      <div>
                        <h1 className="text-lg font-semibold">{app.title}</h1>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-green-400 flex items-center gap-1 mr-2">
                            <img className="w-5" src={downloadImg} alt="" />
                            {app.downloads}B
                          </span>
                          <span className="text-orange-400 flex items-center gap-1">
                            <img className="w-4" src={ratingImg} alt="" />
                            {app.ratingAvg}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleUninstallBtn(app.id)}
                      className="text-white font-semibold bg-[#00d390] px-4 py-2 rounded-lg btn"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstalledApps;
