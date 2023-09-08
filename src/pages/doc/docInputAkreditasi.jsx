import React from 'react'
import Sidebar from '../../layout/sidebar'
import { Flex, Img, Text } from '@chakra-ui/react'
import tutor from "../../assets/tutor.mp4"
import { Link } from 'react-router-dom'

const DocInputAkreditasi = () => {
  const breadcrumbs = ["Dokumentasi Input Akreditasi"]
  return (
    <Sidebar breadcrumbs={breadcrumbs}>
      <Flex className="flex-col gap-5 px-5">
        <video controls>
          <source src={tutor} type="video/mp4" />
        </video>
      </Flex>
    </Sidebar>
  );
}

export default DocInputAkreditasi