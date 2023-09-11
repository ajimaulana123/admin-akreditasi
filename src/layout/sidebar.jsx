import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Center,
  Divider,
  Flex,
  List,
  ListIcon,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { AiFillBuild, AiFillHome, AiFillPieChart } from "react-icons/ai";
import { RiCollageFill } from "react-icons/ri";
import {
  BsFiletypeDoc,
  BsFillLightbulbFill,
  BsInfoSquareFill,
  BsPeopleFill,
  BsFillChatDotsFill,
} from "react-icons/bs";
import {
  FaCheckCircle,
  FaDownload,
  FaMicroscope,
  FaDesktop,
  FaTrophy,
  FaBookOpen,
  FaCalendarAlt,
  FaPalette,
  FaFileSignature,
  FaRegClipboard,
  FaBalanceScaleLeft,
  FaFlask,
  FaHandsHelping,
  FaBookReader,
  FaShieldAlt,
  FaMapSigns,
  FaFileAlt,
  FaChartLine,
  FaFilePowerpoint,
  FaChalkboardTeacher,
  FaFileContract,
  FaCertificate,
  FaAward,
  FaNetworkWired,
} from "react-icons/fa";
import { LuFileInput } from "react-icons/lu";
import { GiPartyFlags } from "react-icons/gi";
import { MdWork, MdEventNote, MdMenuBook } from "react-icons/md";

