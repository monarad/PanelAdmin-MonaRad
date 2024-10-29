import { useState } from "react";

import { useCreateProduct } from "../services/mutations";
import "./AddProductForm.css"

function AddProductForm({closeModal,data}) {
  const [form, setForm] = useState({
    name: "",
    price: 0,
    quantity: 0,
  });

  const { mutate } = useCreateProduct();

  const changeHandler = (event) => {
    setForm((form) => ({ ...form, [event.target.name]: event.target.value }));
   // console.log(form)
  };

  const addHandler = (event) => {
    event.preventDefault();

    const { name, price } = form;

    if (!name || !price) return;

    mutate(form, {
      onSuccess: (data) => {
        console.log(data);
        closeModal()
      },
      onError: (error) => console.log(error),
    });
  };

  return (
    <div className="modal">
      <div className="container">
        <h1 className="title">ایجاد محصول جدید </h1>
        <form className="registration-form" onSubmit={addHandler}>
          <input
            type="text"
            name="name"
            placeholder="نام کالا"
            className="input-field"
            value={form.name}
            onChange={changeHandler}
          />

          <input
            type="number"
            name="price"
            placeholder="قیمت  "
            className="input-field"
            value={form.price}
            onChange={changeHandler}
          />
          <input
            type="number"
            name="quantity"
            placeholder="تعداد "
            className="input-field"
            value={form.quantity}
            onChange={changeHandler}
          />
          <div className="buttons">
            <button
              type="submit"
              className="submit-button1"
              
            >
              ایجاد
            </button>
            <button
              type="submit"
              className="submit-button2"
              onClick={closeModal}
            >
              انصراف
            </button>
          </div>
        </form>
        {/* <form onSubmit={addHandler}>
        <input
          type="text"
          name="name"
          placeholder="نام کالا"
          value={form.name}
          onChange={changeHandler}
        />
        <input
          type="number"
          name="price"
          placeholder="قیمت"
          value={form.price}
          onChange={changeHandler}
        />
        <input
          type="number"
          name="quantity"
          placeholder="تعداد"
          value={form.quantity}
          onChange={changeHandler}
        />
        <button type="submit">افزودن</button>
        <button type="button" onClick={closeModal}>
          بستن
        </button>
      </form> */}
      </div>
    </div>
  );
}

export default AddProductForm;
