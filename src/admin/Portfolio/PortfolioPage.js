import React from "react";
import "../../styles/adminApp.css";
import Carousel from "./Carousel";
const PortfolioPage = () => {
  return (
    <div>
      <main className="main-content w-full px-[var(--margin-x)] pb-8">
        <div class="flex items-center justify-between space-x-2 py-5">
          <h3 class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
            Portfolio
          </h3>
        </div>
        <button class="btn space-x-2 bg-primary font-medium text-white shadow-lg shadow-primary/50 hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:shadow-accent/50 dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-indigo-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span> New Project </span>
        </button>
        <Carousel />
      </main>
    </div>
  );
};

export default PortfolioPage;
