/* eslint-disable react/prop-types */
import React from "react";

const SingleColor = ({ rgb, weight, index, hex }) => {
  const [alert, setAlert] = React.useState(false);
  const bcg = rgb.join(",");
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <div
      className={`single-color ${index > 10 && "single-color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(`#${hex}`);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </div>
  );
};

export default SingleColor;
