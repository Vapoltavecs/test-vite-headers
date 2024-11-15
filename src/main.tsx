import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import { pathToRegexp } from "path-to-regexp";

// console.log(pathToRegexp("/:foo.data.gz"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);


// {
//   "headers": [
//     {
//       "source": "^/Build/([^/]+?).gz$",
//       "headers": [
//         {
//           "key": "Content-Encoding",
//           "value": "gzip"
//         },
//         {
//           "key": "Content-Type",
//           "value": "application/gzip"
//         }
//       ]
//     }
//   ]
// }
