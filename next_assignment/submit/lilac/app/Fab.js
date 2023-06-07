"use client";
import Link from "next/link";
import { useState } from "react";
export default function Fab() {
    let [isIn, setisIn] = useState(0);
    let linkList = ["signin", "mongo", "object", "button", "main"];
    return (
      <>
        <div
          className="menubar"
          style={isIn % 2 == 1 ? { display: "inline-flex" } : { display: "none" }}
        >
          <div className="menu_top" />
          <div className="menu_bottom">
            {linkList.map((ai, i) => {
              return (
                <Link href={ai === "main" ? "/" : "/" + ai} key={i}>
                  <div className="menu_column">{ai}</div>
                </Link>
              );
            })}
          </div>
        </div>
        <div
          className="fab"
          style={isIn % 2 == 1 ? { "background-color": "#00fff2" } : {}}
          onClick={() => {
            setisIn(isIn + 1);
          }}
        />
      </>
    );
  }