import Image from "next/image";
import logo from "~/components/assets/logo.svg";

const Logo = () => {
  return <Image src={logo} alt="shield logo" className="w-full aspect-auto" />;
};

export default Logo;
