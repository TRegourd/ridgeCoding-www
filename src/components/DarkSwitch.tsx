import React, { useEffect } from "react";

function DarkSwitch() {
  function getDefaultTheme() {
    const userTheme = localStorage.getItem("ridgecodingUserTheme");
    const htmlTag = document.getElementsByTagName("html")[0];

    if (userTheme && htmlTag) {
      htmlTag.className = userTheme;
    } else {
      if (
        htmlTag &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        htmlTag.className = "dark";
      }
    }
  }

  function changeTheme(e: any) {
    e.preventDefault();
    const htmlTag = document.getElementsByTagName("html")[0];

    if (htmlTag.className.includes("dark")) {
      htmlTag.className = "light";
      localStorage.setItem("ridgecodingUserTheme", "light");
    } else {
      htmlTag.className = "dark";
      localStorage.setItem("ridgecodingUserTheme", "dark");
    }
  }

  useEffect(() => {
    const chk = document.getElementById("chk");
    chk?.addEventListener("change", changeTheme);
    getDefaultTheme();
  }, []);

  return (
    <div className="absolute left-5 bottom-10 z-999 sm:bottom-2 ">
      <span className="relative inline-block">
        <input
          type="checkbox"
          className="checkbox absolute opacity-0"
          id="chk"
          aria-label="darkSwitch"
        />
        <label
          className="label flex h-8 w-14 cursor-pointer items-center justify-between rounded-full bg-slate-700 p-1 shadow dark:bg-white dark:shadow-gray-700"
          htmlFor="chk"
        >
          <i className="mdi mdi-moon-waning-crescent text-[20px] text-warning-500"></i>
          <i className="mdi mdi-weather-sunny text-[20px] text-warning-500"></i>
          <span className="ball absolute top-[2px] left-[2px] h-7 w-7 rounded-full bg-white dark:bg-slate-900"></span>
        </label>
      </span>
    </div>
  );
}

export default DarkSwitch;
