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
      DrawerHeader,
      useToast,
} from "@chakra-ui/react";
import authInstance, { fetcher } from "../../config/authInstance";

const LocationTable = ({
      data,
      error,
      isLoading,
      mutate,
      setPickup,
      setShowLocation,
}) => {
      const toast = useToast();
      const deleteButtonHandler = async (id) => {
            try {
                  console.log(id);
                  const response = await authInstance.delete(
                        `/admin/location/${id}`,
                  );
                  console.log(response);
                  toast({
                        position: "top",
                        title: "Location Failled.",
                        description: "Failed to  Created  Location.",
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                  });
                  mutate();
            } catch (error) {
                  toast({
                        position: "top",
                        title: "Deletion Failled.",
                        description: "Failed to  delete  Location.",
                        status: "error",
                        duration: 2000,
                        isClosable: true,
                  });
            }
      };
      const pickupButtonHandler = (location) => {
            console.log("id is cliked is ", location);
            setPickup(location);
            setShowLocation(false);
      };

      return (
            <div className="m-5 p-5">
                  <TableContainer>
                        <Table variant="striped" colorScheme="yellow">
                              <TableCaption>
                                    The List of cars and Details
                              </TableCaption>
                              <Thead>
                                    <Tr>
                                          <Th>Sn</Th>
                                          <Th>Location</Th>
                                          <Th> image</Th>
                                          <Th>Manage Pickup</Th>

                                          <Th>Delete</Th>
                                    </Tr>
                              </Thead>
                              <Tbody>
                                    {data &&
                                          data.map((loca, index) => (
                                                <Tr key={loca._id}>
                                                      <Td>{index + 1}</Td>
                                                      <Td>{loca.location}</Td>
                                                      <Td>
                                                            <img
                                                                  src={
                                                                        loca.image
                                                                  }
                                                                  alt=""
                                                                  className="w-20 h-20"
                                                            />
                                                      </Td>
                                                      <Td
                                                            onClick={() =>
                                                                  pickupButtonHandler(
                                                                        loca,
                                                                  )
                                                            }
                                                      >
                                                            <button className="bg-green-400 p-3 rounded-lg">
                                                                  PickupPoints
                                                            </button>{" "}
                                                      </Td>
                                                      <Td>
                                                            <button
                                                                  className="bg-yellow-400 p-3 rounded-lg"
                                                                  onClick={() =>
                                                                        deleteButtonHandler(
                                                                              loca._id,
                                                                        )
                                                                  }
                                                            >
                                                                  Delete
                                                            </button>
                                                      </Td>
                                                </Tr>
                                          ))}
                              </Tbody>
                              <Tfoot>
                                    <Tr>
                                          <Th>Sn</Th>
                                          <Th>Location</Th>
                                          <Th> image</Th>
                                          <Th>
                                                <button>Delete</button>
                                          </Th>
                                    </Tr>
                              </Tfoot>
                        </Table>
                  </TableContainer>
            </div>
      );
};

export default LocationTable;
