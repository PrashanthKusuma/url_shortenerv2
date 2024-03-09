import React from "react";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

const RedirectComponent = () => {
  const { shortenUrl } = useParams(); // useParams hook to get parameters from URL

  // Step 2: Search local storage for the corresponding full URL
  const urls = JSON.parse(localStorage.getItem("urls")) || [];
  const matchingUrls = urls.filter((url) => url.shortenUrl === shortenUrl);

  if (matchingUrls.length > 0) {
    // Step 3: Redirect to the full URL
    window.location.href = matchingUrls[0].url;
  } else {
    // Handle case when shortened URL is not found in local storage
    console.log("Shortened URL not found");
  }

  return <div>Redirecting...</div>;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:shortenUrl" element={<RedirectComponent/>} />
        {/* Add other routes if needed */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
