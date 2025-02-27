"use client";

import { CircleUser, Grid2X2, Heart, Home, Tally1 } from "lucide-react";
import { Button } from "../Button/";
import { redirect } from "next/navigation";

export function Header() {
  function handleClickButtonPage(pathUrl: string) {
    redirect(pathUrl);
  }

  return (
    <header className="flex gap-3 p-2 items-center bg-gray-900/50 rounded-xl mt-4 border border-gray-500/50">
      <Button.Root onAction={() => handleClickButtonPage("/")}>
        <Button.Icon icon={Home} />
      </Button.Root>

      <Tally1 className="mr-[-20] ml-[-5]" />

      <Button.Root onAction={() => handleClickButtonPage("/sobre")}>
        <Button.Icon icon={CircleUser} />
        <Button.Label label="Sobre" />
      </Button.Root>

      <Button.Root onAction={() => handleClickButtonPage("/trabalhos")}>
        <Button.Icon icon={Grid2X2} />
        <Button.Label label="Trabalhos" />
      </Button.Root>

      <Button.Root onAction={() => handleClickButtonPage("/depoimentos")}>
        <Button.Icon icon={Heart} />
        <Button.Label label="Depoimentos" />
      </Button.Root>
    </header>
  );
}
