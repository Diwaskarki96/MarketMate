import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { VscCode } from "react-icons/vsc";
const Logo = () => {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <VscCode style={{ height: "24px", width: "24px" }} />
      </Link>
    </Button>
  );
};

export default Logo;
