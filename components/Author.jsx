import React from 'react'

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-14 relative rounded-lg bg-black bg-opacity-20">
  <div className="flex justify-center items-center -top-14">
    <img
      alt={author.name}
      height="100px"
      width="100px"
      className="absolute -top-12 align-middle rounded-full"
      src={author.photo.url}
    />
  </div>
  <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
  <p className="text-white text-ls">{author.bio}</p>
</div>
);

export default Author