import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartArrowDown,
  faCircleUser,
  faMoon,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router';

const NAV_ITEMS = [
  { to: '/', end: true, label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/skin-quiz', label: 'SkinQuiz' },
  { to: '/orders', label: 'Orders' },
  { to: '/sign-in', label: 'Sign-in' },
  { to: '/sign-out', label: 'Sign-out' },
  { to: '/sign-up', label: 'Sign-up' },
];



function NavItems() {
  return (
    <>
      {NAV_ITEMS.map(({ to, end, label }) => (
        <li key={to} >
          <NavLink to={to} end={end} className={"pb-1"}>
            {label}
          </NavLink>
        </li>
      ))}
    </>
  );
}

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm px-2 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost ps-0 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavItems />
          </ul>
        </div>
        <Link to="/" className="text-xl no-underline">
          LUMIÈRE
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal gap-8 px-1">
          <NavItems />
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <FontAwesomeIcon className="cursor-pointer" icon={faMoon} />
        <NavLink to='/profile'><FontAwesomeIcon className="cursor-pointer" icon={faCircleUser} /></NavLink>
        <NavLink to='/cart' ><FontAwesomeIcon className="cursor-pointer" icon={faCartArrowDown} /></NavLink>
      </div>
    </div>
  );
}
