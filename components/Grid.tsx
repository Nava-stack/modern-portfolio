import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { FaLocationArrow } from "react-icons/fa6";
import gridItems from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            icon={<FaLocationArrow />}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
