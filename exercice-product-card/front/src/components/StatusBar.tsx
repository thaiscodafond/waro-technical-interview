import { Typography } from "./Typography";
import { Status } from "../types/status";
import type { TypographyProps } from "./Typography";
import "../styles/StatusBar.scss";

type StatusBarProps = {
  state: Status;
};
type BarState = {
  text: "Not Started" | "In Progress" | "Completed";
  color: TypographyProps["color"];
};

const Bar: Record<Status, BarState> = {
  [Status.NotStarted]: { text: "Not Started", color: "grey" },
  [Status.InProgress]: { text: "In Progress", color: "orange" },
  [Status.Completed]: { text: "Completed", color: "green" },
};

const StatusBar = ({ state }: StatusBarProps) => {
  return (
    <div className={`status-bar ${state}`}>
      <Typography level={2} type="bold" color={Bar[state].color}>
        {Bar[state].text}
      </Typography>
    </div>
  );
};

export { StatusBar };
