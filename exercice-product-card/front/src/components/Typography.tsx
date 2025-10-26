import "exercice-product-card/front/src/styles/Typography.css";

type TypographyProps = {
  text: string;
  level?: 1 | 2 | 3;
  type?: "medium" | "bold";
  color?: "blue" | "black" | "grey" | "green" | "orange" | "turquoise";
};

const Typography = ({
  level = 3,
  type = "medium",
  color = "grey",
  text,
}: TypographyProps) => {
  const classNames = ["typography"];
  switch (level) {
    case 1:
      classNames.push("large");
      break;
    case 2:
      classNames.push("title");
      break;
    case 3:
      classNames.push("body");
  }
  classNames.push(type);
  classNames.push(color);

  return <span className={classNames.join(" ")}>{text}</span>;
};

export { Typography };
