import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { deleteCabins } from "../services/apicabins";
import toast from "react-hot-toast";

const CabRow = ({ cab }) => {
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation({
    mutationFn: deleteCabins,
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <tr>
      <td>
        <img src={cab.image} alt="" width="150" height="150" />
      </td>
      <td>{cab.name}</td>
      <td>{cab.maxCapacity}</td>
      <td>{cab.regularPrice}</td>
      <td>{cab.discount}</td>
      <td>
        <button onClick={() => mutate(cab.id)}>Remove</button>
      </td>
    </tr>
  );
};

export default CabRow;
