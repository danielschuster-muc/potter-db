import React from "react";

import Character from "@/types/Character";

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
    <div className="p-3">
      <table className="table-auto">
        <tbody>
          <tr>
            <td className="font-bold">Name</td>
            <td>{name}</td>
          </tr>
          {born && (
            <tr>
              <td className="font-bold">Born</td>
              <td>{born}</td>
            </tr>
          )}
          {died && (
            <tr>
              <td className="font-bold">Died</td>
              <td>{died}</td>
            </tr>
          )}
          {gender && (
            <tr>
              <td className="font-bold">Gender</td>
              <td>{gender}</td>
            </tr>
          )}
          {species && (
            <tr>
              <td className="font-bold">Species</td>
              <td>{species}</td>
            </tr>
          )}
          {nationality && (
            <tr>
              <td className="font-bold">Nationality</td>
              <td>{nationality}</td>
            </tr>
          )}
          {marital_status && (
            <tr>
              <td className="font-bold">Marital Status</td>
              <td>{marital_status}</td>
            </tr>
          )}
          {blood_status && (
            <tr>
              <td className="font-bold">Blood Status</td>
              <td>{blood_status}</td>
            </tr>
          )}
          {house && (
            <tr>
              <td className="font-bold">House</td>
              <td>{house}</td>
            </tr>
          )}
          {eye_color && (
            <tr>
              <td className="font-bold">Eye Color</td>
              <td>{eye_color}</td>
            </tr>
          )}
          {hair_color && (
            <tr>
              <td className="font-bold">Hair Color</td>
              <td>{hair_color}</td>
            </tr>
          )}
          {height && (
            <tr>
              <td className="font-bold">Height</td>
              <td>{height}</td>
            </tr>
          )}
          {weight && (
            <tr>
              <td className="font-bold">Weight</td>
              <td>{weight}</td>
            </tr>
          )}
          {animagus && (
            <tr>
              <td className="font-bold">Animagus</td>
              <td>{animagus}</td>
            </tr>
          )}
          {boggart && (
            <tr>
              <td className="font-bold">Boggart</td>
              <td>{boggart}</td>
            </tr>
          )}
          {patronus && (
            <tr>
              <td className="font-bold">Patronus</td>
              <td>{patronus}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
