import AkreditasiBab1 from "../../../components/input/akreditasiBab1";
import Sidebar from "../../../layout/sidebar";

const InputAkreditasi = () => {
  const breadcrumbs = ["Input Data", "Akreditasi"];
  return <Sidebar breadcrumbs={breadcrumbs}><AkreditasiBab1 /></Sidebar>;
};

export default InputAkreditasi;
