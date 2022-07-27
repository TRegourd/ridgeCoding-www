import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import IndexHero from "../components/IndexHero";
import IndexAbout from "../components/IndexAbout";
import IndexServices from "../components/IndexServices";
import IndexPortfolio from "../components/IndexPortfolio";
import IndexTestimonials from "../components/IndexTestimonials";

export default function index({ data }: any) {
  const { title, subtitle, header_img } = data.header.frontmatter;

  const contactDetails = {
    email: "contact@ridgecoding.com",
    phone: "+ 33 123456789",
  };

  const seo = {};

  const header_image = data.staticImg.nodes.find((el: any) => {
    return el.name == header_img;
  })?.childrenImageSharp[0];

  const testimonialsList = [
    ...data.testimonialsList.frontmatter.testimonials.map((item: any) => ({
      image: data.testimonialsImg.nodes.find((el: any) => {
        return item.avatar == el.name;
      })?.childrenImageSharp[0],
      ...item,
    })),
  ];

  const testimonialsTitle = data.testimonialsList.frontmatter.title;
  const testimonialsSubTitle = data.testimonialsList.frontmatter.subtitle;

  return (
    <Layout navLight={false}>
      <Seo seo={seo} lang={data.locales.edges[0].node.language} />
      <IndexHero title={title} subtitle={subtitle} img={header_image} />
      <IndexAbout />
      <IndexServices />
      <IndexPortfolio />
      <IndexTestimonials />
    </Layout>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    header: markdownRemark(
      frontmatter: { slug: { eq: "index/static" }, lang: { eq: $language } }
    ) {
      id
      frontmatter {
        lang
        slug
        title
        subtitle
        header_img
      }
    }
    staticImg: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        relativePath: { glob: "assets/index/*" }
      }
    ) {
      nodes {
        name
        childrenImageSharp {
          gatsbyImageData
        }
      }
    }
    logos: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)|(svg)/" }
        relativePath: { glob: "assets/logos/*" }
      }
    ) {
      nodes {
        name
        childrenImageSharp {
          gatsbyImageData
        }
        relativePath
        extension
      }
    }
    testimonialsList: markdownRemark(
      frontmatter: {
        lang: { eq: $language }
        slug: { eq: "index/testimonials" }
      }
    ) {
      id
      frontmatter {
        title
        subtitle
        testimonials {
          name
          position
          avatar
          text
        }
      }
    }
    testimonialsImg: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        relativePath: { glob: "assets/index/testimonials/*" }
      }
    ) {
      nodes {
        name
        childrenImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;
