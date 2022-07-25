import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import {
  Link,
  Trans,
  useI18next,
  useTranslation,
} from "gatsby-plugin-react-i18next";

const Navbar = () => {
  const { languages, originalPath } = useI18next();
  const { t } = useTranslation();

  function toggleMenu() {
    document.getElementById("isToggle")?.classList.toggle("open");
    var isOpen = document.getElementById("navigation");

    if (isOpen?.style.display === "block") {
      isOpen.style.display = "none";
    } else if (isOpen && isOpen?.style.display !== "block") {
      isOpen.style.display = "block";
    }
  }

  function windowScroll() {
    const navbar = document.getElementById("topnav");
    if (navbar != null) {
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        navbar.classList.add("nav-sticky");
      } else {
        navbar.classList.remove("nav-sticky");
      }
    }
  }

  function openSubmenu(e: BaseSyntheticEvent) {
    let el = document.getElementById(`${e.target.id}_submenu`);
    el?.classList.toggle("open");
  }

  useEffect(() => {
    window.addEventListener("scroll", (ev) => {
      ev.preventDefault();
      windowScroll();
    });
  }, []);

  return (
    <header>
      <nav id="topnav" className="defaultscroll  is-sticky ">
        <div className="container ml-0">
          <a className="logo" href="/" aria-label="ridgeCoding-Logo">
            <>
              <img
                src={`/assets/logos/ridge-full-light.png`}
                className="inline-block  h-full w-full dark:hidden"
                alt=""
              />
              <img
                src={`/assets/logos/ridge-full-dark.png`}
                className="hidden h-full w-full dark:inline-block"
                alt=""
              />
            </>
          </a>

          <div className="menu-extras">
            <div className="menu-item">
              <button
                className="navbar-toggle"
                id="isToggle"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
            </div>
          </div>

          <div id="navigation">
            <ul className={`navigation-menu justify-end `}>
              <li>
                <Link to="/" className="sub-menu-item">
                  <Trans>NAV.about</Trans>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="sub-menu-item">
                  <Trans>NAV.contact</Trans>
                </Link>
              </li>

              <li
                className="has-submenu parent-parent-menu-item cursor-pointer"
                onClick={openSubmenu}
              >
                <a href="#" id="lang" className="item-center">
                  <img
                    src={`/assets/logos/${
                      t("NAV.lang") === "EN" ? "en" : "fr"
                    }.svg`}
                    height="20"
                    width="20"
                    alt={t("NAV.lang")}
                  ></img>
                </a>
                <span className="menu-arrow"></span>
                <ul id="lang_submenu" className="submenu">
                  <li>
                    <ul>
                      {languages.map((lng) => (
                        <li key={lng}>
                          <Link
                            to={originalPath}
                            language={lng}
                            className="sub-menu-item flex flex-row items-center gap-1"
                          >
                            <img
                              src={`/assets/logos/${lng}.svg`}
                              height="20"
                              width="20"
                              alt=""
                            ></img>
                            {lng}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
