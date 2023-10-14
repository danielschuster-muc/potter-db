import React from "react";

import Character from "@/types/Character";
import Accordion from "../ui/Accordion";

export default function CharacterDetailsAccordion({ character }: { character: Character }) {
  const { alias_names, family_members, jobs, romances, wands, titles } = character.attributes;

  if (!alias_names && !family_members && !jobs && !romances && !wands && !titles) {
    return null;
  }

  return (
    <div className="justify-center flex mt-5">
      <div className="w-full md:w-2/3">
        {alias_names.length > 0 && (
          <Accordion
            title="Alias Names"
            content={
              <ul className="list-disc pl-5">
                {alias_names.map((alias_name) => (
                  <li key={alias_name}>{alias_name}</li>
                ))}
              </ul>
            }
          />
        )}
        {family_members.length > 0 && (
          <Accordion
            title="Family Members"
            content={
              <ul className="list-disc pl-5">
                {family_members.map((family_member) => (
                  <li key={family_member}>{family_member}</li>
                ))}
              </ul>
            }
          />
        )}
        {jobs.length > 0 && (
          <Accordion
            title="Jobs"
            content={
              <ul className="list-disc pl-5">
                {jobs.map((job) => (
                  <li key={job}>{job}</li>
                ))}
              </ul>
            }
          />
        )}
        {romances.length > 0 && (
          <Accordion
            title="Romances"
            content={
              <ul className="list-disc pl-5">
                {romances.map((romance) => (
                  <li key={romance}>{romance}</li>
                ))}
              </ul>
            }
          />
        )}
        {titles.length > 0 && (
          <Accordion
            title="Titles"
            content={
              <ul className="list-disc pl-5">
                {titles.map((title) => (
                  <li key={title}>{title}</li>
                ))}
              </ul>
            }
          />
        )}
        {wands.length > 0 && (
          <Accordion
            title="Wands"
            content={
              <ul className="list-disc pl-5">
                {wands.map((wand) => (
                  <li key={wand}>{wand}</li>
                ))}
              </ul>
            }
          />
        )}
      </div>
    </div>
  );
}
