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
} from "@chakra-ui/react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaBookOpen, FaHandsHelping } from "react-icons/fa";
import axios from "axios";

const Pengabdian = () => {
  const [datas, setDatas] = useState(null);
  const breadcrumbs = ["Data Table", "Lppm", "Pengabdian"];

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const { data } = await axios.get(
          "https://knowledgeable-painted-guarantee.glitch.me/pengabdian_lppm"
        );
        setDatas(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDatas();
  }, []);

  return (
    <Sidebar breadcrumbs={breadcrumbs}>
      <Flex className="h-fit flex-col gap-3">
        <Box className="bg-secondaryGray-300 rounded-xl py-5 px-10">
          <h2 className="flex items-center gap-2 font-semibold text-xl">
            <FaHandsHelping className="text-brandTabs-300" /> Pengabdian
          </h2>
        </Box>
        <Box className="bg-secondaryGray-300 rounded-xl">
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
                {datas ? (
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
                ) : (
                  <Tr>
                    <Td>
                      <p className="px-10">Loading Data...</p>
                    </Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </Sidebar>
  );
};

export default Pengabdian;