const menuItems = [
  {
    icon: AiFillHome,
    text: "Main Dashboard",
    path: "/",
  },
  {
    icon: AiFillPieChart,
    text: "Data Tables",
    subMenu: [
      {
        text: "Doc Mahasiswa",
        icon: RiCollageFill,
        subMenuNested: [
          { text: "Makrab", icon: GiPartyFlags, path: "/data/makrab" },
          { text: "Magang", icon: MdWork, path: "/data/magang" },
          {
            text: "Sosialisasi",
            icon: BsFillChatDotsFill,
            path: "/data/sosialisasi",
          },
          { text: "Seminar", icon: MdEventNote, path: "/data/seminar" },
          { text: "Webinar", icon: FaDesktop, path: "/data/webinar" },
          {
            text: "Kompetisi Game",
            icon: FaTrophy,
            path: "/data/kompetisi-game",
          },
          { text: "KAI", icon: RiCollageFill },
          { text: "HMJ", icon: FaNetworkWired, path: "/data/hmj" },
        ],
      },
      {
        text: "Doc Jurusan",
        icon: AiFillBuild,
        subMenuNested: [
          { text: "Kurikulum", icon: FaBookOpen, path: "/data/kurikulum" },
          { text: "Jadwal", icon: FaCalendarAlt, path: "/data/jadwal" },
          { text: "Karya Mahasiswa", icon: FaPalette, path: "/data/karya" },
        ],
      },
      { text: "Akreditasi", icon: BsFiletypeDoc, path: "/data/akreditasi" },
      { text: "Sarana Prasarana", icon: BsFillLightbulbFill, path: "/data/sarana-prasarana" },
      { text: "Informasi Dosen", icon: BsInfoSquareFill, path: "/data/dosen" },
      {
        text: "Informasi Mahasiswa",
        icon: BsInfoSquareFill,
        path: "/data/mahasiswa",
      },
      {
        text: "Penjaminan Mutu",
        icon: FaCheckCircle,
        subMenuNested: [
          { text: "Formulir", icon: FaFileSignature, path: "/data/formulir" },
          { text: "Standar", icon: FaRegClipboard, path: "/data/standar" },
          {
            text: "Kebijakan",
            icon: FaBalanceScaleLeft,
            path: "/data/kebijakan",
          },
          { text: "Manual", icon: MdMenuBook, path: "/data/manual" },
        ],
      },
      {
        text: "LPPM",
        icon: FaMicroscope,
        subMenuNested: [
          { text: "Penelitian", icon: FaFlask, path: "/data/penelitian" },
          {
            text: "Pengabdian",
            icon: FaHandsHelping,
            path: "/data/pengabdian",
          },
          { text: "Jurnal", icon: FaBookReader, path: "/data/jurnal" },
          { text: "HAKI", icon: FaShieldAlt, path: "/data/haki" },
          { text: "Road Map", icon: FaMapSigns, path: "/data/roadmap" },
          { text: "Pedoman", icon: FaFileAlt, path: "/data/pedoman" },
          { text: "Renstra", icon: FaChartLine, path: "/data/renstra" },
        ],
      },
      {
        text: "Download",
        icon: FaDownload,
        subMenuNested: [
          { text: "BPK", icon: FaFilePowerpoint, path: "/data/bpk" },
          { text: "RPS", icon: FaChalkboardTeacher, path: "/data/rps" },
          {
            text: "Kontrak Kuliah",
            icon: FaFileContract,
            path: "/data/kontrak-kuliah",
          },
          {
            text: "Sertifikat Dosen",
            icon: FaCertificate,
            path: "/data/sertifikat-dosen",
          },
          {
            text: "Sertifikat Dokumen",
            icon: FaCertificate,
            path: "/data/sertifikat-documen",
          },
          { text: "Sertifikat", icon: FaAward, path: "/data/sertifikat" },
        ],
      },
    ],
  },
  {
    icon: LuFileInput,
    text: "Input Datas",
    subMenu: [
      {
        text: "Doc Mahasiswa",
        icon: RiCollageFill,
        subMenuNested: [
          { text: "Makrab", icon: GiPartyFlags, path: "/input/data/makrab" },
          { text: "Magang", icon: MdWork },
          { text: "Sosialisasi", icon: BsFillChatDotsFill },
          { text: "Seminar", icon: MdEventNote },
          { text: "Webinar", icon: FaDesktop },
          { text: "Kompetisi Game", icon: FaTrophy },
          { text: "KAI", icon: RiCollageFill },
        ],
      },
      {
        text: "Doc Jurusan",
        icon: AiFillBuild,
        subMenuNested: [
          { text: "Kurikulum", icon: FaBookOpen, path: "/input/data/kurikulum" },
          { text: "Jadwal", icon: FaCalendarAlt },
          { text: "Karya Mahasiswa", icon: FaPalette },
        ],
      },
      {
        text: "Akreditasi",
        icon: BsFiletypeDoc,
        path: "/input/data/akreditasi",
      },
      { text: "Sarana Prasarana", icon: BsFillLightbulbFill },
      { text: "Informasi Dosen", icon: BsInfoSquareFill },
      { text: "Informasi Mahasiswa", icon: BsInfoSquareFill },
      {
        text: "Penjaminan Mutu",
        icon: FaCheckCircle,
        subMenuNested: [
          {
            text: "Formulir",
            icon: FaFileSignature,
            path: "/input/data/formulir",
          },
          {
            text: "Standar",
            icon: FaRegClipboard,
            path: "/input/data/standar",
          },
          {
            text: "Kebijakan",
            icon: FaBalanceScaleLeft,
            path: "/input/data/kebijakan",
          },
          { text: "Manual", icon: MdMenuBook, path: "/input/data/manual" },
        ],
      },
      {
        text: "LPPM",
        icon: FaMicroscope,
        subMenuNested: [
          { text: "Penelitian", icon: FaFlask, path: "/input/data/penelitian" },
          {
            text: "Pengabdian",
            icon: FaHandsHelping,
            path: "/input/data/pengabdian",
          },
          { text: "Jurnal", icon: FaBookReader, path: "/input/data/jurnal" },
          { text: "HAKI", icon: FaShieldAlt, path: "/input/data/haki" },
          { text: "Road Map", icon: FaMapSigns, path: "/input/data/roadmap" },
          { text: "Pedoman", icon: FaFileAlt, path: "/input/data/pedoman" },
          { text: "Renstra", path: "/input/data/renstra" },
        ],
      },
      {
        text: "Download",
        icon: FaDownload,
        subMenuNested: [
          { text: "BPK", icon: FaFilePowerpoint, path: "/input/data/bpk" },
          { text: "RPS", icon: FaChalkboardTeacher, path: "/input/data/rps" },
          {
            text: "Kontrak Kuliah",
            icon: FaFileContract,
            path: "/input/data/kontrak-kuliah",
          },
          { text: "Sertifikat Dosen", icon: FaCertificate },
          { text: "Sertifikat Dokumen", icon: FaCertificate },
          { text: "Sertifikat", icon: FaAward },
        ],
      },
    ],
  },
  {
    icon: BsPeopleFill,
    text: "Profil",
    path: "/",
  },
];

