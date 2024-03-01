import React from "react";

import { learnMoreContainer } from "./styles";
import { boasImageURLs } from "../../constants/imageURL";

const LearnMore = (): React.ReactElement => {
  return (
    <div className={learnMoreContainer}>
      <img
        alt="learnMore"
        src={boasImageURLs.learnMoreImageURL}
        className="max-w-[700px]"
      />
    </div>
  );
};

export default LearnMore;
