import { Typography } from "./Typography";
import "../styles/Link.scss";
import { Link as RouterLink } from "react-router-dom";

export type LinkProps = {
  to?: string;
  children: string;
  level?: 1 | 2 | 3;
  type?: "medium" | "bold";
  color?: "blue" | "black" | "grey" | "green" | "orange" | "turquoise";
  underline?: boolean;
  onClick?: () => void;
};

const Link = ({
  to,
  children,
  level = 3,
  type = "medium",
  color = "blue",
  underline = true,
  onClick,
}: LinkProps) => {
  return (
    <RouterLink
      to={to ?? ""}
      onClick={onClick}
      className={`link ${underline ? "underline" : ""}`}
    >
      <Typography level={level} type={type} color={color}>
        {children}
      </Typography>
    </RouterLink>
  );
};

export { Link };
