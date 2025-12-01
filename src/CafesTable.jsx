import { useState, useEffect } from "react";
import axios from "axios";
import FilterCafes from "./FilterCafes";

export default function CafesTable() {
    const [data, setData] = useState([]);
    const [selectedSubway, setSelectedSubway] = useState("All");

    useEffect(() => {
        axios
            .get("http://localhost:8070/cafes")
            .then((response) => {
                setData(response.data.cafes);
            })
            .catch((error) => {
                console.error("Ошибка:", error);
            });
    }, []);

    const filteredData =
        selectedSubway === "All"
            ? data
            : data.filter((cafe) => cafe.subwayCode === selectedSubway);

    return (
        <div className="cafesTable">
            <FilterCafes onChange={setSelectedSubway} />

            <ul className="cardsList">
                {filteredData.map((cafe) => (
                    <li key={cafe.id} className="card">
                        <img
                            src={cafe.img || "https://via.placeholder.com/150"}
                            alt={cafe.name}
                        />
                        <h2>{cafe.name}</h2>
                        <p>{cafe.desc}</p>
                        <p>{cafe.address}</p>
                        <p>Subway: {cafe.subwayCode}</p>
                        <p>{cafe.workTime}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}