import React from "react";
import "../../styles/adminApp.css";
const BlogCarousel = () => {
  return (
    <div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
        <div class="card lg:flex-row">
          <img
            class="h-48 w-full shrink-0 rounded-t-lg bg-cover bg-center object-cover object-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
            src="images/object/object-2.jpg"
            alt="image"
          />
          <div class="flex w-full grow flex-col px-4 py-3 sm:px-5">
            <div class="flex items-center justify-between">
              <a class="text-xs+ text-info" href="#">
                Frameworks
              </a>
              <div class="-mr-1.5 flex space-x-1">
                <button class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4.5 w-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>

                <div
                  x-data="usePopper({placement:'bottom-end',offset:4})"
                  class="inline-flex"
                >
                  <button
                    x-ref="popperRef"
                    class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4.5 w-4.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>

                  <div x-ref="popperRoot" class="popper-root">
                    <div class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                      <ul>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Another Action
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Something else
                          </a>
                        </li>
                      </ul>
                      <div class="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                      <ul>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Separated Link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a
                href="#"
                class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                What is Tailwind CSS?
              </a>
            </div>
            <p class="mt-1 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
              provident quasi recusandae repudiandae rerum temporibus!
            </p>
            <div class="grow">
              <div class="mt-2 flex items-center text-xs">
                <a
                  href="#"
                  class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
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
                <div class="mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"></div>
                <span class="shrink-0 text-slate-400 dark:text-navy-300">
                  June 23, 2021
                </span>
              </div>
            </div>
            <div class="mt-1 flex justify-end">
              <a
                href="pages-blog-details.html"
                class="btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
              >
                READ ARTICLE
              </a>
            </div>
          </div>
        </div>
        <div class="card lg:flex-row">
          <img
            class="h-48 w-full shrink-0 rounded-t-lg bg-cover bg-center object-cover object-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
            src="images/object/object-3.jpg"
            alt="image"
          />
          <div class="flex w-full grow flex-col px-4 py-3 sm:px-5">
            <div class="flex items-center justify-between">
              <a class="text-xs+ text-info" href="#">
                Frameworks
              </a>
              <div class="-mr-1.5 flex space-x-1">
                <button class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4.5 w-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>

                <div
                  x-data="usePopper({placement:'bottom-end',offset:4})"
                  class="inline-flex"
                >
                  <button
                    x-ref="popperRef"
                    class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4.5 w-4.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>

                  <div x-ref="popperRoot" class="popper-root">
                    <div class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                      <ul>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Another Action
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Something else
                          </a>
                        </li>
                      </ul>
                      <div class="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                      <ul>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Separated Link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a
                href="#"
                class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                Tailwind CSS Card Example
              </a>
            </div>
            <p class="mt-1 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              repellat nisi corrupti. Lorem, ipsum.
            </p>
            <div class="grow">
              <div class="mt-2 flex items-center text-xs">
                <a
                  href="#"
                  class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
                >
                  <div class="avatar h-6 w-6">
                    <img
                      class="rounded-full"
                      src="images/avatar/avatar-2.jpg"
                      alt="avatar"
                    />
                  </div>
                  <span class="line-clamp-1">Konnor Guzman </span>
                </a>
                <div class="mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"></div>
                <span class="shrink-0 text-slate-400 dark:text-navy-300">
                  May 25, 2021
                </span>
              </div>
            </div>
            <div class="mt-1 flex justify-end">
              <a
                href="pages-blog-details.html"
                class="btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
              >
                READ ARTICLE
              </a>
            </div>
          </div>
        </div>
        <div class="card lg:flex-row">
          <img
            class="h-48 w-full shrink-0 rounded-t-lg bg-cover bg-center object-cover object-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
            src="images/object/object-4.jpg"
            alt="image"
          />
          <div class="flex w-full grow flex-col px-4 py-3 sm:px-5">
            <div class="flex items-center justify-between">
              <a class="text-xs+ text-info" href="#">
                Programming Language
              </a>
              <div class="-mr-1.5 flex space-x-1">
                <button class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4.5 w-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>

                <div
                  x-data="usePopper({placement:'bottom-end',offset:4})"
                  class="inline-flex"
                >
                  <button
                    x-ref="popperRef"
                    class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4.5 w-4.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>

                  <div x-ref="popperRoot" class="popper-root">
                    <div class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                      <ul>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Another Action
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Something else
                          </a>
                        </li>
                      </ul>
                      <div class="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                      <ul>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Separated Link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a
                href="#"
                class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                What is PHP?
              </a>
            </div>
            <p class="mt-1 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
              provident quasi recusandae repudiandae rerum temporibus!
            </p>
            <div class="grow">
              <div class="mt-2 flex items-center text-xs">
                <a
                  href="#"
                  class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
                >
                  <div class="avatar h-6 w-6">
                    <img
                      class="rounded-full"
                      src="images/avatar/avatar-1.jpg"
                      alt="avatar"
                    />
                  </div>
                  <span class="line-clamp-1">Travis Fuller </span>
                </a>
                <div class="mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"></div>
                <span class="shrink-0 text-slate-400 dark:text-navy-300">
                  March 14, 2022
                </span>
              </div>
            </div>
            <div class="mt-1 flex justify-end">
              <a
                href="pages-blog-details.html"
                class="btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
              >
                READ ARTICLE
              </a>
            </div>
          </div>
        </div>
        <div class="card lg:flex-row">
          <img
            class="h-48 w-full shrink-0 rounded-t-lg bg-cover bg-center object-cover object-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
            src="images/object/object-7.jpg"
            alt="image"
          />
          <div class="flex w-full grow flex-col px-4 py-3 sm:px-5">
            <div class="flex items-center justify-between">
              <a class="text-xs+ text-info" href="#">
                UI/UX
              </a>
              <div class="-mr-1.5 flex space-x-1">
                <button class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4.5 w-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>

                <div
                  x-data="usePopper({placement:'bottom-end',offset:4})"
                  class="inline-flex"
                >
                  <button
                    x-ref="popperRef"
                    class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4.5 w-4.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>

                  <div x-ref="popperRoot" class="popper-root">
                    <div class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                      <ul>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Another Action
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Something else
                          </a>
                        </li>
                      </ul>
                      <div class="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                      <ul>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Separated Link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a
                href="#"
                class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                Top Design Systems
              </a>
            </div>
            <p class="mt-1 line-clamp-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              quibusdam, ipsam in eveniet quod voluptatum!
            </p>
            <div class="grow">
              <div class="mt-2 flex items-center text-xs">
                <a
                  href="#"
                  class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
                >
                  <div class="avatar h-6 w-6">
                    <img
                      class="rounded-full"
                      src="images/avatar/avatar-7.jpg"
                      alt="avatar"
                    />
                  </div>
                  <span class="line-clamp-1">Alfredo Elliott </span>
                </a>
                <div class="mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"></div>
                <span class="shrink-0 text-slate-400 dark:text-navy-300">
                  March 14, 2022
                </span>
              </div>
            </div>
            <div class="mt-1 flex justify-end">
              <a
                href="pages-blog-details.html"
                class="btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
              >
                READ ARTICLE
              </a>
            </div>
          </div>
        </div>
        <div class="card lg:flex-row">
          <img
            class="h-48 w-full shrink-0 rounded-t-lg bg-cover bg-center object-cover object-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
            src="images/object/object-5.jpg"
            alt="image"
          />
          <div class="flex w-full grow flex-col px-4 py-3 sm:px-5">
            <div class="flex items-center justify-between">
              <a class="text-xs+ text-info" href="#">
                UI/UX{" "}
              </a>
              <div class="-mr-1.5 flex space-x-1">
                <button class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4.5 w-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>

                <div
                  x-data="usePopper({placement:'bottom-end',offset:4})"
                  class="inline-flex"
                >
                  <button
                    x-ref="popperRef"
                    class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4.5 w-4.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>

                  <div x-ref="popperRoot" class="popper-root">
                    <div class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                      <ul>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Another Action
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Something else
                          </a>
                        </li>
                      </ul>
                      <div class="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                      <ul>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Separated Link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a
                href="#"
                class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                313 Pattern and Color ideas
              </a>
            </div>
            <p class="mt-1 line-clamp-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates impedit odio consectetur! Voluptatem ipsa nulla
              excepturi voluptatibus.
            </p>
            <div class="grow">
              <div class="mt-2 flex items-center text-xs">
                <a
                  href="#"
                  class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
                >
                  <div class="avatar h-6 w-6">
                    <img
                      class="rounded-full"
                      src="images/avatar/avatar-8.jpg"
                      alt="avatar"
                    />
                  </div>
                  <span class="line-clamp-1">Derrick Simmons </span>
                </a>
                <div class="mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"></div>
                <span class="shrink-0 text-slate-400 dark:text-navy-300">
                  December 27, 2021
                </span>
              </div>
            </div>
            <div class="mt-1 flex justify-end">
              <a
                href="pages-blog-details.html"
                class="btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
              >
                READ ARTICLE
              </a>
            </div>
          </div>
        </div>
        <div class="card lg:flex-row">
          <img
            class="h-48 w-full shrink-0 rounded-t-lg bg-cover bg-center object-cover object-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
            src="images/object/object-6.jpg"
            alt="image"
          />
          <div class="flex w-full grow flex-col px-4 py-3 sm:px-5">
            <div class="flex items-center justify-between">
              <a class="text-xs+ text-info" href="#">
                Programming Language{" "}
              </a>
              <div class="-mr-1.5 flex space-x-1">
                <button class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4.5 w-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>

                <div
                  x-data="usePopper({placement:'bottom-end',offset:4})"
                  class="inline-flex"
                >
                  <button
                    x-ref="popperRef"
                    class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4.5 w-4.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>

                  <div x-ref="popperRoot" class="popper-root">
                    <div class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                      <ul>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Another Action
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Something else
                          </a>
                        </li>
                      </ul>
                      <div class="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                      <ul>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Separated Link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a
                href="#"
                class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                NodeJS Design Patterns
              </a>
            </div>
            <p class="mt-1 line-clamp-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
              rerum aliquam maiores dolorum itaque?
            </p>
            <div class="grow">
              <div class="mt-2 flex items-center text-xs">
                <a
                  href="#"
                  class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
                >
                  <div class="avatar h-6 w-6">
                    <img
                      class="rounded-full"
                      src="images/avatar/avatar-9.jpg"
                      alt="avatar"
                    />
                  </div>
                  <span class="line-clamp-1">Katrina West </span>
                </a>
                <div class="mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"></div>
                <span class="shrink-0 text-slate-400 dark:text-navy-300">
                  November 9, 2021
                </span>
              </div>
            </div>
            <div class="mt-1 flex justify-end">
              <a
                href="pages-blog-details.html"
                class="btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
              >
                READ ARTICLE
              </a>
            </div>
          </div>
        </div>
        <div class="card lg:flex-row">
          <img
            class="h-48 w-full shrink-0 rounded-t-lg bg-cover bg-center object-cover object-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
            src="images/object/object-2.jpg"
            alt="image"
          />
          <div class="flex w-full grow flex-col px-4 py-3 sm:px-5">
            <div class="flex items-center justify-between">
              <a class="text-xs+ text-info" href="#">
                Frameworks
              </a>
              <div class="-mr-1.5 flex space-x-1">
                <button class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4.5 w-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>

                <div
                  x-data="usePopper({placement:'bottom-end',offset:4})"
                  class="inline-flex"
                >
                  <button
                    x-ref="popperRef"
                    class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4.5 w-4.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>

                  <div x-ref="popperRoot" class="popper-root">
                    <div class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                      <ul>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Another Action
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Something else
                          </a>
                        </li>
                      </ul>
                      <div class="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                      <ul>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Separated Link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a
                href="#"
                class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                What is Tailwind CSS?
              </a>
            </div>
            <p class="mt-1 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
              provident quasi recusandae repudiandae rerum temporibus!
            </p>
            <div class="grow">
              <div class="mt-2 flex items-center text-xs">
                <a
                  href="#"
                  class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
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
                <div class="mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"></div>
                <span class="shrink-0 text-slate-400 dark:text-navy-300">
                  June 23, 2021
                </span>
              </div>
            </div>
            <div class="mt-1 flex justify-end">
              <a
                href="pages-blog-details.html"
                class="btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
              >
                READ ARTICLE
              </a>
            </div>
          </div>
        </div>
        <div class="card lg:flex-row">
          <img
            class="h-48 w-full shrink-0 rounded-t-lg bg-cover bg-center object-cover object-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
            src="images/object/object-3.jpg"
            alt="image"
          />
          <div class="flex w-full grow flex-col px-4 py-3 sm:px-5">
            <div class="flex items-center justify-between">
              <a class="text-xs+ text-info" href="#">
                Frameworks
              </a>
              <div class="-mr-1.5 flex space-x-1">
                <button class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4.5 w-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>

                <div
                  x-data="usePopper({placement:'bottom-end',offset:4})"
                  class="inline-flex"
                >
                  <button
                    x-ref="popperRef"
                    class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4.5 w-4.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>

                  <div x-ref="popperRoot" class="popper-root">
                    <div class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                      <ul>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Another Action
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Something else
                          </a>
                        </li>
                      </ul>
                      <div class="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                      <ul>
                        <li>
                          <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Separated Link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a
                href="#"
                class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                Tailwind CSS Card Example
              </a>
            </div>
            <p class="mt-1 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              repellat nisi corrupti. Lorem, ipsum.
            </p>
            <div class="grow">
              <div class="mt-2 flex items-center text-xs">
                <a
                  href="#"
                  class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
                >
                  <div class="avatar h-6 w-6">
                    <img
                      class="rounded-full"
                      src="images/avatar/avatar-2.jpg"
                      alt="avatar"
                    />
                  </div>
                  <span class="line-clamp-1">Konnor Guzman </span>
                </a>
                <div class="mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"></div>
                <span class="shrink-0 text-slate-400 dark:text-navy-300">
                  May 25, 2021
                </span>
              </div>
            </div>
            <div class="mt-1 flex justify-end">
              <a
                href="pages-blog-details.html"
                class="btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
              >
                READ ARTICLE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;
