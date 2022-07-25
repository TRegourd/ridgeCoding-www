import React from "react";
import { Trans } from "react-i18next";
import { IContactDetails } from "../../libs/interfaces";

function ContactDetails({ details }: { details: IContactDetails }) {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          <div className="mt-6 px-6 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-xl bg-primary-600/5 align-middle text-3xl text-primary-600 shadow-sm dark:shadow-gray-700">
              <button aria-label="Phone Button">
                <a href={`tel:${details.phone}`} aria-label="phone">
                  <i className="mdi mdi-phone"></i>
                </a>
              </button>
            </div>

            <div className="content mt-7">
              <h5 className="title h5 text-xl font-medium">
                <Trans>CONTACT.phone</Trans>
              </h5>

              <div className="mt-5">
                <a
                  href={`tel:${details.phone}`}
                  aria-label="phone"
                  className="btn btn-link text-primary-600 transition duration-500 after:bg-primary-600 hover:text-primary-600"
                >
                  {details.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 px-6 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-xl bg-primary-600/5 align-middle text-3xl text-primary-600 shadow-sm dark:shadow-gray-700">
              <button aria-label="Email Button">
                <a href={`mailto:${details.email}`} aria-label="email">
                  <i className="mdi mdi-email"></i>
                </a>
              </button>
            </div>

            <div className="content mt-7">
              <h5 className="title h5 text-xl font-medium">
                <Trans>CONTACT.email</Trans>
              </h5>

              <div className="mt-5">
                <a
                  href={`mailto:${details.email}`}
                  aria-label="email"
                  className="btn btn-link text-primary-600 transition duration-500 after:bg-primary-600 hover:text-primary-600"
                >
                  {details.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactDetails;
