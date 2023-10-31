import Sidebar from "../../../layout/sidebar";
import { Flex } from "@chakra-ui/react";

import TamplatePenelitian from "../../../components/inputPenelitian/tamplate"

const InputPenelitian = () => {
  const breadcrumbs = ["Input Data", "Download", "Input Penelitian"];

  return (
    <Sidebar breadcrumbs={breadcrumbs}>
      <Flex className="h-fit flex-col gap-3">
        <TamplatePenelitian
          endpoint={"penelitian_lppm"}
          title={"Input Penelitian"}
        />
      </Flex>
    </Sidebar>
  );
};

export default InputPenelitian;
