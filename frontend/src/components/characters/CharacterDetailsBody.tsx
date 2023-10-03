import Character from "@/types/Character";
import Image from "next/image";
import React from "react";
import Links from "../ui/Links";

export default function CharacterDetailsBody({ character }: { character: Character }) {
  const {
    name,
    image,
    wiki,
    slug,
    born,
    died,
    eye_color,
    boggart,
    blood_status,
    gender,
    hair_color,
    height,
    house,
    marital_status,
    nationality,
    patronus,
    weight,
  } = character.attributes;

  return (
    <div className="flex justify-center">
      <div className="grid lg:grid-cols-2 md:w-2/3 mt-5 p-5 border-2 border-gray-200 rounded-lg">
        <div className="p-3">
          <div className="flex items-center justify-center">
            <Image
              src={image || "/images/missing_character.svg"}
              alt={name}
              className="rounded-lg"
              width="400"
              height="400"
              objectFit="contain"
            />
          </div>
          <Links wiki={wiki} slug={slug} resource="characters" />
        </div>
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
              {house && (
                <tr>
                  <td className="font-bold">House</td>
                  <td>{house}</td>
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
      </div>
    </div>
  );
}
