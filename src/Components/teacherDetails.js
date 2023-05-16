import React from "react";
import Base from "../Core/base";
import { useParams } from "react-router-dom";

function TeacherDetails({ teach }) {
  const { id } = useParams();
  const detail = teach[id];

  // filter function can be used

  return (
    <Base title={"Teacher Details"}>
      <div className="teacher-card">
        <h1>{detail.name}</h1>
        <p>
          {" "}
          <span style={{ fontWeight: "bolder" }}>Batch : </span>
          {detail.batch}
        </p>
        <p>
          <span style={{ fontWeight: "bolder" }}>Email : </span>
          {detail.email}
        </p>
        <p>
          <span style={{ fontWeight: "bolder" }}>Experience : </span>
          {detail.exp}
        </p>
      </div>
    </Base>
  );
}

export default TeacherDetails;
