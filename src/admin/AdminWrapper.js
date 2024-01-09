import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Extras/Footer";
import "../styles/adminApp.css";
const AdminWrapper = () => {
  return (
    <body className="body header-fixed counter-scroll">
      <div id="wrapper">
        <div id="page" className="clearfix">
          <Navbar />
          <main className="main-content w-full px-[var(--margin-x)] pb-8">
            <div className="mt-12 text-center">
              <div className="avatar h-16 w-16">
                <div className="is-initial rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white">
                  <i className="fa-solid fa-shapes text-2xl"></i>
                </div>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-slate-600 dark:text-navy-100">
                Leo Digital Studio Admin Panel
              </h3>
            </div>
            <div className="mx-auto mt-8 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
              <div className="card p-4 sm:p-5">
                <div className="avatar h-12 w-12">
                  <div className="is-initial rounded-full bg-info text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-5 pb-1">
                  <a
                    href="/admin/landing-pages/"
                    className="border-b border-dashed border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
                  >
                    Landing Pages
                  </a>
                </div>
              </div>
              <div className="card p-4 sm:p-5">
                <div className="avatar h-12 w-12">
                  <div className="is-initial rounded-full bg-warning text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-5 pb-1">
                  <a
                    href="/admin/blogs/"
                    className="border-b border-dashed border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
                  >
                    Blogs
                  </a>
                </div>
              </div>
              <div className="card p-4 sm:p-5">
                <div className="avatar h-12 w-12">
                  <div className="is-initial rounded-full bg-secondary text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-5 pb-1">
                  <a
                    href="/admin/portfolio"
                    className="border-b border-dashed border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
                  >
                    Portfolio
                  </a>
                </div>
              </div>
              <div className="card p-4 sm:p-5">
                <div className="avatar h-12 w-12">
                  <div className="is-initial rounded-full bg-primary text-white dark:bg-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        d="M12.5293 18L20.9999 8.40002"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3 13.2L7.23529 18L17.8235 6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="mt-5 pb-1">
                    <a
                      href="/admin/team-access/"
                      className="border-b border-dashed border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
                    >
                      Team
                    </a>
                  </div>
                </div>
              </div>

              <div className="card p-4 sm:p-5">
                <div className="avatar h-12 w-12">
                  <div className="is-initial rounded-full bg-primary text-white dark:bg-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-5 pb-1">
                  <a
                    href="/admin/mails"
                    className="border-b border-dashed border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
                  >
                    Mail System
                  </a>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>

      <a id="scroll-top" className="button-go"></a>
    </body>
  );
};

export default AdminWrapper;
