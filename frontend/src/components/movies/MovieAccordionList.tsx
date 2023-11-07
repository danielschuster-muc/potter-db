import React from "react";

import Accordion from "../ui/Accordion";
import Movie from "@/types/Movie";

export default function MovieAccordionList({ movie }: { movie: Movie }) {
  const { cinematographers, directors, editors, music_composers, producers, screenwriters } =
    movie.attributes;

  if (
    !cinematographers &&
    !directors &&
    !editors &&
    !music_composers &&
    !producers &&
    !screenwriters
  ) {
    return null;
  }

  return (
    <div className="justify-center flex mt-5">
      <div className="w-full md:w-2/3">
        {cinematographers && cinematographers.length > 0 && (
          <Accordion
            title="Cinematographers"
            content={
              <ul className="list-disc pl-5">
                {cinematographers.map((cinematographer) => (
                  <li key={cinematographer}>{cinematographer}</li>
                ))}
              </ul>
            }
          />
        )}
        {directors && directors.length > 0 && (
          <Accordion
            title="Directors"
            content={
              <ul className="list-disc pl-5">
                {directors.map((director) => (
                  <li key={director}>{director}</li>
                ))}
              </ul>
            }
          />
        )}
        {editors && editors.length > 0 && (
          <Accordion
            title="Editors"
            content={
              <ul className="list-disc pl-5">
                {editors.map((editor) => (
                  <li key={editor}>{editor}</li>
                ))}
              </ul>
            }
          />
        )}
        {music_composers && music_composers.length > 0 && (
          <Accordion
            title="Music Composers"
            content={
              <ul className="list-disc pl-5">
                {music_composers.map((music_composer) => (
                  <li key={music_composer}>{music_composer}</li>
                ))}
              </ul>
            }
          />
        )}
        {producers && producers.length > 0 && (
          <Accordion
            title="Producers"
            content={
              <ul className="list-disc pl-5">
                {producers.map((producer) => (
                  <li key={producer}>{producer}</li>
                ))}
              </ul>
            }
          />
        )}
        {screenwriters && screenwriters.length > 0 && (
          <Accordion
            title="Screen Writers"
            content={
              <ul className="list-disc pl-5">
                {screenwriters.map((screen_writer) => (
                  <li key={screen_writer}>{screen_writer}</li>
                ))}
              </ul>
            }
          />
        )}
      </div>
    </div>
  );
}
