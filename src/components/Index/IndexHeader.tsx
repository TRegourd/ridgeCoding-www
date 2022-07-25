import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { Trans, useTranslation } from "react-i18next";

function IndexHeader({
  title,
  subtitle,
  img,
}: {
  title: string;
  subtitle: string;
  img: IGatsbyImageData;
}) {
  const { t } = useTranslation();

  const image = getImage(img);

  return (
    <section className="startup-wrapper relative flex overflow-hidden py-36 md:h-screen">
      <div className="container mx-0 w-max self-center pr-28 sm:pr-10">
        <div className="mt-10 grid items-center gap-[30px] ">
          <div className="md:col-span-7">
            <div className="md:mr-6">
              <h4 className=" text-4xl font-semibold leading-normal text-black dark:text-white lg:text-5xl lg:leading-normal">
                {title.substring(0, title.lastIndexOf(" "))}
              </h4>
              <h4 className="mb-5 text-4xl font-semibold leading-normal text-primary-600 dark:text-primary-600 lg:text-5xl lg:leading-normal">
                {title.substring(title.lastIndexOf(" ") + 1)}
              </h4>
              <p
                className="max-w-xl text-lg text-slate-500 dark:text-slate-300"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              ></p>

              <div className="mt-6">
                <a
                  href={`${t("NAV.lang") === "FR" ? "" : "/en"}/products`}
                  className="btn btn-primary rounded-md"
                  aria-label="Learn More Button"
                >
                  <Trans>BUTTON.contact</Trans>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-index-header z-50 self-center">
        {image && (
          <GatsbyImage
            className=" w-full"
            image={image}
            alt="ridgecoding-header"
          />
        )}
      </div>
    </section>
  );
}

export default IndexHeader;
