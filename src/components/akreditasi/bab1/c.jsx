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
import CTamplate from "./Component/cTamplate";

const DataC = [
  {
    title: "C1. Visi, Misi, Tujuan, dan Strategi",
    endpoint: "c1",
  },
  {
    title: "C2. Tata Pamong, Tata Kelola, dan Kerjasama",
    endpoint: "c2",
  },
  {
    title: "C3. Mahasiswa",
    endpoint: "c3",
  },
  {
    title: "C4. Sumber Daya Manusia",
    endpoint: "c4",
  },
  {
    title: "C5. Keuangan, Sarana, dan Prasarana",
    endpoint: "c5",
  },
  {
    title: "C6. Pendidikan",
    endpoint: "c6",
  },
  {
    title: "C7. Penelitian",
    endpoint: "c7",
  },
  {
    title: "C8. Pengabdian Kepada Masyarakat",
    endpoint: "c8",
  },
  {
    title: "C9. Luaran dan Capaian Tridama",
    endpoint: "c9",
  },
];

const C = () => {
  const { colorMode } = useColorMode();
  
  return (
    <Accordion allowMultiple defaultIndex={[0]}>
      <AccordionItem
        className={`${
          colorMode === "dark" ? "bg-secondaryGray-900" : "bg-secondaryGray-300"
        } border-none rounded-xl`}
      >
        <Text>
          <AccordionButton className="text-2xl font-semibold py-3">
            <Text className="text-xl font-semibold" flex="1" textAlign="left">
              C. Kriteria
            </Text>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel pb={3} className="flex flex-col gap-2">
          {DataC.map((data, index) => (
            <CTamplate
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

export default C;
