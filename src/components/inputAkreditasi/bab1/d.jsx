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
import DTamplate from "./Component/dTamplate";

const DataD = [
  {
    title: "D1. Suplemen Akreditasi Program Studi Diploma Sistem Indormasi",
    endpoint: "d1",
  },
  {
    title: "D2. Suplemen Program Studi  Diploma Teknologi Informasi",
    endpoint: "d2",
  },
  {
    title: "D3. Suplemen Program Studi Diploma Ilmu Komputer/Informatika/Teknik Informatika",
    endpoint: "d3",
  },
  {
    title: "D4. Suplemen Program Studi Diploma Sistem Komputer",
    endpoint: "d4",
  },
  {
    title: "D5. Suplemen Program Studi Diploma Rekayasa Perangkat Lunak",
    endpoint: "d5",
  }
];

const D = () => {
  const { colorMode } = useColorMode();

  return (
    <Accordion allowMultiple defaultIndex={[0]}>
      <AccordionItem
        className={`${
          colorMode === "dark" ? "bg-secondaryGray-900" : "bg-white"
        } border-none rounded-xl shadow`}
      >
        <Text>
          <AccordionButton className="text-2xl font-semibold py-3">
            <Text className="text-xl font-semibold" flex="1" textAlign="left">
              D. Suplemen
            </Text>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel pb={3} className="flex flex-col gap-2">
          {DataD.map((data, index) => (
            <DTamplate
              key={index}
              endpoint={data.endpoint}
              title={data.title}
            />
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default D;
