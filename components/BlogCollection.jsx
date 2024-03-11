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
    img: "/images/online-abuse.jpg",
    des: "Empowering Survivors: Overcoming Challenges in Reporting Sexual Assault",
  },
  {
    img: "/images/SEXUAL_ABUSE-transformed.jpg",
    des: "Empowering Survivors: Overcoming Challenges in Reporting Sexual Assault",
  },
  {
    img: "/images/SAFETY-transformed.jpg",
    des: "Empowering Survivors: Overcoming Challenges in Reporting Sexual Assault",
  },
];
  


const BlogCollection = () => {
  return (
    <div className='py-10'>
      <p className="text-center text-2xl my-3 md:text-4xl font-bold">Exploy Our Blog</p>
      <div className=" flex flex-col md:flex-row flex-wrap justify-between gap-5">
        {blogdata.map(({ img, des }, i) => (
          <Collection key={i} img={img} des={des} />
        ))}
      </div>
    </div>
  );
}

export default BlogCollection