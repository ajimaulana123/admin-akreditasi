import { Flex } from "@chakra-ui/react";
import Bab1 from "../../../components/inputAkreditasi/bab1";
import Bab2 from "../../../components/inputAkreditasi/bab2";
import Sidebar from "../../../layout/sidebar";
import Bab3 from "../../../components/inputAkreditasi/bab3";

const InputAkreditasi = () => {
  const breadcrumbs = ["Input Data", "Akreditasi"];
  return (
    <Sidebar breadcrumbs={breadcrumbs}>
      <Flex className="flex-col gap-2">
        <Bab1 />
        <Bab2 />
        <Bab3 />
      </Flex>
    </Sidebar>
  );
};

export default InputAkreditasi;
