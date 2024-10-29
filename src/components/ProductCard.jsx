import React from "react";
import { useState } from "react";
import { useDeleteProduct } from "../services/mutations";
import EditProductForm from "./EditProductForm";
import "./ProductCard.css";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";

//import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

// eslint-disable-next-line
function ProductCard({ product }) {
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const { mutate } = useDeleteProduct();

  const deleteHandler = (id) => {
    const data = {
      ids: [id],
    };

    console.log(data);

    mutate(
      { data },
      {
        onSuccess: (data) => {
          console.log(data);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <>
      <li className="item">
        {/* eslint-disable-next-line */}
        <p>{product?.name}</p>
        <p>{product?.quantity}</p>
        <p>{product?.price}</p>
        {/* eslint-disable-next-line */}

        <button
          onClick={() => {
            setModalEditOpen(true);
          }}
        >
          <EditNoteIcon sx={{ color: "blue" }} />
        </button>
        <button onClick={() => deleteHandler(product?.id)}>
          <DeleteOutlineIcon sx={{ color: "red" }} />
        </button>
      </li>

      {modalEditOpen && (
        <EditProductForm
          data={product}
          closeModal={() => setModalEditOpen(false)}
        />
      )}
    </>
  );
}

export default ProductCard;
