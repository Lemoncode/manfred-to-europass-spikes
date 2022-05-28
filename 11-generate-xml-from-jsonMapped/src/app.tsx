import React from "react";
import { mapFromManfredJsonToEuropassJson } from "./mapFromManfredJsonToEuropassJson";

const cvManfred = require("./asset/example-Cvmanfred.json");
export const App: React.FC = () => {
  const fileToConvert = mapFromManfredJsonToEuropassJson(cvManfred);
  const doc = document.implementation.createDocument("", "", null);
  const root = doc.createElement("root");
  console.log(root);

  const isObject = (obj: any) => {
    return obj.constructor === Object;
  };

  const createElements = (fileToConvert, father?) => {
    if (isObject(fileToConvert)) {
      const keys = Object.keys(fileToConvert);

      for (let i = 0; i < keys.length; i++) {
        const element = doc.createElement(keys[i]);
        father ? father.appendChild(element) : root.appendChild(element);
        if (isObject(fileToConvert[keys[i]])) {
          createElements(fileToConvert[keys[i]], element);
        } else {
          element.append(fileToConvert[keys[i]]);
        }
      }

      console.log();
    }
  };
  createElements(fileToConvert);

  return (
    <>
      <h2>Base boilerplate !!</h2>
      <h3></h3>
    </>
  );
};
