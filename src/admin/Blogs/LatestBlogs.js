import React from "react";
import "../../styles/adminApp.css";
const LatestBlogs = () => {
  return (
    <div class="mt-4 px-[var(--margin-x)] transition-all duration-[.25s] sm:mt-5 lg:mt-6">
      <div class="flex h-8 items-center justify-between">
        <h2 class="text-base font-medium tracking-wide text-slate-700 dark:text-navy-100">
          Latest Posts
        </h2>
        <a
          href="#"
          class="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
        >
          View All
        </a>
      </div>
      <div class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
        <div class="flex flex-col">
          <img
            class="h-44 w-full rounded-2xl object-cover object-center"
            src="images/object/object-2.jpg"
            alt="image"
          />
          <div class="card -mt-8 grow rounded-2xl p-4">
            <div>
              <a
                href="#"
                class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                What is Tailwind CSS?
              </a>
            </div>
            <p class="mt-2 grow line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              distinctio dolorum harum.
            </p>
            <div class="mt-4 flex items-center justify-between">
              <a
                href="#"
                class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
              >
                <div class="avatar h-6 w-6">
                  <img
                    class="rounded-full"
                    src="images/avatar/avatar-10.jpg"
                    alt="avatar"
                  />
                </div>
                <span class="line-clamp-1">John Doe</span>
              </a>
              <p class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span class="text-xs">25 May, 2022</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <img
            class="h-44 w-full rounded-2xl object-cover object-center"
            src="images/object/object-3.jpg"
            alt="image"
          />
          <div class="card -mt-8 grow rounded-2xl p-4">
            <div>
              <a
                href="#"
                class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                Tailwind CSS Card Example
              </a>
            </div>
            <p class="mt-2 grow line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor on the
              sit.
            </p>
            <div class="mt-4 flex items-center justify-between">
              <a
                href="#"
                class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
              >
                <div class="avatar h-6 w-6">
                  <img
                    class="rounded-full"
                    src="images/avatar/avatar-20.jpg"
                    alt="avatar"
                  />
                </div>
                <span class="line-clamp-1">Konnor Guzman </span>
              </a>
              <p class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span class="text-xs">30 May, 2022</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <img
            class="h-44 w-full rounded-2xl object-cover object-center"
            src="images/object/object-4.jpg"
            alt="image"
          />
          <div class="card -mt-8 grow rounded-2xl p-4">
            <div>
              <a
                href="#"
                class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                What is PHP?
              </a>
            </div>
            <p class="mt-2 grow line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor on the
              sit.
            </p>
            <div class="mt-4 flex items-center justify-between">
              <a
                href="#"
                class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
              >
                <div class="avatar h-6 w-6">
                  <img
                    class="rounded-full"
                    src="images/avatar/avatar-19.jpg"
                    alt="avatar"
                  />
                </div>
                <span class="line-clamp-1">Travis Fuller </span>
              </a>
              <p class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span class="text-xs">10 June, 2022</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <img
            class="h-44 w-full rounded-2xl object-cover object-center"
            src="images/object/object-5.jpg"
            alt="image"
          />
          <div class="card -mt-8 grow rounded-2xl p-4">
            <div>
              <a
                href="#"
                class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                Top Design Systems
              </a>
            </div>
            <p class="mt-2 grow line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto assumenda.
            </p>
            <div class="mt-4 flex items-center justify-between">
              <a
                href="#"
                class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
              >
                <div class="avatar h-6 w-6">
                  <img
                    class="rounded-full"
                    src="images/avatar/avatar-18.jpg"
                    alt="avatar"
                  />
                </div>
                <span class="line-clamp-1">Alfredo Elliott </span>
              </a>
              <p class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span class="text-xs">19 June, 2022</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <img
            class="h-44 w-full rounded-2xl object-cover object-center"
            src="images/object/object-9.jpg"
            alt="image"
          />
          <div class="card -mt-8 grow rounded-2xl p-4">
            <div>
              <a
                href="#"
                class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                How Did We Get Here?
              </a>
            </div>
            <p class="mt-2 grow line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div class="mt-4 flex items-center justify-between">
              <a
                href="#"
                class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
              >
                <div class="avatar h-6 w-6">
                  <img
                    class="rounded-full"
                    src="images/avatar/avatar-11.jpg"
                    alt="avatar"
                  />
                </div>
                <span class="line-clamp-1">Katrina West </span>
              </a>
              <p class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span class="text-xs">26 June, 2022</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <img
            class="h-44 w-full rounded-2xl object-cover object-center"
            src="images/object/object-8.jpg"
            alt="image"
          />
          <div class="card -mt-8 grow rounded-2xl p-4">
            <div>
              <a
                href="#"
                class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                NodeJS Design Patterns
              </a>
            </div>
            <p class="mt-2 grow line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div class="mt-4 flex items-center justify-between">
              <a
                href="#"
                class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
              >
                <div class="avatar h-6 w-6">
                  <img
                    class="rounded-full"
                    src="images/avatar/avatar-16.jpg"
                    alt="avatar"
                  />
                </div>
                <span class="line-clamp-1">Henry Curtis </span>
              </a>
              <p class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span class="text-xs">12 June, 2022</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <img
            class="h-44 w-full rounded-2xl object-cover object-center"
            src="images/object/object-7.jpg"
            alt="image"
          />
          <div class="card -mt-8 grow rounded-2xl p-4">
            <div>
              <a
                href="#"
                class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                313 Pattern and Color ideas
              </a>
            </div>
            <p class="mt-2 grow line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div class="mt-4 flex items-center justify-between">
              <a
                href="#"
                class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
              >
                <div class="avatar h-6 w-6">
                  <img
                    class="rounded-full"
                    src="images/avatar/avatar-7.jpg"
                    alt="avatar"
                  />
                </div>
                <span class="line-clamp-1">Samantha Shelton </span>
              </a>
              <p class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span class="text-xs">30 June, 2022</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <img
            class="h-44 w-full rounded-2xl object-cover object-center"
            src="images/object/object-6.jpg"
            alt="image"
          />
          <div class="card -mt-8 grow rounded-2xl p-4">
            <div>
              <a
                href="#"
                class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                25 Surprising Facts About Chair
              </a>
            </div>
            <p class="mt-2 grow line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div class="mt-4 flex items-center justify-between">
              <a
                href="#"
                class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
              >
                <div class="avatar h-6 w-6">
                  <img
                    class="rounded-full"
                    src="images/avatar/avatar-1.jpg"
                    alt="avatar"
                  />
                </div>
                <span class="line-clamp-1">Konnor Guzman </span>
              </a>
              <p class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span class="text-xs">03 July, 2022</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
