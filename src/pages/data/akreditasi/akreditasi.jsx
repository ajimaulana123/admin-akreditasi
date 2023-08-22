import React, { useEffect, useState } from "react";
import Sidebar from "../../../layout/sidebar";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { BiSolidFileDoc } from "react-icons/bi";
import { useGetData } from "../../../hooks/apiMethod";

const Akreditasi = () => {
  const apiUrl =
    "https://knowledgeable-painted-guarantee.glitch.me/dataAkreditasi";
  const { data: fetchDatas, isLoading, refetchData } = useGetData(apiUrl);
  const breadcrumbs = ["Data Table", "Akreditasi"];

  return (
    <Sidebar breadcrumbs={breadcrumbs}>
      <Box className="w-full h-fit bg-secondaryGray-300 rounded-xl p-10">
        {isLoading ? (
          <p>Loading Data....</p>
        ) : (
          <Box className="flex flex-col gap-3">
            {fetchDatas?.map((data, index) => {
              return (
                <Card className="h-fit" key={index}>
                  <CardHeader className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">{data.judul}</h1>
                  </CardHeader>
                  <CardBody className="py-0">
                    <TableContainer>
                      <Table variant={"simple"}>
                        <Thead>
                          <Tr>
                            <Th textAlign="center" className="w-[50px]">
                              NO
                            </Th>
                            <Th>DESKRIPSI</Th>
                            <Th textAlign="center" className="w-[100px]">
                              DOCUMEN
                            </Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {data.dataBody?.map((body, index) => {
                            return (
                              <Tr key={index}>
                                <Td textAlign="center">{index + 1}</Td>
                                <Td>{body.deskripsi}</Td>
                                <Td textAlign="center">
                                  <Link
                                    href={body.link}
                                    className="flex justify-center"
                                  >
                                    <BiSolidFileDoc className="text-2xl hover:text-blue-500" />
                                  </Link>
                                </Td>
                              </Tr>
                            );
                          })}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </CardBody>
                </Card>
              );
            })}
          </Box>
        )}
      </Box>
    </Sidebar>
  );
};

export default Akreditasi;
