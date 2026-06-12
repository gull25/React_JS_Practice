import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//Animate on Scroll: Used for animations while scrolling.
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({ duration: 800 });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);




// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";

// import { Provider } from "react-redux";
// import store from "./store"; // your store file

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </StrictMode>,
// );

//This is for Querry part only
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient();

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <QueryClientProvider client={queryClient}>
//     <App />
//   </QueryClientProvider>
// );
