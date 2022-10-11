import LogoDark from "../../assets/images/logos/xtremelogo.svg";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "reactstrap";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <button className="bg-warning rounded-pill"> My Logo</button>
      </a>
    </Link>
  );
};

export default Logo;
