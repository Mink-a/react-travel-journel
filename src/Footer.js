import React from 'react';

import { FaFacebookSquare,FaGithubSquare,FaTwitterSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <h3 className="footer">
      <a href="https://github.com/Mink-a/">
        <FaGithubSquare/>
      </a>
      <a href="https://www.facebook.com/profile.php?id=100014752620952">
        <FaFacebookSquare/>
      </a>
      <a href="//twitter.com">
        <FaTwitterSquare/>
      </a>
    </h3>
  );
}