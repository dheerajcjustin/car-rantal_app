import React, { useState, useCallback, useRef, useEffect } from "react";
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
import usePagination from "../../helpers/usePagination";

const VendorManagement = () => {
      const [pageIndex, setPageIndex] = useState(1);
      const { loading, error, lists, hasMore } = usePagination(
            "/admin/vendors?page=",
            pageIndex
      );
      const observer = useRef();
      const arr = [34, 45, 7, 89];
      const lastVendorRef = useCallback(
            (node) => {
                  if (loading) return;
                  if (observer.current) observer.current.disconnect();
                  observer.current = new IntersectionObserver((entires) => {
                        if (entires[0].isIntersecting && hasMore) {
                              setPageIndex((prevIndex) => prevIndex + 1);
                        }
                  });
                  if (node) observer.current.observe(node);
            },
            [hasMore]
      );

      return (
            <div className="mr-5 ml-5  p-5">
                  {error && <p>error while loading</p>}

                  <TableContainer>
                        <Table variant="striped" colorScheme="yellow">
                              <TableCaption>
                                    The List of cars and Details
                              </TableCaption>
                              <Thead>
                                    <Tr>
                                          <Th>Sn</Th>
                                          <Th>Name</Th>
                                          <Th> mobile</Th>
                                          <Th>Block</Th>
                                    </Tr>
                              </Thead>
                              <Tbody>
                                    {lists.map((vendor, j) =>
                                          lists.length === j + 1 ? (
                                                <Tr
                                                      key={vendor?._id}
                                                      ref={lastVendorRef}
                                                >
                                                      <Td>{j + 1}</Td>
                                                      <Td>{vendor?.name}</Td>
                                                      <Td>{vendor?.mobile}</Td>
                                                      <Td>
                                                            <button
                                                                  className="bg-yellow-400 p-3 rounded-lg"
                                                                  // onClick={() => deleteButtonHandler(loca._id)}
                                                            >
                                                                  Block
                                                            </button>
                                                      </Td>
                                                </Tr>
                                          ) : (
                                                <Tr key={vendor?._id}>
                                                      <Td>{j + 1}</Td>
                                                      <Td>{vendor?.name}</Td>
                                                      <Td>{vendor?.mobile}</Td>
                                                      <Td>
                                                            <button
                                                                  className="bg-yellow-400 p-3 rounded-lg"
                                                                  // onClick={() => deleteButtonHandler(loca._id)}
                                                            >
                                                                  Block
                                                            </button>
                                                      </Td>
                                                </Tr>
                                          )
                                    )}
                                    {loading &&
                                          arr.map((loca, index) => (
                                                <Tr key={index}>
                                                      <Td>
                                                            {" "}
                                                            <Skeleton>
                                                                  <div className="h-2"></div>
                                                            </Skeleton>
                                                      </Td>
                                                      <Td>
                                                            <Skeleton>
                                                                  <div className="h-2"></div>
                                                            </Skeleton>
                                                      </Td>
                                                      <Td>
                                                            <Skeleton>
                                                                  <div className="h-2"></div>
                                                            </Skeleton>
                                                      </Td>

                                                      <Td>
                                                            <Skeleton>
                                                                  <button
                                                                        className="bg-yellow-400 p-3 rounded-lg"
                                                                        // onClick={() => deleteButtonHandler(loca._id)}
                                                                  >
                                                                        Delete
                                                                  </button>
                                                            </Skeleton>
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
                        <button
                              onClick={() => setSize(size + 1)}
                              className="bg-banana"
                        >
                              Load More
                        </button>
                  </TableContainer>
            </div>
      );
};

export default VendorManagement;
