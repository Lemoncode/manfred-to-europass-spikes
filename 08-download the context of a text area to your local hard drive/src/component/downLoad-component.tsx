import React from "react";
import Button from "@mui/material/Button";

import * as classes from "./donwLoad.styles";

export const DownLoadComponent: React.FC = () => {
  const [text, setText] = React.useState<string>("");

  const handleClick = (e) => {
    const popup = confirm("¿Seguro que quieres descargar el archivo?");
    if (popup) {
      const a = document.createElement("a");
      const file = new Blob([text], { type: "text/plain" });
      const url = URL.createObjectURL(file);
      a.href = url;
      a.download = "text.txt";
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  console.log("se ha recargado la página");
  return (
    <>
      <div>
        <h1>You can download the text in the frame</h1>
      </div>
      <main className={classes.mainContainer}>
        <textarea
          cols={10}
          rows={50}
          defaultValue={text}
          onChange={handleChange}
        ></textarea>
      </main>
      <section>
        <Button variant="contained" component="span" onClick={handleClick}>
          Convert
        </Button>
      </section>
    </>
  );
};
