import React, { useEffect, useState } from "react";
import { getCabins } from "../services/apicabins";
import CabinTable from "../features/CabinTable";
import CabinForm from "../features/CabinForm";

const Cabins = () => {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
    console.log("Cabin");
  }, []);

  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div>Cabins</div>
      <div>
        <CabinTable />{" "}
      </div>
      <div>
        <button onClick={() => setShowForm((form) => !form)}>Add Cabin</button>
      </div>
      <div>{showForm && <CabinForm />}</div>
    </>
  );
};

export default Cabins;
