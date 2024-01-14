import CommitChart from "@/components/CommitChart";
import Head from "next/head";
import Modal from "../components/Modal";
import { FaCog, FaPlus } from "react-icons/fa";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import CreateHabit from "@/components/CreateHabit";

export default function Home() {
  const [showCreate, setShowCreate] = useState(false);
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  const openCreateHandler = () => setShowCreate(true);
  const closeCreateHandler = () => setShowCreate(false);

  const setLoadingHandler = (isLoading) => {
    setLoading(isLoading);
  };

  const updateHabits = (data) => {
    setHabits((prev) => [...prev, data]);
  };

  const deleteHabit = (id) => {
    setHabits((prev) => {
      return prev.filter((item) => item._id !== id);
    });
  };

  useEffect(() => {
    fetch("http://localhost:5000/habits")
      .then((res) => res.json())
      .then((json) => {
        setLoadingHandler(false);
        return setHabits(json);
      });
  }, []);

  console.log(habits);

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
          <Button text={"Settings"} icon={<FaCog />}></Button>
        </div>
        {!loading && (
          <div className="habits">
            {habits.length > 0 &&
              habits.map((habit) => {
                return (
                  <CommitChart
                    id={habit._id}
                    key={habit._id}
                    colour={habit.settings.colour}
                    title={habit.settings.title}
                    unitType={habit.settings.unitType}
                    type={habit.settings.type}
                    data={habit.entries}
                    deleteHabit={deleteHabit}
                  />
                );
              })}
            {/* <CommitChart
            colour="#603FEF"
            title="Hours Worked ⌛⌛"
            unitType="Hours"
            type="number"
            data={[]}
          />
          <CommitChart
            colour="green"
            title="Leetcode 🧩"
            unitType="questions"
            type="number"
            data={[]}
          />
          <CommitChart
            colour="teal"
            title="Gym 🦾"
            unitType=""
            type="boolean"
            data={[]}
          /> */}
          </div>
        )}

        <Modal
          show={showCreate}
          onCancel={closeCreateHandler}
          title="Create A New Habit"
        >
          <CreateHabit
            closeHandler={closeCreateHandler}
            updateHabits={updateHabits}
          />
        </Modal>
      </main>
    </>
  );
}
