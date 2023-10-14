import React from "react";

import Character from "@/types/Character";
import TableRow from "../ui/TableRow";

export default function CharacterDetailsBodyRight({ character }: { character: Character }) {
  const {
    name,
    born,
    died,
    gender,
    species,
    nationality,
    marital_status,
    blood_status,
    house,
    eye_color,
    hair_color,
    height,
    weight,
    animagus,
    boggart,
    patronus,
  } = character.attributes;

  return (
    <div className="py-2">
      <table className="table-auto">
        <tbody className="text-white text-left">
          {name && <TableRow label="Name" value={name} />}
          {born && <TableRow label="Born" value={born} />}
          {died && <TableRow label="Died" value={died} />}
          {gender && <TableRow label="Gender" value={gender} />}
          {species && <TableRow label="Species" value={species} />}
          {nationality && <TableRow label="Nationality" value={nationality} />}
          {marital_status && <TableRow label="Marital Status" value={marital_status} />}
          {blood_status && <TableRow label="Blood Status" value={blood_status} />}
          {house && <TableRow label="House" value={house} />}
          {eye_color && <TableRow label="Eye Color" value={eye_color} />}
          {hair_color && <TableRow label="Hair Color" value={hair_color} />}
          {height && <TableRow label="Height" value={height} />}
          {weight && <TableRow label="Weight" value={weight} />}
          {animagus && <TableRow label="Animagus" value={animagus} />}
          {boggart && <TableRow label="Boggart" value={boggart} />}
          {patronus && <TableRow label="Patronus" value={patronus} />}
        </tbody>
      </table>
    </div>
  );
}
