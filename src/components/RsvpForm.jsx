import React, { useRef, useState } from "react";
// import {XCircleIcon} from '@heroicons/react/24/solid'
import Xicon from '../assets/icons/Xicon.svg'
import { Button, TextInput } from "flowbite-react";

function RsvpForm({toggleShowModal}) {
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
    toggleShowModal()
    setMembers([])
  };

  return (
    <>
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="flex flex-col justify-center items-center gap-4 p-4"
      >
        <TextInput
          ref={teamNameRef}
          type="text"
          placeholder="Team Name"
          className="w-1/2"
          required
        />
        {members.map((input, index) => {
          return (
            <div key={index} className="flex gap-2">
              <TextInput
                name="name"
                placeholder="Name"
                value={input.name}
                onChange={(event) => handleFormChange(index, event)}
                required
              />
              <TextInput
                name="email"
                placeholder="Email"
                type="email"
                value={input.email}
                onChange={(event) => handleFormChange(index, event)}
                required
              />
              <TextInput
                name="phone"
                placeholder="Phone"
                maxLength={10}
                value={input.phone}
                onChange={(event) => handleFormChange(index, event)}
                required
              />
              <button
                type="button"
                onClick={() => removeMember(index)}
              >
                <img src={Xicon} alt="delete icon" />
              </button>
            </div>
          );
        })}
        <div className="flex gap-2">
          <Button
            type="button"
            onClick={addMember}
            disabled={members.length >= 5}
          >
            Add member
          </Button>
          <Button
          color={"success"}
            type="submit"
            disabled={members.length <= 1}
          >
            Register
          </Button>
        </div>
      </form>
    </>
  );
}

export default RsvpForm;
