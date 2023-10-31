import { Flex } from "@chakra-ui/react";
import Sidebar from "../../../layout/sidebar";
import Bab3 from "../../../components/inputAkreditasi/bab3";
import Bab1 from "../../../components/inputAkreditasi/bab1";
import Bab2 from "../../../components/inputAkreditasi/bab2";

const InputLed = () => {
  const breadcrumbs = ["Input Data", "Akreditasi", "LED"];
  return (
    <Sidebar breadcrumbs={breadcrumbs}>
      <Flex className="flex-col gap-2">
        <Bab1 />
        <Bab2 />
      </Flex>
    </Sidebar>
  );
};

export default InputLed;
