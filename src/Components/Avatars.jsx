import React from 'react'
import { useState } from 'react'
import { Avatar } from './Avatar';

export const Avatars = () => {

  const [ persons, setPersons ] = useState([
    {
      id: 1,
      name: "Oscar Eduardo",
      role: "Frontend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar6.png",
    },
    {
      id: 2,
      name: "Carolina",
      role: "Backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },
    {
      id: 3,
      name: "Catalina",
      role: "UI/UX Designer",
      img: "https://bootdey.com/img/Content/avatar/avatar8.png",
    },
  
  ]);

  return (
    <div>
      <h2>IT Team</h2>
      {persons.map((person) => {
        return (
          <div>
            <Avatar
              key={person.id}
              name={person.name}
              role={person.role}
              img={person.img}
            />
          </div>
        )
      })}
    </div>
  )
}
