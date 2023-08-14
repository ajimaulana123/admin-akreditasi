import React, { useEffect, useState } from "react";
import Sidebar from "../../../layout/sidebar";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  IconButton,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { BsFiletypeDocx, BsFillCalendarDateFill, BsThreeDotsVertical } from "react-icons/bs";
import { FaBookOpen, FaPalette } from "react-icons/fa";
import axios from "axios";

const CardKarya = ({data}) => {
  function extractVideoId(url) {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : null;
  }

  const videoId = extractVideoId(data.video);

  return (
    <Card className="max-w-[400px]">
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Box>
              <Heading size="sm">{data.nama}</Heading>
              <Text>Mahasiswa {data.tahun}</Text>
            </Box>
          </Flex>
          {data.doc && data.doc === "https://" ? null : (
            <IconButton
              variant="ghost"
              aria-label="See menu"
              icon={<BsFiletypeDocx className="text-brandTabs-300 text-2xl" />}
            />
          )}
        </Flex>
      </CardHeader>
      <CardBody>
        <Text noOfLines={4} className="font-bold">
          {data.judul}
        </Text>
        <Text noOfLines={4}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          tempore nesciunt ipsa id, similique, facere obcaecati saepe accusamus
          tempora iste porro. Molestias distinctio ullam sit quaerat suscipit
          animi soluta quo!
        </Text>
      </CardBody>
      {videoId ? (
        <iframe
          className="w-full aspect-video rounded-b-md"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      ) : null}
    </Card>
  );
}

const Karya = () => {
  const [datas, setDatas] = useState(null);
  const [year, setYear] = useState(2022);
  const breadcrumbs = ["Data Table", "Doc Mahasiswa", "Karya Mahasiswa"];

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const { data } = await axios.get(
          "https://knowledgeable-painted-guarantee.glitch.me/karya_mahasiswa"
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
            <FaPalette className="text-brandTabs-300" /> Tahun :{" "}
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
            <h1 className="text-xl font-semibold">
              Recap Karya Mahasiswa {year}
            </h1>
          </Box>
          <Divider />
          <Box className="px-10 py-5 flex flex-wrap justify-center gap-3">
            {datas ? (
              datas.map((data, index) => {
                return(
                  <CardKarya key={index} data={data} />
                )
              })
            ) : (
              <Text>Loading....</Text>
            )}
          </Box>
        </Box>
      </Flex>
    </Sidebar>
  );
};

export default Karya;
