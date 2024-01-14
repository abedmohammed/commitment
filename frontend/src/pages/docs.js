import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

import keysImage from "../../public/images/keys.png";
import { CopyBlock, a11yDark } from "react-code-blocks";

const docs = () => {
  const patch = `fetch("http://localhost:5000/habits/ID/addEntry", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: DAY,
        value: VALUE,
      }),
      }).then((res) => res.json());`;

  return (
    <>
      <Header />
      <main className="docs">
        <h1 className="docs__title">API Documentation</h1>

        <p className="docs__paragraph">
          You can you use this API separately to create your own automation,
          pipelines, custom graphs, and hooks.
        </p>

        <h2 className="docs__subtitle">Habit ID</h2>
        <p className="docs__paragraph">
          To begin creating automation for your habits, find the corresponding
          habit id from your dashboard settings
        </p>
        <Image
          className="docs__image"
          src={keysImage}
          width={700}
          quality={100}
        />

        <h2 className="docs__subtitle">Get Data</h2>

        <h2 className="docs__subtitle">Submit Entry</h2>
        <p className="docs__paragraph">
          You can use the public PATCH call to submit your own habit commits
          easily. This can be done by sending a PATCH request of your choice
          with the correct parameters, and using the corresponding habit id
        </p>
        <div className="docs__code">
          <CopyBlock
            text={patch}
            language={"javascript"}
            theme={a11yDark}
            showLineNumbers={true}
            wrapLines
          />
        </div>
      </main>
    </>
  );
};

export default docs;
