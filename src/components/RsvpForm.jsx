import React, { useRef, useState } from "react";

function RsvpForm() {
  const [members, setMembers] = useState([]);

  const teamNameRef = useRef();

  const addMember = () => {
    let newMember = { name: "", email: "", phone: "" };
    setMembers([...members, newMember]);
  };

  const removeMember = (index) => {
    let allMembers = [...members];
    allMembers.splice(index, 1);
    // console.log(allMembers);
    setMembers(allMembers);
  };

  const handleFormChange = (index, event) => {
    let allMembers = [...members];
    allMembers[index][event.target.name] = event.target.value;
    setMembers(allMembers);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://neofolks-server.up.railway.app/teams/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: teamNameRef.current.value,
          memberCount: members.length,
          members: members,
        }),
      }
    );

    console.log(await response.json());
    teamNameRef.current.value = ''
    setMembers([])
  };

  return (
    <>
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="flex flex-col justify-center items-center gap-4"
      >
        <input
          ref={teamNameRef}
          type="text"
          placeholder="Team Name"
          className="border-black border-2"
          required
        />
        {members.map((input, index) => {
          return (
            <div key={index} className="flex gap-2">
              <input
                name="name"
                placeholder="Name"
                value={input.name}
                onChange={(event) => handleFormChange(index, event)}
                className="border-black border-2 w-1/3"
                required
              />
              <input
                name="email"
                placeholder="Email"
                type="email"
                value={input.email}
                onChange={(event) => handleFormChange(index, event)}
                className="border-black border-2 w-1/3"
                required
              />
              <input
                name="phone"
                placeholder="Phone"
                maxLength={10}
                value={input.phone}
                onChange={(event) => handleFormChange(index, event)}
                className="border-black border-2 w-1/3"
                required
              />
              <button
                type="button"
                className="border-black border-2"
                onClick={() => removeMember(index)}
              >
                X
              </button>
            </div>
          );
        })}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={addMember}
            disabled={members.length >= 5}
            className="border-blue-500 border-2 p-2 rounded-lg"
          >
            Add member
          </button>
          <button
            type="submit"
            disabled={members.length < 1}
            className="border-blue-500 border-2 p-2 rounded-lg"
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
}

export default RsvpForm;
