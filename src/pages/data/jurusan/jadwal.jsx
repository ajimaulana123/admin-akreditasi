import React, { useState } from "react";
import Sidebar from "../../../layout/sidebar";
import { BsFillCalendarDateFill } from "react-icons/bs";
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  useColorMode,
} from "@chakra-ui/react";

const Jadwal = () => {
  const [year, setYear] = useState(2022);
  const breadcrumbs = ["Data Table", "Doc Jurusan", "Jadwal"];
  const { colorMode } = useColorMode();

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
          <Box className="px-10 py-5 grid gap-2">
            <Image
              className="w-full object-cover rounded-xl border border-brandTabs-300 shadow-md"
              src="https://mi-politama.vercel.app/assets/mi-pagi-e1a7d78d.jpg"
              alt="Dan Abramov"
            />
            <Image
              className="w-full object-cover rounded-xl border border-brandTabs-300 shadow-md"
              src="https://mi-politama.vercel.app/assets/mi-sore-5aa8e991.jpg"
              alt="Dan Abramov"
            />
          </Box>
        </Box>
      </Flex>
    </Sidebar>
  );
};

export default Jadwal;
