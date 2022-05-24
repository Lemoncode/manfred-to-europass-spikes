import React from "react";

import { mapFromManfredJsonToEuropassJson } from "./mapFromManfredJsonToEuropassJson";

// import * as CvManfred from "../../01 upload-file-browser/src/asset/example-CVmanfred.json";
import { EuropassJsonModel } from "./models/europas-json-model";

export const App: React.FC = () => {
  const CvManfred = require("../../01 upload-file-browser/src/asset/example-CVmanfred.json");
  console.log(CvManfred);

  const text: EuropassJsonModel = mapFromManfredJsonToEuropassJson(CvManfred);
  console.log(text);
  return (
    <div>
      <span>{JSON.stringify(text)}</span>
    </div>
  );
};
