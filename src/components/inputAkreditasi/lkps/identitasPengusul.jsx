import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import DTamplate from "../bab1/Component/dTamplate";

const IdentitasPengusul = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return <DTamplate endpoint="identitas-pengusul" title="Identitas Pengusul" />;
};

export default IdentitasPengusul;
