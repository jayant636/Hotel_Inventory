import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { createCabin } from "../services/apicabins";
import toast from "react-hot-toast";

const CabinForm = () => {
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const { errors } = formState;
  console.log(errors);

  const queryClient = useQueryClient();
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("New Cabins added successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function SubmitHandler(data) {
    mutate({ ...data, image: data.image.at(0) });
    console.log(data);
  }

  function errorHandler(err) {
    console.log(err);
  }

  return (
    <div className="pt-5 pb-5">
      <form onSubmit={handleSubmit(SubmitHandler, errorHandler)}>
        <div className="border-slate-600 flex ">
          <label htmlFor="name">Cabin Name</label>
          <input
            type="text"
            id="name"
            disabled={isCreating}
            className="border-slate-600 pl-4 ml-4"
            placeholder="Enter cabinName"
            {...register("name", { required: "This field is required" })}
          />
          {errors?.name?.message && <div>{errors.name.message}</div>}
        </div>
        <div className="border-slate-600 flex ">
          <label htmlFor="maxCapacity">Max Capacity</label>
          <input
            type="text"
            id="maxCapacity"
            disabled={isCreating}
            className="border-slate-600 pl-4 ml-4"
            placeholder="Enter Max Capacity"
            {...register("maxCapacity", { required: "This field is required" })}
          />{" "}
          {errors?.maxCapacity?.message && (
            <div>{errors.maxCapacity.message}</div>
          )}
        </div>
        <div className="border-slate-600 flex ">
          <label htmlFor="regularPrice">Regular Price</label>
          <input
            type="number"
            id="regularPrice"
            disabled={isCreating}
            className="border-slate-600 pl-4 ml-4"
            placeholder="Enter Regular Price"
            {...register("regularPrice", {
              required: "This field is required",
            })}
          />
          {errors?.regularPrice?.message && (
            <div>{errors.regularPrice.message}</div>
          )}
        </div>
        <div className="border-slate-600 flex ">
          <label htmlFor="discount">Discount </label>
          <input
            type="number"
            id="discount"
            disabled={isCreating}
            className="border-slate-600 pl-4 ml-4"
            placeholder="Enter Discount"
            {...register("discount", {
              required: "This field is required",
              validate: (value) =>
                value < getValues().regularPrice ||
                "Discount should be less than Regular price",
            })}
          />
          {errors?.discount?.message && <div>{errors.discount.message}</div>}
        </div>
        <div className="border-slate-600 flex ">
          <label htmlFor="description">Description </label>
          <input
            type="text"
            id="description"
            disabled={isCreating}
            className="border-slate-600 pl-4 ml-4"
            placeholder="Enter Description"
            {...register("description", { required: "This field is required" })}
          />
          {errors?.description?.message && (
            <div>{errors.description.message}</div>
          )}
        </div>
        <div>
          <input
            type="file"
            id="image"
            alt="image"
            {...register("image", { required: "This image is required" })}
          />
        </div>
        <div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            disabled={isCreating}
          >
            Add Me
          </button>
        </div>
      </form>
    </div>
  );
};

export default CabinForm;
