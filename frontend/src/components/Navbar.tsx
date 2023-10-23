import Image from "next/image";
import Link from "next/link";
import NavbarMenu from "./NavBarMenu";

export default function Navbar() {
  return (
    <nav className="border-gray-200 bg-transparent">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 relative">
        <Link href="/">
          <Image src="/images/logo.svg" alt="Potter DB" width="101" height="60" />
        </Link>
        <NavbarMenu />
      </div>
    </nav>
  );
}