const Sidebar = ({ breadcrumbs, children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box className="flex w-full h-screen">
      <Box
        className={`w-[300px] px-5 py-7 overflow-y-auto ${
          colorMode === "dark" ? "bg-secondaryGray-900" : "bg-secondaryGray-300"
        }`}
      >
        <div className="text-center py-10">
          <h1 className="text-2xl font-extrabold">MANAJEMEN INFORMATIKA</h1>
        </div>
        <Divider orientation="horizontal" />
        <Flex direction="column" className="py-5 gap-3">
          {menuItems.map((menuItem, index) =>
            menuItem.subMenu?.length > 0 ? (
              <Accordion key={index} allowMultiple>
                <AccordionItem className="border-none">
                  <AccordionButton className="p-0 hover:bg-transparent">
                    <Flex className="gap-3 w-full border-r-4 border-brandTabs-300">
                      <Center className="w-fit ">
                        {<menuItem.icon className="text-brandTabs-300" />}
                      </Center>
                      <Center className="font-semibold flex-1 justify-start">
                        <Text>{menuItem.text}</Text>
                      </Center>
                    </Flex>
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    {menuItem.subMenu?.map((menuNested, index) =>
                      menuNested.subMenuNested?.length > 0 ? (
                        <Accordion allowMultiple key={index}>
                          <AccordionItem className="border-none">
                            <AccordionButton className="p-0 hover:bg-transparent my-2">
                              <Flex className="gap-3 w-full">
                                <Center className="w-fit ">
                                  {
                                    <menuNested.icon className="text-green-500" />
                                  }
                                </Center>
                                <Center className="font-semibold flex-1 justify-start">
                                  <Text>{menuNested.text}</Text>
                                </Center>
                              </Flex>
                            </AccordionButton>
                            <AccordionPanel>
                              <List spacing={3}>
                                {menuNested.subMenuNested?.map(
                                  (subMenuItemNested, subIndexNested) => (
                                    <ListItem key={subIndexNested}>
                                      <ListIcon
                                        as={subMenuItemNested.icon}
                                        color="blue.500"
                                      />
                                      <Link to={subMenuItemNested.path}>
                                        {subMenuItemNested.text}
                                      </Link>
                                    </ListItem>
                                  )
                                )}
                              </List>
                            </AccordionPanel>
                          </AccordionItem>
                        </Accordion>
                      ) : (
                        <Flex className="gap-3 w-full my-2" key={index}>
                          <Center className="w-fit ">
                            {<menuNested.icon className="text-green-500" />}
                          </Center>
                          <Center className="font-semibold flex-1 justify-start">
                            <Link to={menuNested.path}>{menuNested.text}</Link>
                          </Center>
                        </Flex>
                      )
                    )}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            ) : (
              <Flex
                key={index}
                className="gap-3 border-r-4 border-brandTabs-300"
              >
                <Center className="w-fit ">
                  {<menuItem.icon className="text-brandTabs-300" />}
                </Center>
                <Center className="font-semibold flex-1 justify-start">
                  <Link to={menuItem.path}>{menuItem.text}</Link>
                </Center>
              </Flex>
            )
          )}
        </Flex>
      </Box>
      <Box
        className={`flex-1 px-5 overflow-y-auto overflow-x-hidden w-fit ${
          colorMode === "dark" ? "bg-brandTabs-900" : "bg-blue-100"
        }`}
      >
        <Flex className="backdrop-blur-sm w-full px-5 py-5 justify-between items-center">
          <Box className="flex-1">
            <Breadcrumb>
              <BreadcrumbItem>
                <Text>Pages</Text>
              </BreadcrumbItem>
              {Array.isArray(breadcrumbs) ? (
                breadcrumbs?.map((item, index) => (
                  <BreadcrumbItem key={index}>
                    <Text>{item}</Text>
                  </BreadcrumbItem>
                ))
              ) : (
                <BreadcrumbItem>
                  <Text>{breadcrumbs}</Text>
                </BreadcrumbItem>
              )}
            </Breadcrumb>
            <h2 className="text-4xl font-semibold">
              {Array.isArray(breadcrumbs)
                ? breadcrumbs[breadcrumbs.length - 1]
                : breadcrumbs}
            </h2>
          </Box>
          <Flex className="items-center gap-3">
            <Switch
              isChecked={colorMode === "dark"}
              onChange={toggleColorMode}
            />
          </Flex>
        </Flex>
        <Box className="pb-10 overflow-y-auto">{children}</Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
