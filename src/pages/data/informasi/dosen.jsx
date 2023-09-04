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
import CardDosen from "../../../components/cardDosen";
import { useGetData } from "../../../hooks/apiMethod";

const Dosen = () => {
  const apiUrl =
    "https://64ed6977f9b2b70f2bfb7c84.mockapi.io/api/lectures_informations";
  const [year, setYear] = useState(2022);
  const breadcrumbs = ["Data Table", "Doc Mahasiswa", "Dosen"];
  const { colorMode } = useColorMode();
  const { datas, isLoading, refetchData } = useGetData(apiUrl);
  console.log(datas);

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
          } rounded-xl p-5`}
        >
          <Box className="flex flex-wrap gap-2 justify-center">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              datas.map((dataDsn, index) => (
                <CardDosen data={dataDsn} key={index} />
              ))
            )}
          </Box>
        </Box>
      </Flex>
    </Sidebar>
  );
};

export default Dosen;
