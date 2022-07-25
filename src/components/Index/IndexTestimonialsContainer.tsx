import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { ITestimonial } from "../../libs/interfaces";
import IndexTestimonialCard from "./IndexTestimonialCard";

function IndexTestimonialsContainer({
  title,
  subtitle,
  testimonials,
}: {
  title: string;
  subtitle: string;
  testimonials: ITestimonial[];
}) {
  return (
    <section className="relative bg-gray-50 py-16 dark:bg-slate-800 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">
            {title}
          </h3>

          <p
            className="mx-auto max-w-xl text-slate-500 dark:text-slate-300"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          ></p>
        </div>

        <div className="mt-8 grid grid-cols-1">
          <div className=" grid grid-cols-1 items-center gap-[30px] sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
            {testimonials.map((testimonial) => (
              <IndexTestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndexTestimonialsContainer;
