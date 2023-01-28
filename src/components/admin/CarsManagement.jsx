import React from "react";
import useSWR from "swr";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Skeleton,
} from "@chakra-ui/react";
import authInstance from "../../config/authInstance";
import { useState } from "react";
import Modal from "../UI/Modal";
import CarVerificationCard from "./CarVerificationCard";

const CarsManagement = () => {
  const [car, setCar] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const fetcher = (url) => authInstance.get(url).then((res) => res.data);
  // .catch((err) => console.log(err));
  const { data, error, isLoading } = useSWR(`/admin/carsList`, fetcher);
  const rowClickHandler = (car) => {
    console.log("cliked id is ", car);
    setCar(car);
    setModalShow(true);
  };
  const onClose = () => {
    setModalShow(false);
  };

  const arr = [34, 56, 87, 98];
  return (
    <div className="m-5 p-5">
      {modalShow && (
        <Modal onClose={onClose}>
          <CarVerificationCard car={car} />
        </Modal>
      )}
      <TableContainer>
        <Table variant="striped" colorScheme="yellow">
          <TableCaption>The List of cars and Details</TableCaption>
          <Thead>
            <Tr>
              <Th>Model Name</Th>
              <Th>seatNum</Th>
              <Th isNumeric> price</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {isLoading &&
              arr.map((value, index) => (
                <Tr key={value}>
                  <Td>
                    <Skeleton>
                      <div>contents wrapped</div>
                      <div>won't be visible</div>
                    </Skeleton>
                  </Td>
                  <Td>
                    <Skeleton></Skeleton>
                  </Td>
                  <Td>
                    <Skeleton>
                      <div>contents wrapped</div>
                      <div>won't be visible</div>
                    </Skeleton>
                  </Td>
                  <Td>
                    <Skeleton>
                      <div>contents wrapped</div>
                      <div>won't be visible</div>
                    </Skeleton>
                  </Td>
                </Tr>
              ))}

            {data &&
              data.map((car) => (
                <Tr
                  className=" group   duration-1000"
                  onClick={() => rowClickHandler(car)}
                  key={car._id}
                >
                  <Td className="group-hover:text-xl  ">{car.name}</Td>
                  <Td className="group-hover:text-xl ">{car?.seatNum}</Td>
                  <Td className="group-hover:text-xl " isNumeric>
                    ₹{car.price}
                  </Td>
                  <Td className="group-hover:text-xl ">{car.verified}</Td>
                </Tr>
              ))}
            {error && (
              <Tr>
                <Td>error</Td>
                <Td>error</Td>
                <Td isNumeric>error</Td>
                <Td>error</Td>
              </Tr>
            )}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Model Name</Th>
              <Th>seatNum</Th>
              <Th isNumeric> price</Th>
              <Th>Status</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CarsManagement;
