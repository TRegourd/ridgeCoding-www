import React, { useEffect } from "react";
import { tns } from "tiny-slider";

function IndexTestimonials() {
  function tinySlider() {
    tns({
      container: ".tiny-two-item",
      controls: true,

      loop: true,
      rewind: true,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 3000,
      navPosition: "bottom",
      controlsText: [
        '<i class="mdi mdi-chevron-left "></i>',
        '<i class="mdi mdi-chevron-right"></i>',
      ],

      nav: false,
      speed: 400,
      gutter: 0,
      responsive: {
        768: {
          items: 2,
        },
      },
    });
  }

  useEffect(() => {
    tinySlider();
  }, []);

  return (
    <section className="relative  md:py-24" id="testi">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h6 className="mb-2 text-base font-medium uppercase text-primary-600">
            Testimonial
          </h6>
          <h3 className="mb-4 text-xl font-medium dark:text-white md:text-2xl">
            Client's Review
          </h3>

          <p className="mx-auto max-w-xl text-slate-400 dark:text-slate-300">
            Launch your campaign and benefit from our expertise on designing and
            managing conversion centered Tailwind CSS html page.
          </p>
        </div>

        <div className="relative mt-8 grid grid-cols-1">
          <div className="tiny-two-item">
            <div className="tiny-slide">
              <div className="relative m-2 overflow-hidden rounded-md p-6 shadow shadow-slate-200 dark:shadow-slate-700 lg:flex lg:p-0">
                <img
                  className="mx-auto h-24 w-24 rounded-full lg:h-auto lg:w-48 lg:rounded-none"
                  src="assets/index/testimonials/fred-foo.jpeg"
                  alt=""
                  width="384"
                  height="512"
                />
                <div className="space-y-4 pt-6 text-center lg:p-6 lg:text-left">
                  <p className="text-base text-slate-500 dark:text-slate-200">
                    {" "}
                    " It seems that only fragments of the original text remain
                    in the Lorem Ipsum texts used today. "{" "}
                  </p>

                  <div>
                    <span className="mb-1 block text-primary-600">
                      Thomas Israel
                    </span>
                    <span className="block text-sm text-slate-400 dark:text-white/60">
                      Staff Engineer, Algolia
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tiny-slide">
              <div className="relative m-2 overflow-hidden rounded-md p-6 shadow shadow-slate-200 dark:shadow-slate-700 lg:flex lg:p-0">
                <img
                  className="mx-auto h-24 w-24 rounded-full lg:h-auto lg:w-48 lg:rounded-none"
                  src="assets/index/testimonials/fred-foo.jpeg"
                  alt=""
                  width="384"
                  height="512"
                />
                <div className="space-y-4 pt-6 text-center lg:p-6 lg:text-left">
                  <p className="text-base text-slate-500 dark:text-slate-200">
                    {" "}
                    " The most well-known dummy text is the 'Lorem Ipsum', which
                    is said to have originated in the 16th century. "{" "}
                  </p>

                  <div>
                    <span className="mb-1 block text-primary-600">
                      Carl Oliver
                    </span>
                    <span className="block text-sm text-slate-400 dark:text-white/60">
                      Staff Engineer, Algolia
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tiny-slide">
              <div className="relative m-2 overflow-hidden rounded-md p-6 shadow shadow-slate-200 dark:shadow-slate-700 lg:flex lg:p-0">
                <img
                  className="mx-auto h-24 w-24 rounded-full lg:h-auto lg:w-48 lg:rounded-none"
                  src="assets/index/testimonials/fred-foo.jpeg"
                  alt=""
                  width="384"
                  height="512"
                />
                <div className="space-y-4 pt-6 text-center lg:p-6 lg:text-left">
                  <p className="text-base text-slate-500 dark:text-slate-200">
                    {" "}
                    " One disadvantage of Lorum Ipsum is that in Latin certain
                    letters appear more frequently than others. "{" "}
                  </p>

                  <div>
                    <span className="mb-1 block text-primary-600">
                      Barbara McIntosh
                    </span>
                    <span className="block text-sm text-slate-400 dark:text-white/60">
                      Staff Engineer, Algolia
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tiny-slide">
              <div className="relative m-2 overflow-hidden rounded-md p-6 shadow shadow-slate-200 dark:shadow-slate-700 lg:flex lg:p-0">
                <img
                  className="mx-auto h-24 w-24 rounded-full lg:h-auto lg:w-48 lg:rounded-none"
                  src="assets/index/testimonials/fred-foo.jpeg"
                  alt=""
                  width="384"
                  height="512"
                />
                <div className="space-y-4 pt-6 text-center lg:p-6 lg:text-left">
                  <p className="text-base text-slate-500 dark:text-slate-200">
                    {" "}
                    " Thus, Lorem Ipsum has only limited suitability as a visual
                    filler for German texts. "{" "}
                  </p>

                  <div>
                    <span className="mb-1 block text-primary-600">
                      Jill Webb
                    </span>
                    <span className="block text-sm text-slate-400 dark:text-white/60">
                      Staff Engineer, Algolia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndexTestimonials;
