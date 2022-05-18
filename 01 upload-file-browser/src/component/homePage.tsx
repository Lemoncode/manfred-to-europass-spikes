import React from "react";
import Button from "@mui/material/Button";

import * as classes from "./homePage.styles";
export const HomePage: React.FC = () => {
  const [file, setFile] = React.useState<File | null>(null);
  const [result, setResult] = React.useState<string>("");

  const handleSelectFile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
    <>
      <div>
        <h1>You can convert the Manfred format to Europass format</h1>
      </div>
      <main className={classes.mainContainer}>
        <label htmlFor="file">Upload a file</label>
        <input type="file" onChange={handleSelectFile} />
        <Button variant="contained" component="span">
          Convert
        </Button>
      </main>
      <section>{result}</section>
    </>
  );
};
