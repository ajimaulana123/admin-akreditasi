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
    enpoint: [
      "c1-penetapan",
      "c1-pelaksanaan",
      "c1-evaluasi",
      "c1-pengendalian",
      "c1-peningkatan",
    ],
  },
  {
    title: "C2. Tata Pamong, Tata Kelola, dan Kerjasama",
    enpoint: [
      "c2-penetapan",
      "c2-pelaksanaan",
      "c2-evaluasi",
      "c2-pengendalian",
      "c2-peningkatan",
    ],
  },
  {
    title: "C3. Mahasiswa",
    enpoint: [
      "c3-penetapan",
      "c3-pelaksanaan",
      "c3-evaluasi",
      "c3-pengendalian",
      "c3-peningkatan",
    ],
  },
  {
    title: "C4. Sumber Daya Manusia",
    enpoint: [
      "c4-penetapan",
      "c4-pelaksanaan",
      "c4-evaluasi",
      "c4-pengendalian",
      "c4-peningkatan",
    ],
  },
  {
    title: "C5. Keuangan, Sarana, dan Prasarana",
    enpoint: [
      "c5-penetapan",
      "c5-pelaksanaan",
      "c5-evaluasi",
      "c5-pengendalian",
      "c5-peningkatan",
    ],
  },
  {
    title: "C6. Pendidikan",
    enpoint: [
      "c6-penetapan",
      "c6-pelaksanaan",
      "c6-evaluasi",
      "c6-pengendalian",
      "c6-peningkatan",
    ],
  },
  {
    title: "C7. Penelitian",
    enpoint: [
      "c7-penetapan",
      "c7-pelaksanaan",
      "c7-evaluasi",
      "c7-pengendalian",
      "c7-peningkatan",
    ],
  },
  {
    title: "C8. Pengabdian Kepada Masyarakat",
    enpoint: [
      "c8-penetapan",
      "c8-pelaksanaan",
      "c8-evaluasi",
      "c8-pengendalian",
      "c8-peningkatan",
    ],
  },
  {
    title: "C9. Luaran dan Capaian Tridama",
    enpoint: [
      "c9-penetapan",
      "c9-pelaksanaan",
      "c9-evaluasi",
      "c9-pengendalian",
      "c9-peningkatan",
    ],
  },
];

const SubDataC = [
  "Penetapan",
  "Pelaksanaan",
  "Evaluasi",
  "Pengendalian",
  "Peningkatan",
];

const C = () => {
  const { colorMode } = useColorMode();

  return (
    <Accordion allowMultiple defaultIndex={[0]}>
      <AccordionItem
        className={`${
          colorMode === "dark" ? "bg-brandTabs-900" : "bg-secondaryGray-300"
        } border-none rounded-xl p-3`}
      >
        <Text>
          <AccordionButton className="text-2xl font-semibold py-3">
            <Text className="text-xl font-semibold" flex="1" textAlign="left">
              C. Kriteria
            </Text>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel pb={3}>
          <Accordion>
            {DataC.map((data, index) => (
              <AccordionItem
                key={index}
                className={`${
                  colorMode === "dark"
                    ? "bg-secondaryGray-900"
                    : "bg-secondaryGray-300"
                } border-none rounded-xl mb-3 p-3`}
              >
                <AccordionButton>
                  <Text className="flex-1 text-start py-2 text-xl">
                    {data.title}
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Accordion >
                    {SubDataC.map((sub, index) => (
                      <AccordionItem
                      key={index}
                        className={`${
                          colorMode === "dark"
                            ? "bg-brandTabs-900"
                            : "bg-secondaryGray-300"
                        } border-none rounded-xl mb-2`}
                      >
                        <AccordionButton>
                          <Text className="flex-1 text-start py-2 text-xl">
                            {sub}
                          </Text>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                          <CTamplate endpoint={data.enpoint[index]} />
                        </AccordionPanel>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default C;
