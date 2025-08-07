import ProjectDetail from "../../../components/ProjectDetail";
import React from "react";
import Link from "next/link";

const NoteAppPage = () => {
  return (
    <main>
      <nav className="fixed top-0 w-full z-40 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold gradient-text">
              DT
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </nav>
      <ProjectDetail />
    </main>
  );
};

export default NoteAppPage;
