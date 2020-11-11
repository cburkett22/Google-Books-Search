import React from "react";

// BookList renders a bootstrap list item
const BookList = ({ children }) => {
  return <ul className="list-group">{children}</ul>;
}

export default BookList;