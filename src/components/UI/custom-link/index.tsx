import { NavLink, NavLinkProps } from "react-router-dom";

type CustomLinkProps = {
  children: React.ReactNode;
} & NavLinkProps;

const CustomLink = ({ children, ...props }: CustomLinkProps) => {
  return (
    <NavLink className="text-blue-600" {...props}>
      {children}
    </NavLink>
  );
};

export default CustomLink;
