import React, { useState } from "react";
import Sidebar from "../../../layout/sidebar";
import { Box, Button, Divider, Flex, Image } from "@chakra-ui/react";
import { BsFillCalendarDateFill } from "react-icons/bs";

const Turnament = () => {
  const [year, setYear] = useState(2022);
  const breadcrumbs = ["Data Table", "Doc Mahasiswa", "Kompetisi Game"];
  return (
    <Sidebar breadcrumbs={breadcrumbs}>
      <Flex className="h-fit flex-col gap-3">
        <Box className="bg-secondaryGray-300 rounded-xl py-5 px-10">
          <h2 className="flex items-center gap-2 font-semibold text-xl">
            <BsFillCalendarDateFill className="text-brandTabs-300" /> Tahun :{" "}
          </h2>
          <Box className="mt-2 flex gap-3">
            <Button
              onClick={() => setYear(2022)}
              className="bg-brandTabs-300 hover:bg-brandTabs-300  text-brandTabs-100"
              size="sm"
            >
              2022
            </Button>
            <Button
              onClick={() => setYear(2021)}
              className="bg-brandTabs-300 hover:bg-brandTabs-300  text-brandTabs-100"
              size="sm"
            >
              2021
            </Button>
          </Box>
        </Box>
        <Box className="bg-secondaryGray-300 rounded-xl">
          <Box className="px-10 py-3">
            <h1 className="text-xl font-semibold">Recap {year}</h1>
          </Box>
          <Divider />
          {year === 2022 ? (
            <Box className="px-10 py-5 flex flex-wrap gap-3">
              <Image
                className="aspect-video w-[500px] object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/1vNmCyFR2GeTn_vmRqCFZ-C1PTCI9wBSz=w1920-h888-iv1"
                alt="Dan Abramov"
              />
              <Image
                className="aspect-video w-[500px] object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/1vNmCyFR2GeTn_vmRqCFZ-C1PTCI9wBSz=w1920-h888-iv1"
                alt="Dan Abramov"
              />
              <Image
                className="aspect-video w-[500px] object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/1-rBRyPOMw-yS_ERS4wZL_dK6wVGOiSmt=w1277-h888-iv1"
                alt="Dan Abramov"
              />
              <Image
                className="aspect-video w-[500px] object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/1MLmPstV0cry6fn_SanCPjsEqArEm1Htr=w1277-h888-iv1"
                alt="Dan Abramov"
              />
              <Image
                className="aspect-video w-[500px] object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/1DrcRzPExR3oALTI79eok1km4JUXCe8Vm=w1277-h888-iv1"
                alt="Dan Abramov"
              />
              <Image
                className="aspect-video w-[500px] object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/1Ohabqbc9UJvSEjyISng9jQc1B377OL57=w1277-h888-iv1"
                alt="Dan Abramov"
              />
            </Box>
          ) : (
            <Box className="px-10 py-5 flex flex-wrap gap-3">
              <h1>Data Not Found</h1>
            </Box>
          )}
        </Box>
      </Flex>
    </Sidebar>
  );
};

export default Turnament;
