import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-white hover:text-[#1d3557] sm:text-2xl rounded md:p-0" style={{ textDecoration: 'none', fontSize: '1.5rem' }}
    >
      {title}
    </Link>
  );
};

export default NavLink;