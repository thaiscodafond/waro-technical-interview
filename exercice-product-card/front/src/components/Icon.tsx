import { useState } from "react";
import "../styles/Icon.scss";
type IconProps = { src?: string; alt?: string; className?: string };

export const Icon = ({ src, alt = "", className = "" }: IconProps) => {
  const [err, setErr] = useState(false);
  const ClassNames = `icon ${err || !src ? "icon--fallback" : ""} ${className}`;

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
