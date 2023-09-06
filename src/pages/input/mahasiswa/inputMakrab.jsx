import React, { useState } from "react";
import Sidebar from "../../../layout/sidebar";
import { BsFillCalendarDateFill } from "react-icons/bs";
import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const imageYearData = {
  2022: [
    {
      src: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Gambar 1 - Tahun 2022",
    },
    {
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Gambar 2 - Tahun 2022",
    },
  ],
  2021: [
    {
      src: "https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Gambar 1 - Tahun 2021",
    },
    {
      src: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Gambar 2 - Tahun 2021",
    },
  ],
};

const InputMakrab = () => {
  const [year, setYear] = useState(2022);
  const breadcrumbs = ["Input Data", "Doc Mahasiswa", "Input Makrab"];
  const { colorMode } = useColorMode();

  return (
    <Sidebar breadcrumbs={breadcrumbs}>
      <Flex className="h-fit flex-col gap-3">
        <Flex
          className={`${
            colorMode === "dark"
              ? "bg-secondaryGray-900"
              : "bg-secondaryGray-300"
          } rounded-xl py-5 px-10 justify-between items-center`}
        >
          <Box>
            <Text className="flex items-center gap-2 font-semibold text-xl">
              <BsFillCalendarDateFill className="text-brandTabs-300" /> Tahun :{" "}
            </Text>
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
          <IconButton colorScheme="green" icon={<FaPlus />} />
        </Flex>
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
          <Box className="px-10 py-5 grid xl:grid-cols-2 gap-2">
            {imageYearData[year].map((image, index) => {
              console.log(image);
              return (
                <Image
                  key={index}
                  className="aspect-video w-full object-cover rounded-xl border border-brandTabs-300 shadow-md"
                  src={image.src}
                  alt={image.alt}
                />
              );
            })}
          </Box>
        </Box>
      </Flex>
    </Sidebar>
  );
};

export default InputMakrab;
