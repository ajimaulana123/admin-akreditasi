import React, { useState } from "react";
import Sidebar from "../../../layout/sidebar";
import { Box, Button, Divider, Flex, Image, useColorMode } from "@chakra-ui/react";
import { BsFillCalendarDateFill } from "react-icons/bs";

const Sosialisasi = () => {
  const [year, setYear] = useState(2022);
  const breadcrumbs = ["Data Table", "Doc Mahasiswa", "Sosialisasi"];
  const {colorMode} = useColorMode()

  return (
    <Sidebar breadcrumbs={breadcrumbs}>
      <Flex className="h-fit flex-col gap-3">
        <Box
          className={`${
            colorMode === "dark"
              ? "bg-secondaryGray-900"
              : "bg-secondaryGray-300"
          } rounded-xl py-5 px-10`}
        >
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
        <Box
          className={`${
            colorMode === "dark"
              ? "bg-secondaryGray-900"
              : "bg-secondaryGray-300"
          } rounded-xl`}
        >
          <Box className="px-10 py-3">
            <h1 className="text-xl font-semibold">Recap {year}</h1>
          </Box>
          <Divider />
          {year === 2022 ? (
            <Box className="px-10 py-5 grid xl:grid-cols-2 gap-2">
              <Image
                className="aspect-video w-[500px] object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/1uHd3SWKZr5Du85LCXoKRO4L7Y2CM0SfX=w1920-h888-iv1"
                alt="Dan Abramov"
              />
              <Image
                className="aspect-video w-[500px] object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/1tpnBV1kWgoplv4gXElJDdWUnMLgQrBhF=w1367-h888-iv1"
                alt="Dan Abramov"
              />
              <Image
                className="aspect-video w-[500px] object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/1vdR2WFmMD2UJFyceV-0ex6pAQTjowC8O=w1367-h888-iv1"
                alt="Dan Abramov"
              />
              <Image
                className="aspect-video w-[500px] object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/1xGzHhp_lfvIbCpWyyjj5uFeMz8lwlGl1=w1367-h888-iv1"
                alt="Dan Abramov"
              />
              <Image
                className="aspect-video w-[500px] object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/1uKFKJQbdrfSfzzKtF75X4n2K9u4YYK5A=w1367-h888-iv1"
                alt="Dan Abramov"
              />
              <Image
                className="aspect-video w-[500px] object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/1uPhgAZRvkgMqz2q6kWdwMn24UY43_FhN=w1367-h888-iv1"
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

export default Sosialisasi;
