import React from "react";
import { Navbar, Button } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 text-black">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm font-semibold text-black sm:text-xl dark:text-white"
      >
        <span className=" rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-1 text-white">
          Blog
        </span>
        <span className=" font-bold text-black">Nest</span>
      </Link>
      <form className="relative hidden lg:inline">
        <input
          type="text"
          placeholder="Search..."
          className="rounded border py-2 pl-10 pr-4"
        />
        <FaSearch className="text-black-500 absolute left-3 top-1/2 -translate-y-1/2 transform" />
      </form>

      <Button className="h-10 w-12 lg:hidden" color="gray" pill>
        <FaSearch />
      </Button>

      <div className="btn-moon flex gap-2 md:order-2">
        <Button className="h1- hidden w-12 sm:inline" color="gray" pill>
          <FaMoon />
        </Button>

        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
