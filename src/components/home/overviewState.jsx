import React from "react";
import PieChart from "../pieChart";
import { Button, useColorMode } from "@chakra-ui/react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const OverviewState = () => {
  const { colorMode } = useColorMode();
  const stateMahasiswa = {
    labels: ["Alumni", "Aktif"],
    data: [150, 60],
  };
  const stateGenderMahasiswa = {
    labels: ["Laki - Laki", "Perempuan"],
    data: [130, 80],
  };

  return (
    <div className="grid grid-cols-4 gap-3 h-fit w-full">
      <div className="col-span-2 flex flex-col gap-2 p-2">
        <div
          className={`${
            colorMode === "dark"
              ? "bg-secondaryGray-900"
              : "bg-secondaryGray-300"
          } h-full rounded-md p-3 flex gap-3 items-center group`}
        >
          <div className="bg-brand-700 p-5 rounded-full">
            <FaChalkboardTeacher className="text-[30px] text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-md font-semibold">Jumlah Dosen</h2>
            <h2 className="text-3xl font-bold">20</h2>
          </div>
          <Button
            rightIcon={<AiOutlineArrowRight />}
            className="opacity-0 group-hover:opacity-100 duration-300"
          >
            Detail
          </Button>
        </div>
        <div className="h-full grid grid-cols-2 gap-2">
          <div
            className={`${
              colorMode === "dark"
                ? "bg-secondaryGray-900"
                : "bg-secondaryGray-300"
            } p-3 rounded-md flex gap-3 items-center`}
          >
            <div className="bg-brand-700 p-4 rounded-full">
              <FaChalkboardTeacher className="text-[20px] text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-md font-semibold">Mahasiswa Aktif</h2>
              <h2 className="text-3xl font-bold">60</h2>
            </div>
          </div>
          <div
            className={`${
              colorMode === "dark"
                ? "bg-secondaryGray-900"
                : "bg-secondaryGray-300"
            } p-3 rounded-md flex gap-3 items-center`}
          >
            <div className="bg-brand-700 p-4 rounded-full">
              <FaChalkboardTeacher className="text-[20px] text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-md font-semibold">Mahasiswa Alumni</h2>
              <h2 className="text-3xl font-bold">150</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <PieChart analiyze={stateMahasiswa} />
      </div>
      <div className="flex justify-center">
        <PieChart analiyze={stateGenderMahasiswa} />
      </div>
    </div>
  );
};

export default OverviewState;
