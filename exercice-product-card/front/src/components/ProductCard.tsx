import { useEffect, useRef, useState } from "react";
import "../styles/ProductCard.scss";
import { Typography } from "./Typography";
import { Tag } from "./Tag";
import { StatusBar } from "./StatusBar";
import { Icon } from "./Icon";
import { Image } from "./Image";
import { t } from "../utils";

import type { Product } from "../types/product";

const __VARIANT = "variant";
const __UNIT = "kg CO₂ eq";
const __MAX_HEIGHT_CARD = 50;

type ProductCardProps = Product;

const ProductCard = ({
  id,
  companyId,
  name,
  category,
  imgSrc,
  variants,
  status,
  co2Impact,
  tags,
}: ProductCardProps) => {
  const tagsRef = useRef<HTMLDivElement>(null);
  const [visibleTags, setVisibleTags] = useState(tags);
  const [hiddenCount, setHiddenCount] = useState(0);

  useEffect(() => {
    if (!tagsRef.current) return;

    const container = tagsRef.current;
    const observer = new ResizeObserver(() => {
      const children = Array.from(container.children) as HTMLElement[];

      let totalHeight = 0;
      let fitCount = 0;

      for (let i = 0; i < children.length; i++) {
        totalHeight += children[i].offsetHeight;
        if (totalHeight > __MAX_HEIGHT_CARD) break;
        fitCount++;
      }

      setVisibleTags(tags.slice(0, fitCount));
      setHiddenCount(tags.length - fitCount);
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, [tags]);

  return (
    <div className="product-card" id={id + "_" + companyId}>
      <div className="content">
        <div className="top">
          <div className="description">
            <div className="title">
              <Typography level={2} type="bold" color="black">
                {name}
              </Typography>
              <Typography
                level={3}
                type="medium"
                color="grey"
              >{`${category} — ${t(
                __VARIANT,
                Object.keys(variants).length
              )}`}</Typography>
            </div>
          </div>
          <Icon />
        </div>
        <div className="middle">
          <Image src={imgSrc} />
          <div className="middle-right">
            <Typography level={1} type="bold" color="blue">
              {co2Impact.toString()}
            </Typography>
            <Typography level={2} color="blue">
              {__UNIT}
            </Typography>
            <div className="tags" ref={tagsRef}>
              {visibleTags.map((tag) => (
                <Tag key={`${id}_${tag}`} text={tag} />
              ))}
              {hiddenCount > 0 && (
                <Tag key="more" text={`+${hiddenCount} more`} />
              )}
            </div>
          </div>
        </div>
      </div>
      <StatusBar state={status} />
    </div>
  );
};

export { ProductCard };
