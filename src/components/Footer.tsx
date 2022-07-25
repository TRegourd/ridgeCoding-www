import React from "react";
import { Trans, useTranslation } from "react-i18next";
import DarkSwitch from "./DarkSwitch";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const socialLinks = {
    linkedIn: "https://www.linkedin.com/company/ridge-coding/",
    facebook: "https://www.facebook.com",
    twitter: "https://twitter.com",
  };

  return (
    <footer className="footer relative bg-gray-900 text-gray-200 dark:bg-dark-footer dark:text-gray-200">
      <div className="container">
        <div className="container contents text-center">
          <div className="grid grid-cols-1">
            <div className="py-[30px] px-0">
              <div className="grid items-center md:grid-cols-2">
                <div className="text-center md:text-left">
                  <a
                    href="/"
                    className="text-[22px] focus:outline-none"
                    aria-label="ridgecoding-Logo"
                  >
                    <img
                      src="/assets/logos/ridge-full-dark.png"
                      className="inline-block h-full w-40"
                      alt=""
                    />
                  </a>
                </div>

                <ul className="footer-list mt-6 list-none text-center md:mt-0 md:text-right">
                  <li className="mt-[10px] inline">
                    <a
                      aria-label="About Footer Link"
                      href={`${t("NAV.lang") === "FR" ? "" : "/en"}/team`}
                      className="ml-2 text-gray-300 transition-all duration-500 ease-in-out hover:text-gray-400"
                    >
                      <Trans>NAV.about</Trans>
                    </a>
                  </li>
                  <li className="mt-[10px] inline">
                    <a
                      aria-label="Contact Footer Link"
                      href={`${t("NAV.lang") === "FR" ? "" : "/en"}/contact`}
                      className="ml-2 text-gray-300 transition-all duration-500 ease-in-out hover:text-gray-400"
                    >
                      <Trans>NAV.contact</Trans>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-6 grid grid-cols-1">
                <ul className="list-none text-center">
                  <li className="inline">
                    <a
                      aria-label="social-facebook"
                      href={socialLinks.facebook}
                      className="btn btn-icon btn-sm rounded-md border !border-gray-800 hover:border-primary-600 hover:bg-primary-600 dark:hover:border-primary-600 dark:hover:bg-primary-600"
                    >
                      <i className="mdi mdi-facebook"></i>
                    </a>
                  </li>

                  <li className="inline">
                    <a
                      aria-label="social-twitter"
                      href={socialLinks.twitter}
                      className="btn btn-icon btn-sm rounded-md border !border-gray-800 hover:border-primary-600 hover:bg-primary-600 dark:hover:border-primary-600 dark:hover:bg-primary-600"
                    >
                      <i className="mdi mdi-twitter"></i>
                    </a>
                  </li>
                  <li className="inline">
                    <a
                      aria-label="social-linkedin"
                      href={socialLinks.linkedIn}
                      className="btn btn-icon btn-sm rounded-md border !border-gray-800 hover:border-primary-600 hover:bg-primary-600 dark:hover:border-primary-600 dark:hover:bg-primary-600"
                    >
                      <i className="mdi mdi-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-[10px] px-0">
        <div className="container text-center">
          <div className="grid md:grid-cols-1">
            <p className="mb-0">
              © {currentYear} Rridge Coding. Design with{" "}
              <i className="mdi mdi-heart text-primary-600"></i>
            </p>
          </div>
        </div>
        <DarkSwitch />
      </div>
    </footer>
  );
};

export default Footer;
