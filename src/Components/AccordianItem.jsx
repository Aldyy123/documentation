import React from "react";
import { TiMinus, TiPlus } from "react-icons/ti";

const AccordianItem = ({ panel, index, click }) => {
  const { clickActive, setClickActive } = click;
  let activeTab = index === clickActive;
  return (
    <>
      <section style={{ backgroundColor: "#ffff", margin: '10px', boxShadow: '0px 0px 30px rgba(0,0,0,0.5)'}}>
        <div
          style={{
            padding: "5px 20px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onClick={() =>
            activeTab ? setClickActive(-1) : setClickActive(index)
          }
        >
          <h3>{panel.label}</h3>
          {activeTab ? <TiMinus /> : <TiPlus />}
        </div>
        <div
          style={{
            height: activeTab ? "auto" : "0px",
            overflow: activeTab ? "clip" : "hidden",
            transition: "all .5s ease-in-out",
            padding: activeTab ? "10px" : "0",
            visibility: activeTab ? "visible" : "hidden"
          }}
        >
          <p>{panel.content}</p>
        </div>
      </section>
    </>
  );
};

export default AccordianItem;
