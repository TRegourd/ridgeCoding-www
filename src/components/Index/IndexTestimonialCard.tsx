import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { ITestimonial } from "../../libs/interfaces";

function IndexTestimonialCard({ testimonial }: { testimonial: ITestimonial }) {
  const image = getImage(testimonial.image);
  return (
    <div className="self-start text-center">
      <div className="customer-testi">
        <div className="content relative m-2 rounded bg-white p-6 shadow dark:bg-slate-900 dark:shadow-gray-700">
          <i className="mdi mdi-format-quote-open mdi-48px text-primary-600"></i>
          <p className="text-slate-500 dark:text-slate-300">
            {testimonial.text}
          </p>
        </div>

        {image && (
          <div className="mt-5 text-center">
            <GatsbyImage
              image={image}
              className="mx-auto h-14 w-14 rounded-full shadow-md"
              alt={testimonial.name}
            />
            <h6 className="fw-semibold mt-2">{testimonial.name}</h6>
            <span className="text-sm text-slate-500 dark:text-slate-300">
              {testimonial.position}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default IndexTestimonialCard;
