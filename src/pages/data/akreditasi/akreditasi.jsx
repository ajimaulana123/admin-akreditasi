import Sidebar from "../../../layout/sidebar";
import { Flex } from "@chakra-ui/react";
import Bab1 from "../../../components/akreditasi/bab1"
import Bab2 from "../../../components/akreditasi/bab2"
import Bab3 from "../../../components/akreditasi/bab3"

const Akreditasi = () => {
  const breadcrumbs = ["Data Table", "Akreditasi"];
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

export default Akreditasi;
