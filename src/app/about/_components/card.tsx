import * as React from "react";
import Image from "next/image";

type Props = {
  character: {
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: { name: string };
    location: { name: string };
    image: string;
  };
};

export function CharacterCard({ character }: Props) {
  return (
    <div className="flex border rounded-[15px]">
      <div className="p-4 w-fit">
        <Image
          src={character.image}
          alt={character.name}
          width={150}
          height={150}
          layout="fixed"
        />
      </div>
      <div>
        <div className="p-2 pt-4">
          <div>{character.name}</div>
          <div>{`Status: ${character.status}`}</div>
          <div>{`Species: ${character.species}`}</div>
          <div>{`Gender: ${character.gender}`}</div>
          <div>{`Location: ${character.location.name}`}</div>
          <div>{`Origin: ${character.origin.name}`}</div>
        </div>
      </div>
    </div>
  );
}
