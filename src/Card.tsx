import React from "react";

export function Card({ name, order }: { name: string; order: number }) {
  return (
    <div>
      <span>{name}</span> <span>({order})</span>
    </div>
  );
}
