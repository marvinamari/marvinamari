import { useState } from 'react';
import Link from 'next/link';
import {signout, isAuth} from '../actions/auth';
import Router from 'next/router';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);

  }
  return (
      <header className="header">
        <a href="/" className="logo">Welcome</a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
            <span className="nav-icon"></span>
        </label>
        <ul className="menu">
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/connect">
                <a>Connect</a>
              </Link>
            </li>
            {isAuth() && (
              <li style={{cursor: 'pointer'}}>
             <a onClick={() => signout(() => Router.replace(`/signin`))}>Signout</a>
             </li>
             )}
        </ul>
      </header>
    );
};

export default Header;
