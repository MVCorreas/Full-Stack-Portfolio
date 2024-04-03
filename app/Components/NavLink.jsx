import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#858b8f] sm:text-2xl rounded md:p-0 hover:text-white" style={{ textDecoration: 'none' }}
    >
      {title}
    </Link>
  );
};

export default NavLink;