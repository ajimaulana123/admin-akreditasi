import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import C from "./bab1/c";
import TamplateAkreditasi from "./bab1/tamplate";
import D from "./bab1/d";

const Bab1 = () => {
  const { colorMode } = useColorMode();
  return (
    <Accordion allowMultiple>
      <AccordionItem
        className={`${
          colorMode === "dark" ? "bg-secondaryGray-900" : "bg-secondaryGray-300"
        } border-none rounded-xl`}
      >
        <Text>
          <AccordionButton className="text-xl py-3">
            <Box as="span" flex="1" textAlign="left">
              Bab 1 Elemen Akreditasi
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel pb={3} className="flex flex-col gap-2">
          <TamplateAkreditasi endpoint={"a"} title={"A. Kondisi Ekternal"} />
          <TamplateAkreditasi
            endpoint={"b"}
            title={"B. Profit Unit Pengelola Program Studi"}
          />
          <C />
          <D />
          <TamplateAkreditasi
            endpoint={"e"}
            title={
              "E. Analisis dan Penetapan Program Pengembangan Unit Pengelola"
            }
          />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Bab1;
