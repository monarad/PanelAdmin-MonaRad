
import React, { useState } from "react";
import styles from "./Pagination.module.css";

function Pagination({ page, setPage,products }) {
  const data = [
    { id: 1, content: "۱" },
    { id: 2, content: "۲"   },
  ];
  
  const previosHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };

  const nextHandler = () => {
    if (page >= data.length) return; // فرض بر این است که تعداد صفحات برابر با طول داده‌هاست
    setPage((page) => page + 1);
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={nextHandler}
        className={page === data.length ? styles.disabled : null}
        disabled={page === data.length} // غیر فعال کردن دکمه بعدی
      >
        بعدی
      </button>
      {/* نمایش محتوای صفحه فعلی */}
      <p className={page === 1 ? styles.selected : null}>۱</p>
      <p className={page === 2 ? styles.selected : null}>۲</p>

      {/* <div>{data[page - 1] && <p>{data[page - 1].content}</p>}</div> */}
      <button
        onClick={previosHandler}
        className={page === 1 ? styles.disabled : null}
        disabled={page === 1} // غیر فعال کردن دکمه قبلی
      >
        قبلی
      </button>
    </div>
  );
}

export default Pagination;
