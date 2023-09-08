// src/ColorPalettePage.js
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ColorPellete from "./colorPellete";
import Home from "./pages/home";
import { ChakraProvider } from "@chakra-ui/react";
import Makrab from "./pages/data/mahasiswa/makrab";
import Sosialisasi from "./pages/data/mahasiswa/sosialisasi";
import Turnament from "./pages/data/mahasiswa/turnament";
import Kurikulums from "./pages/data/jurusan/kurikulum";
import Karya from "./pages/data/jurusan/karya";
import Akreditasi from "./pages/data/akreditasi/akreditasi";
import Formulir from "./pages/data/mutu/formulir";
import Standar from "./pages/data/mutu/standar";
import Kebijakan from "./pages/data/mutu/kebijakan";
import Manual from "./pages/data/mutu/manual";
import Penelitian from "./pages/data/lppm/penelitian";
import Pengabdian from "./pages/data/lppm/pengabdian";
import Jurnal from "./pages/data/lppm/jurnal";
import Haki from "./pages/data/lppm/haki";
import RoadMap from "./pages/data/lppm/roadMap";
import Pedoman from "./pages/data/lppm/pedoman";
import Renstra from "./pages/data/lppm/renstra";
import Bpk from "./pages/data/download/bpk";
import Rps from "./pages/data/download/rps";
import KontrakKuliah from "./pages/data/download/kontrakKuliah";
import SertifikatDosen from "./pages/data/download/sertifikatDosen";
import Sertifikat from "./pages/data/download/sertifikat";
import SertifikatDocument from "./pages/data/download/sertifikatDocument";
import InputBpk from "./pages/input/download/inputBpk";
import InputRps from "./pages/input/download/inputRps";
import InputKontrakKuliah from "./pages/input/download/inputKontrakKuliah";
import InputPenelitian from "./pages/input/lppm/inputPenelitian";
import InputPengabdian from "./pages/input/lppm/inputPengabdian";
import InputJurnal from "./pages/input/lppm/inputJurnal";
import InputHaki from "./pages/input/lppm/inputHaki";
import InputRoadmap from "./pages/input/lppm/inputRoadmap";
import InputPedoman from "./pages/input/lppm/inputPedoman";
import InputRenstra from "./pages/input/lppm/inputRenstra";
import InputAkreditasi from "./pages/input/akreditasi/inputAkreditasi";
import InputFormulir from "./pages/input/mutu/inputFormulir";
import InputKebijakan from "./pages/input/mutu/inputKebijakan";
import InputStandar from "./pages/input/mutu/inputStandar";
import InputManual from "./pages/input/mutu/inputManual";
import Magang from "./pages/data/mahasiswa/magang";
import Seminar from "./pages/data/mahasiswa/seminar";
import Webinar from "./pages/data/mahasiswa/webinar";
import Hmj from "./pages/data/mahasiswa/hmj";
import Jadwal from "./pages/data/jurusan/jadwal";
import Dosen from "./pages/data/informasi/dosen";
import Mahasiswa from "./pages/data/informasi/mahasiswa";
import SaranaPrasarana from "./pages/data/sarana/saranaPrasarana";
import InputKurikulums from "./pages/input/jurusan/inputKurikulum";
import InputMakrab from "./pages/input/mahasiswa/inputMakrab";
import DocInputAkreditasi from "./pages/doc/docInputAkreditasi";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/data/makrab", element: <Makrab /> },
  { path: "/data/magang", element: <Magang /> },
  { path: "/data/seminar", element: <Seminar /> },
  { path: "/data/webinar", element: <Webinar /> },
  { path: "/data/hmj", element: <Hmj /> },
  { path: "/data/sosialisasi", element: <Sosialisasi /> },
  { path: "/data/kompetisi-game", element: <Turnament /> },
  { path: "/data/kurikulum", element: <Kurikulums /> },
  { path: "/data/karya", element: <Karya /> },
  { path: "/data/jadwal", element: <Jadwal /> },
  { path: "/data/akreditasi", element: <Akreditasi /> },
  { path: "/data/sarana-prasarana", element: <SaranaPrasarana /> },
  { path: "/data/dosen", element: <Dosen /> },
  { path: "/data/mahasiswa", element: <Mahasiswa /> },
  { path: "/data/formulir", element: <Formulir /> },
  { path: "/data/standar", element: <Standar /> },
  { path: "/data/kebijakan", element: <Kebijakan /> },
  { path: "/data/manual", element: <Manual /> },
  { path: "/data/penelitian", element: <Penelitian /> },
  { path: "/data/pengabdian", element: <Pengabdian /> },
  { path: "/data/jurnal", element: <Jurnal /> },
  { path: "/data/haki", element: <Haki /> },
  { path: "/data/roadmap", element: <RoadMap /> },
  { path: "/data/pedoman", element: <Pedoman /> },
  { path: "/data/renstra", element: <Renstra /> },
  { path: "/data/bpk", element: <Bpk /> },
  { path: "/data/rps", element: <Rps /> },
  { path: "/data/kontrak-kuliah", element: <KontrakKuliah /> },
  { path: "/data/sertifikat-dosen", element: <SertifikatDosen /> },
  { path: "/data/sertifikat-documen", element: <SertifikatDocument /> },
  { path: "/data/sertifikat", element: <Sertifikat /> },
  { path: "/input/data/makrab", element: <InputMakrab /> },
  { path: "/input/data/kurikulum", element: <InputKurikulums /> },
  { path: "/input/data/bpk", element: <InputBpk /> },
  { path: "/input/data/rps", element: <InputRps /> },
  { path: "/input/data/kontrak-kuliah", element: <InputKontrakKuliah /> },
  { path: "/input/data/penelitian", element: <InputPenelitian /> },
  { path: "/input/data/pengabdian", element: <InputPengabdian /> },
  { path: "/input/data/jurnal", element: <InputJurnal /> },
  { path: "/input/data/haki", element: <InputHaki /> },
  { path: "/input/data/roadmap", element: <InputRoadmap /> },
  { path: "/input/data/pedoman", element: <InputPedoman /> },
  { path: "/input/data/renstra", element: <InputRenstra /> },
  { path: "/input/data/akreditasi", element: <InputAkreditasi /> },
  { path: "/input/data/formulir", element: <InputFormulir /> },
  { path: "/input/data/kebijakan", element: <InputKebijakan /> },
  { path: "/input/data/standar", element: <InputStandar /> },
  { path: "/input/data/manual", element: <InputManual /> },
  {path: "/doc/akreditasi", element: <DocInputAkreditasi />},
  { path: "/color", element: <ColorPellete /> },
];

const ColorPalettePage = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default ColorPalettePage;
