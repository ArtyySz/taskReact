const subways = [
    { name: "Арбатская", code: "Arbat" },
    { name: "Александровский сад", code: "Alexanders Garden" },
    { name: "Московская", code: "Moscow" },
    { name: "Парк Культуры", code: "Culture" },
    { name: "Театральная", code: "Theater" },
];

export default function FilterCafes({ onChange }) {
    return (
        <div className="controls">
            <select name="subway" id="subway" onChange={(e) => onChange(e.target.value)}
            >
                <option value="All">Все</option>

                {subways.map((s) => (
                    <option key={s.code} value={s.code}>
                        {s.name}
                    </option>
                ))}
            </select>
        </div>
    );
}