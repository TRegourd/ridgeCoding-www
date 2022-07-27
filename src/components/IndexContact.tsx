import React from "react";
import { Trans } from "react-i18next";
import { contactDetails } from "../libs/contactDetails";

function IndexContact() {
  return (
    <section
      className="relative bg-zinc-50 py-16 dark:bg-gray-800 md:py-24"
      id="contact"
    >
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h6 className="mb-2 text-base font-medium uppercase text-primary-600">
            Contact us
          </h6>
          <h3 className="mb-4 text-xl font-medium dark:text-white md:text-2xl">
            Get In Touch !
          </h3>

          <p className="mx-auto max-w-xl text-slate-400 dark:text-slate-300">
            Launch your campaign and benefit from our expertise on designing and
            managing conversion centered Tailwind CSS html page.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rounded-md bg-white p-6 shadow dark:bg-black">
              <form
                method="post"
                name="myForm"
                id="myForm"
                //onsubmit="return validateForm()"
              >
                <p className="mb-0" id="error-msg"></p>
                <div id="simple-msg"></div>
                <div className="grid lg:grid-cols-12 lg:gap-6">
                  <div className="mb-5 lg:col-span-6">
                    <input
                      name="name"
                      id="name"
                      type="text"
                      className="form-input"
                      placeholder="Name :"
                    />
                  </div>

                  <div className="mb-5 lg:col-span-6">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      className="form-input"
                      placeholder="Email :"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1">
                  <div className="mb-5">
                    <input
                      name="subject"
                      id="subject"
                      className="form-input"
                      placeholder="Subject :"
                    />
                  </div>

                  <div className="mb-5">
                    <textarea
                      name="comments"
                      id="comments"
                      className="form-input textarea"
                      placeholder="Message :"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  id="submit"
                  name="send"
                  className="btn btn-primary flex h-11 items-center justify-center rounded-md"
                >
                  <Trans>BUTTON.send_message</Trans>
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="lg:ml-8">
              <div className="flex">
                <div className="icons mx-auto text-center">
                  <i className="mdi mdi-phone mb-0 block rounded text-2xl dark:text-white"></i>
                </div>

                <div className="ml-6 flex-1">
                  <h5 className="mb-2 text-lg font-medium dark:text-white">
                    <Trans>CONTACT.phone</Trans>
                  </h5>
                  <a href="tel:+152534-468-854" className="text-slate-400">
                    {contactDetails.phone}
                  </a>
                </div>
              </div>

              <div className="mt-4 flex">
                <div className="icons mx-auto text-center">
                  <i className="mdi mdi-email mb-0 block rounded text-2xl dark:text-white"></i>
                </div>

                <div className="ml-6 flex-1">
                  <h5 className="mb-2 text-lg font-medium dark:text-white">
                    <Trans>CONTACT.email</Trans>
                  </h5>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="text-slate-400"
                  >
                    {contactDetails.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndexContact;
