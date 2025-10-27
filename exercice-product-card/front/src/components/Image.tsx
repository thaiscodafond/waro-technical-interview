import { useState } from "react";
import "../styles/Image.scss";

type ImgProps = {
  src?: string;
  alt?: string;
};

const Image = ({ src, alt = "" }: ImgProps) => {
  const [err, setErr] = useState(false);
  const ClassNames = `img ${err || !src ? "img--fallback" : ""}`;

  return err || !src ? (
    <div className={ClassNames} />
  ) : (
    <img
      src={src}
      alt={alt}
      className={ClassNames}
      onError={() => setErr(true)}
    />
  );
};

export { Image };
