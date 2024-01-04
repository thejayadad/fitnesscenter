'use client'
import Link from 'next/link';
import React from 'react';

const Logo = ({ size }) => {
  return (
    <Link href={'/'}>
      <img
        src='../logo.png'
        alt='logo'
        style={{ width: size, height: size, cursor: 'pointer' }}
      />
    </Link>
  );
};

export default Logo;