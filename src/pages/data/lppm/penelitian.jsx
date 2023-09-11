import React, { useEffect, useState } from "react";
import Sidebar from "../../../layout/sidebar";
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Link,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorMode,
} from "@chakra-ui/react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaBookOpen, FaFlask } from "react-icons/fa";
import axios from "axios";
import { useGetData } from "../../../hooks/apiMethod";

const Penelitian = () => {
  const apiUrl = "https://energetic-pear-petticoat.cyclic.app/penelitian_lppm";
  const breadcrumbs = ["Data Table", "Lppm", "Penelitian"];
  const { colorMode } = useColorMode();
  const { datas, isLoading } = useGetData(apiUrl);

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
            <FaFlask className="text-brandTabs-300" /> Penelitian
          </h2>
        </Box>
        <Box
          className={`${
            colorMode === "dark"
              ? "bg-secondaryGray-900"
              : "bg-secondaryGray-300"
          } rounded-xl`}
        >
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Copyright Manajemen Informatika</TableCaption>
              <Thead>
                <Tr>
                  <Th textAlign="center" className="w-[50px]">
                    No
                  </Th>
                  <Th textAlign="start">Deskripsi</Th>
                  <Th textAlign="center">Link Download</Th>
                </Tr>
              </Thead>
              <Tbody>
                {isLoading ? (
                  <Tr>
                    <Td>
                      <p className="px-10">Loading Data...</p>
                    </Td>
                  </Tr>
                ) : (
                  datas.map((data, index) => {
                    return (
                      <Tr key={index}>
                        <Td textAlign="center">{index + 1}</Td>
                        <Td>{data.deskripsi}</Td>
                        <Td textAlign="center">
                          <Link href={data.link} className="text-blue-500">
                            Download
                          </Link>
                        </Td>
                      </Tr>
                    );
                  })
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </Sidebar>
  );
};

export default Penelitian;
