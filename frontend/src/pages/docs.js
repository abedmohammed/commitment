import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

import keysImage from "../../public/images/keys.png";
import graphImage from "../../public/images/graph.png";
import timerImage from "../../public/images/timer.png";
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

  const getAll = `fetch("http://localhost:5000/habits")
  .then((res) => res.json());`

  const getOne = `fetch("http://localhost:5000/habits/ID")
  .then((res) => res.json());`

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
          habit id from your dashboard settings. This value will be used in all API calls
          to access the desired habit for reading/writing.
        </p>
        <Image
          className="docs__image"
          src={keysImage}
          width={700}
          quality={100}
        />
        <h2 className="docs__subtitle">Get Data</h2>
        <p className = "docs__paragraph">
          The public GET calls provided by our API will allow you to take your associated habit data
          and tranform the user interface into anything that will help you visualize the data in the
          way that is most beneficial to you. For example, if a github commit chart isn't your own style,
          and you'd like to take on the challenge of building your own application, you could try transforming
          the habits to a graph, as with the <i>Weekly Runs</i> habit in the figure below: </p>
        <Image
          className="docs__image"
          src={graphImage}
          width={700}
          quality={100}
        />
        <p className = "docs__paragraph">
          There are 2 GET calls that can be used to return whichever data you deem necessary for your project.
          The first call can be used to get a single instance of a habit object, identified by its unique ID:
        </p>
        <div className="docs__code">
          <CopyBlock
            text={getOne}
            language={"javascript"}
            theme={a11yDark}
            showLineNumbers={true}
            wrapLines
          />
        </div>
        <p className = "docs__paragraph">
          The second call returns all of the habit objects, contained in a single array:
        </p>
        <div className="docs__code">
          <CopyBlock
            text={getAll}
            language={"javascript"}
            theme={a11yDark}
            showLineNumbers={true}
            wrapLines
          />
        </div>
        <h2 className="docs__subtitle">Submit Entry</h2>
        <p className="docs__paragraph">
          You can use the public PATCH call to submit your own habit commits
          easily. This can be done by sending a PATCH request of your choice
          with the correct parameters, and using the corresponding habit id.
          Sample javascript code is shown below:
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
        <p className="docs__paragraph">
          The sky is really the limit with this call, it can be used to integrate commitment's APIs and
          data stores to any project that you would like. For example, you could create a simple Pomodoro timer
          to commit your focus time directly to the commitment app with just a click:
        </p>
        <Image
          className="docs__image"
          src={timerImage}
          width={700}
          quality={100}
        />
        <p className="docs__paragraph">
          That's all for now! We hope to add support for more use of your data in the future, and we hope
          you have as much fun implementing your own projects with our APIs, as we did creating commitment!
        </p>
      </main>
    </>
  );
};

export default docs;
