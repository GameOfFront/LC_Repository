"use client";

import React, { useState } from "react";
import Image from "next/image";

import { ContainerWrapper } from "./styles";





export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu

  return (
    <ContainerWrapper className="font-futura">

      Testando Hotmart Home


    </ContainerWrapper>
  );
}
