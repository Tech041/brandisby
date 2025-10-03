import React from "react";
import { Link } from "react-router-dom";
interface SocialProp {
  path: string;
  children: React.ReactNode;
}
const Socials = ({ path, children }: SocialProp) => {
  return <Link to={path}>{children}</Link>;
};

export default Socials;
