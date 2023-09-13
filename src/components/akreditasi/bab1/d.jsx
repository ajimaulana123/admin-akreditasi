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
    title: "Suplemen Akreditasi Program Studi Diploma Sistem Indormasi",
    endpoint: "d1",
  }
];

const D = () => {
  const { colorMode } = useColorMode();

  return (
    <Accordion allowMultiple defaultIndex={[0]}>
      <AccordionItem
        className={`${
          colorMode === "dark" ? "bg-brandTabs-900" : "bg-white"
        } border-none rounded-xl p-3 shadow`}
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
