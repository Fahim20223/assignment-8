import { IoEllipseSharp } from "react-icons/io5";

const getStoredApps = () => {
  const storedAppsSTR = localStorage.getItem("appList");
  if (storedAppsSTR) {
    const storedAppsData = JSON.parse(storedAppsSTR);
    return storedAppsData;
  } else {
    return [];
  }
};

const addTOStoredDB = (id) => {
  const storedAppsData = getStoredApps();
  if (storedAppsData.includes(id)) {
    alert("Bhai ei id already exist");
  } else {
    storedAppsData.push(id);
    const data = JSON.stringify(storedAppsData);
    localStorage.setItem("appList", data);
    console.log(storedAppsData);
  }
};

// const removeToStoreDB = (id) => {
//   const storedAppsData = getStoredApps();
//   if (!storedAppsData.includes(id)) {
//     alert("Bhai ei app ta nai ekhane");
//   } else {
//     const filtered = storedAppsData.filter((appsId) => appsId !== id);
//     const data = JSON.stringify(filtered);
//     localStorage.setItem("appList", data);
//     console.log(filtered);
//   }
// };

export { addTOStoredDB, getStoredApps };
