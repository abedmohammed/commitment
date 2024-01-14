import CommitChart from "@/components/CommitChart";
import Head from "next/head";
import Modal from "../components/Modal";
import { FaPlus } from "react-icons/fa";
import Button from "@/components/Button";
import { useState } from "react";
import CreateHabit from "@/components/CreateHabit";

export default function Home() {
  const [showCreate, setShowCreate] = useState(false);

  const openCreateHandler = () => setShowCreate(true);
  const closeCreateHandler = () => setShowCreate(false);

  return (
    <>
      <Head>
        <title>Commitment</title>
        <meta name="description" content="Commit to your habits" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dashboard">
        <h1 className="dashboard__title">Welcome Back, Michael</h1>
        <div className="dashboard__options">
          <Button
            clickHandler={openCreateHandler}
            text={"Create New Habit"}
            icon={<FaPlus />}
          ></Button>
        </div>
        <div className="habits">
          <CommitChart colour="#603FEF" title="Hours ⌛⌛" />
          <CommitChart colour="green" title="Leetcode 🧩" />
        </div>
        <Modal
          show={showCreate}
          onCancel={closeCreateHandler}
          title="Create A New Habit"
        >
          <CreateHabit />
        </Modal>
      </main>
    </>
  );
}
