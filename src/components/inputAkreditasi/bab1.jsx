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
import TamplateAkreditasi from "./bab1/tamplate";

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
              BAB 1 PENDAHULUAN
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel pb={3} className="flex flex-col gap-2">
          <TamplateAkreditasi
            endpoint={"bab1-a"}
            title={"A. Dasar Penyususan"}
          />
          <TamplateAkreditasi
            endpoint={"bab1-b"}
            title={"B. Tim Penyususn Dan Tanggungjawabnya"}
          />
          <TamplateAkreditasi
            endpoint={"bab1-c"}
            title={"C. Mekanisme Kerja Penyusunan Evaluasi Diri"}
          />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Bab1;
