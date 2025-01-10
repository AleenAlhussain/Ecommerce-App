import React from "react";
import "../Header.css"; // Import your CSS file
import "../responsive.css"; // Import your CSS file
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import blog_1 from "../assets/images/blog_2.jpg";
import blog_2 from "../assets/images/blog_3.jpg";
import blog_3 from "../assets/images/banner_2.jpg";

// BlogItem Component
const BlogItem = ({ image, title, meta }) => {
  return (
    <div className="col-lg-4 blog_item_col">
      <div className="blog_item">
        <div
          className="blog_background"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
          <h4 className="blog_title">{title}</h4>
          <span className="blog_meta">{meta}</span>
          <a className="blog_more" href="#">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

// Blogs Component
const Blogs = () => {
  const blogData = [
    {
      image: blog_1,
      title: "Here are the trends I see coming this fall",
      meta: "by admin | Dec 01, 2017",
    },
    {
      image: blog_2,
      title: "Here are the trends I see coming this fall",
      meta: "by admin | Dec 01, 2017",
    },
    {
      image: blog_3,
      title: "Here are the trends I see coming this fall",
      meta: "by admin | Dec 01, 2017",
    },
  ];

  return (
    <div className="blogs">
      <div className="container mt-5">
        <div className="row">
          <div className="col text-center">
            <div className="section_title mt-5">
              <h2>Latest Blogs</h2>
            </div>
          </div>
        </div>
        <div className="row blogs_container mt-5">
          {blogData.map((blog, index) => (
            <BlogItem
              key={index}
              image={blog.image}
              title={blog.title}
              meta={blog.meta}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
