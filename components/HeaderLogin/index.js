import React from 'react';
import Link from 'next/link';

export default() => (
  <div className="header_nav_buttons col-md-6 col-sm-6 col-xs-12">
    <Link href="/login">
      <a>login</a>
    </Link>
    <Link href="/register" className="submit_work">
      <a>SUBMIT YOUR WORK</a>
    </Link>
  </div>
);
