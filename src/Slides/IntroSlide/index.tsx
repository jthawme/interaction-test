import React from "react";
import { useMainContext } from "../../components/MainContext";

import { SlideTitleTemplate } from "../../components/SlideTitleTemplate";

interface IntroSlideProps {}

const IntroSlide: React.FC<IntroSlideProps> = () => {
  const { info } = useMainContext();

  return (
    <SlideTitleTemplate
      title={`Interaction test`}
      subtitle="Can display icons from thousands of concurrent connections"
      metaTitle={`Click anywhere on your own devices – ${info.usersCount} ${
        info.usersCount === 1 ? "person" : "people"
      }`}
    >
      {/* <span>Slide 1</span> */}
    </SlideTitleTemplate>
  );
};

export { IntroSlide };
