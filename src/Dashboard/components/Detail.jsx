import React from "react";

export default function Detail() {
  return (
    <div className="detail">
      <div className="detail__head">
        <p>Cluster Status:</p>
        <span>qscaler protected</span>
      </div>
      <div className="detail__body">
        <h6>K8S provider:</h6>

        <div className="detail__item">
          <p>region:</p>
          <p>Asia Pacific (Mumbai)</p>
        </div>
        <div className="detail__item">
          <p>connected</p>
          <p>about 1 month ago</p>
        </div>
        <div className="detail__item">
          <p>cluster id:</p>
          <p>11111111-1111-1111-1111-111111111111</p>
        </div>
      </div>
    </div>
  );
}
