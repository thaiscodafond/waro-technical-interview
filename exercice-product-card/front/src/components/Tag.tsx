import { Typography } from "./Typography";
import "../styles/Tag.scss";

type TagProps = {
  text: string;
};

const Tag = ({ text }: TagProps) => {
  return (
    <div className="tag">
      <Typography level={3} type="bold" color="turquoise">
        {text}
      </Typography>
    </div>
  );
};

export { Tag };
