import { ButtonLink } from "components/atoms/button";
import React from "react";

export default function NotFound() {
  return (
    <div className="mt-20 p-4  text-center">
      <h2 className="mb-10 text-2xl text-red-400">There is nothing here!</h2>
      <ButtonLink to="/">Go Home</ButtonLink>
    </div>
  );
}
