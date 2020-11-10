import React from "react";
// import Thumbnail from "../Thumbnail";
// import { Container, Row, Col } from "../Grid";

// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
const BookList = ({ children }) => {
  return <ul className="list-group">{children}</ul>;
}

export default BookList;

// BookListItem renders a bootstrap list item containing data from the book api call
// export function BookListItem({
//   thumbnail,
//   title,
//   author,
//   description,
//   href
// }) {
//   return (
//     <li className="list-group-item">
//       <Container>
//         <Row>
//           <Col size="xs-4 sm-2">
//             <Thumbnail src={thumbnail || "https://placehold.it/300x300"} />
//           </Col>
//           <Col size="xs-8 sm-9">
//             <h3>{title}</h3>
//             <h4>{author}</h4>
//             <p>Description: {description}</p>
//             <a rel="noreferrer noopener" target="_blank" href={href}>
//               Go to book!
//             </a>
//           </Col>
//         </Row>
//       </Container>
//     </li>
//   );
// }