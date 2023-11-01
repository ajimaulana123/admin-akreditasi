import { Flex } from "@chakra-ui/react";
import Sidebar from "../../../layout/sidebar";
import Bab1 from "../../../components/inputAkreditasi/bab1";
import Bab2 from "../../../components/inputAkreditasi/bab2";
import TamplateIdentitasPenyusun from "../../../components/inputAkreditasi/bab1/tamplateIdentitasPenyusun";

const InputLed = () => {
  const breadcrumbs = ["Input Data", "Akreditasi", "LED"];
  return (
    <Sidebar breadcrumbs={breadcrumbs}>
      <Flex className="flex-col gap-2">
        <TamplateIdentitasPenyusun
            endpoint={"identitas-pengusul-led"}
            title={"Identitas Pengusul"}
          />
        <Bab1 />
        <Bab2 />
      </Flex>
    </Sidebar>
  );
};

export default InputLed;
