'use client'
import React from 'react';

const Avatar = ({ src, alt }) => {
  return (
    <img
      className="w-16 h-16 rounded-full object-cover"
      src={src}
      alt={alt}
    />
  );
};

export default Avatar;
