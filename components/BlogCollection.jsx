import React from 'react';
import Collection from './Collection';

const blogdata = [
  {
    img: "/images/abuseleg.jpg",
    des: "Empowering Survivors: Overcoming Challenges in Reporting Sexual Assault",
  },
  {
    img: "/images/abuseeye.jpg",
    des: "Empowering Survivors: Overcoming Challenges in Reporting Sexual Assault",
  },
  {
    img: "/images/abuseface.jpg",
    des: "Empowering Survivors: Overcoming Challenges in Reporting Sexual Assault",
  },
  {
    img: "/public/images/online sexual abuse material.jpg",
    des: "Empowering Survivors: Overcoming Challenges in Reporting Sexual Assault",
  },
  {
    img: "/public/images/SEXUAL_ABUSE-transformed.jpg",
    des: "Empowering Survivors: Overcoming Challenges in Reporting Sexual Assault",
  },
  {
    img: "/public/images/SAFETY-transformed.jpg",
    des: "Empowering Survivors: Overcoming Challenges in Reporting Sexual Assault",
  },
];
  


const BlogCollection = () => {
  return (
    <div className=" flex flex-col md:flex-row gap-5">
      {blogdata.map(({ img, des }, i) => (
        <Collection key={i} img={img} des={des} />
      ))}
    </div>
  );
}

export default BlogCollection