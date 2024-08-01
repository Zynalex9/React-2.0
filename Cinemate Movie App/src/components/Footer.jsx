import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            Cinemate™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://www.linkedin.com/in/zain-ali-webdev/" target="blank" className="hover:underline me-4 md:me-6">
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Zynalex9"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Github
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100079330606229" target="_blank" className="hover:underline me-4 md:me-6">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/zayn.__.2/" target="_blank" className="hover:underline">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
