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

const Magang = () => {
  const [year, setYear] = useState(2022);
  const breadcrumbs = ["Data Table", "Doc Mahasiswa", "Magang"];
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
          {year === 2022 ? (
            <Box className="px-10 py-5 grid xl:grid-cols-2 gap-2">
              <Image
                className="aspect-video w-full object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/1-ndyA7w5ZaZURvhJxOSTNIFunXfpolSy=w1367-h888-iv1"
                alt="Dan Abramov"
              />
              <Image
                className="aspect-video w-full object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/17343n6ERQKCcvSK5_5u3eoz94nn0vNYn=w1367-h888-iv1"
                alt="Dan Abramov"
              />
              <Image
                className="aspect-video w-full object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/19vmn1RZAZJcv3AhjMA-SuCLY-qqmACrd=w1367-h888-iv1"
                alt="Dan Abramov"
              />
              <Image
                className="aspect-video w-full object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/1s7SlTPdPstwprLeRsBgqml5xzzFG0h4Y=w1367-h888-iv1"
                alt="Dan Abramov"
              />
              <Image
                className="aspect-video w-full object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/1F_eiWRaWUS56uQ-eM06d6XpaQmMR3nXx=w1367-h888-iv1"
                alt="Dan Abramov"
              />
              <Image
                className="aspect-video w-full object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/1VAf3bBVQxds4yLZWYGPOfsOGG-aFnkN1=w1367-h888-iv1"
                alt="Dan Abramov"
              />
            </Box>
          ) : (
            <Box className="px-10 py-5 grid xl:grid-cols-2 gap-2">
              <Image
                className="aspect-video w-full object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/1y7EAvWngVbHdqCH0VtPz7E5Pp-jEW4wL=w1367-h888-iv1"
                alt="Dan Abramov"
              />
              <Image
                className="aspect-video w-full object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/1y5YBHvlWUrRkzbr1rpXmpy9gbtYwRipH=w1367-h888-iv1"
                alt="Dan Abramov"
              />
              <Image
                className="aspect-video w-full object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/1z9zv2kJt80pJCOJow8TJkysdld9TpQX6=w1367-h888-iv1"
                alt="Dan Abramov"
              />
              <Image
                className="aspect-video w-full object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/1xR7CO14mqgqFldbI4ewZ1SfKuVM7HI5u=w1367-h888-iv1"
                alt="Dan Abramov"
              />
              <Image
                className="aspect-video w-full object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/1xTcSYhdFNYIK1z7qUmjDIGMjOCkvmy9q=w1367-h888-iv1"
                alt="Dan Abramov"
              />
              <Image
                className="aspect-video w-full object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src="https://lh3.google.com/u/0/d/1wTZmgewlZmBeV2OUMKSE4MHmsnuv6Mo1=w1367-h888-iv1"
                alt="Dan Abramov"
              />
            </Box>
          )}
        </Box>
      </Flex>
    </Sidebar>
  );
};

export default Magang;
