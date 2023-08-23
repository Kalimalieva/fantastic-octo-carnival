import React from "react";
import "./index.css";

const IconList = ({ toggleSchedule }) => {
    return (
        <div className="icon-div">
            <img
                className="icon"
                src={require("./school.png")}
                alt="icon"
            />
            <img
                className="entTheLyceum"
                src={require("./icon.jpeg")}
                alt="Вход в лицей"
            />
            <ul className="group-list">
                <li className="group-item" onClick={toggleSchedule}>
                    Группа 1
                </li>
                <li className="group-item" onClick={toggleSchedule}>
                    Группа 2
                </li>
                <li className="group-item" onClick={toggleSchedule}>
                    Группа 3
                </li>
                <li className="group-item" onClick={toggleSchedule}>
                    Контракт 1
                </li>
                <li className="group-item" onClick={toggleSchedule}>
                    Контракт 2
                </li>
            </ul>
        </div>
    );
};

export default IconList;