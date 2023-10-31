import { Flex } from "@chakra-ui/react";
import Sidebar from "../../../layout/sidebar";
import IdentitasPengusul from "../../../components/inputAkreditasi/lkps/identitasPengusul";
import IdentitasTimPenyusun from "../../../components/inputAkreditasi/lkps/identitasTimPenyusun";
import PointLkps from "../../../components/inputAkreditasi/lkps/pointLkps";

const InputLkps = () => {
  const breadcrumbs = ["Input Data", "Akreditasi", "LKPS"];
  return (
    <Sidebar breadcrumbs={breadcrumbs}>
      <Flex className="flex-col gap-2">
        <IdentitasPengusul />
        <IdentitasTimPenyusun />
        <PointLkps />
      </Flex>
    </Sidebar>
  );
};

export default InputLkps;
