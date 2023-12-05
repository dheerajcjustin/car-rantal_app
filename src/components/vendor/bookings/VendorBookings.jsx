import React from "react";
import VendorBookingCard from "./VendorBookingCard";

const VendorBookings = ({ data, title, mutate, setLoading }) => {
      console.log(" valies data tiltel", title, data);
      return (
            <div className="h-36 bg-slate-300 text-center sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 bg-white gap-5 p-5">
                        {data && data?.length > 1 ? (
                              data.map((car) => (
                                    <VendorBookingCard
                                          setLoading={setLoading}
                                          mutate={mutate}
                                          data={car}
                                    />
                              ))
                        ) : (
                              <p className="text-xl"> no {title}</p>
                        )}
                  </div>
            </div>
      );
};

export default VendorBookings;
