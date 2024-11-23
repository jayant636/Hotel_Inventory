import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getCabins } from "../services/apicabins";
import CabRow from "./CabRow";

const CabinTable = () => {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  if (isLoading) return <div>loading.....</div>;

  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            <th></th>
            <th>Cabin</th>
            <th>Capacity</th>
            <th>Price</th>
            <th>Discount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cabins.map((cab) => {
            return (
              <>
                <CabRow cab={cab} key={cab.id} />
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CabinTable;
