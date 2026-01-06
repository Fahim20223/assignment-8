# 📱 Most Popular Apps

🔗 **Live Demo:** https://most-popular-apps.netlify.app/

A modern, responsive App Store–style web application that showcases popular apps, allows users to view details, search, sort, install apps, and manage their installed applications using localStorage.

---

## 🧩 Project Description

**Most Popular Apps** is a frontend web application inspired by modern app stores.  
Users can explore top apps, view detailed information, install apps, and manage their installations — all with smooth navigation, loading animations, and responsive UI.

The project follows proper component structure, routing, state management, and clean UI/UX principles as per the given Figma and requirements.

---

## 🚀 Features

### 🧱 Layout & General

- Fully responsive design for **mobile, tablet, and desktop**
- Clean header with:
  - Logo (redirects to Home)
  - Navigation links (Home, Apps, Installation) with active route indication
  - Contribution button linking to GitHub profile
- Custom designed footer
- Custom error page for invalid routes
- Loading animation during:
  - Page navigation
  - Search operation

---

### 🏠 Home Page

- Banner section with:
  - Center-aligned heading & description
  - App Store & Play Store buttons
- Top Apps section:
  - Displays 8 apps in a 4-column grid
  - App card shows image, title, downloads & rating
  - Click to navigate to App Details page
  - “Show All” button redirects to All Apps page

---

### 📱 All Apps Page

- Title & subtitle section
- App statistics with total app count
- Live search functionality:
  - Case-insensitive
  - Filters by app title
  - Shows “No App Found” if no result
- Sort apps by downloads:
  - High → Low
  - Low → High
- Displays all apps from JSON data

---

### 📊 App Details Page

- App information section:
  - Image, title, rating, downloads, reviews
- Install button:
  - Saves app to localStorage
  - Becomes disabled after installation
  - Shows success toast message
- Review chart:
  - Built using **Recharts**
  - Fully responsive
- App description section
- Relevant “App Not Found” message if invalid ID

---

### 💾 My Installation Page

- Displays all installed apps from localStorage
- Uninstall functionality:
  - Removes app from UI and localStorage
  - Shows toast notification
- Persistent installation state across reloads

---

## 🗂️ App Data Structure

```js
{
  image: string;
  title: string;
  companyName: string;
  id: number;
  description: string;
  size: number;
  reviews: number;
  ratingAvg: number;
  downloads: number;
  ratings: [
    { name: "1 star"; count: number },
    { name: "2 star"; count: number },
    { name: "3 star"; count: number },
    { name: "4 star"; count: number },
    { name: "5 star"; count: number }
  ];
}
```
