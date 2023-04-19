import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = ({
    onSubmit,
    onCategoryChange,
    setShowList,
    setAllData,
}) => {
    const [category, setCategory] = useState("");
    const [id, setId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(category, id);
        setId("");
    };

    const handleCategoryChangeInternal = (e) => {
        const newCategory = e.target.value;
        setCategory(newCategory);
        onCategoryChange(newCategory);
        setShowList(true);
    };

    useEffect(() => {
        const fetchData = async () => {
            if (!category) {
                setAllData([]);
                return;
            }

            let results = [];
            let nextUrl = `https://swapi.dev/api/${category}/`;
            while (nextUrl) {
                const response = await axios.get(nextUrl);
                results = [...results, ...response.data.results];
                nextUrl = response.data.next;
            }
            const ids = results.map((item) => ({
                id: item.url.split("/")[5],
                name: category === "films" ? item.title : item.name,
            }));
            setAllData(ids);
        };

        const updateData = async () => {
            await setShowList(false);
            fetchData()
                .then(() => setShowList(true))
                .catch((error) => {
                    console.error(error);
                });
        };

        updateData();
    }, [category, setAllData, setShowList]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select onChange={handleCategoryChangeInternal}>
                    <option value="">Select:</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="films">Films</option>
                    <option value="species">Species</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                </select>
                <input
                    type="number"
                    placeholder={`Enter ${category ? category : 'item'} ID`}
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default Form;
