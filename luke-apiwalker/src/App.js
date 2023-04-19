import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';
import Form from './components/Form';
import Peoples from "./components/Peoples";
import Planets from './components/Planets';
import Films from './components/Films';
import Species from './components/Species';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';

function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const [showList, setShowList] = useState(false);
    const [allData, setAllData] = useState([]);

    const handleFormSubmit = (category, id) => {
        setSelectedCategory(category);
        setSelectedId(id);
        setShowDetails(true);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setShowDetails(false);
    };

    return (
        <BrowserRouter>
            <div className="app-container">
                <div className="form-container">
                    <Form
                        onSubmit={handleFormSubmit}
                        onCategoryChange={handleCategoryChange}
                        showList={showList}
                        setShowList={setShowList}
                        allData={allData}
                        setAllData={setAllData}
                    />
                </div>
                <div className="content-container" style={{ display: "flex" }}>
                    {showList && (
                        <div className="list-container">
                            <h4>All IDs:</h4>
                            <ul>
                                {allData.map((item) => (
                                    <li key={item.id}>
                                        {item.id} - {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {selectedCategory && (
                        <div className="display-data">
                            <DisplayData

                                category={selectedCategory}
                                id={selectedId}
                                showDetails={showDetails}
                            />
                        </div>

                    )}
                </div>
            </div>
        </BrowserRouter>
    );
}

function DisplayData({ category, id, showDetails }) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!showDetails) {
            setData(null);
            setError(false);
            return;
        }

        axios
            .get(`https://swapi.dev/api/${category}/${id}/`)
            .then((response) => {
                setData(response.data);

                setError(false);
            })
            .catch((error) => {
                console.error(error);
                setError(true);
            });
    }, [category, id, showDetails]);

    if (!showDetails) {
        return null;
    }

    if (!data && !error) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div>
                <h2>These aren't the droids you're looking for</h2>
                <img
                    src="https://media.vanityfair.com/photos/5d56eac902bf930008778de7/1:1/pass/obi-wan-ewan-series.jpg"
                    alt="Obi-Wan Kenobi"
                    width="300"
                />
            </div>
        );
    }

    const CategoryComponent = {
        people: Peoples,
        planets: Planets,
        films: Films,
        species: Species,
        starships: Starships,
        vehicles: Vehicles,
    }[category];

    if (!CategoryComponent) {
        return (
            <div>
                <p>Invalid category</p>
                <button>
                    <Link to="/">Back</Link>
                </button>
            </div>
        );
    }

    return (
        <div>
            <CategoryComponent data={data} />
        </div>
    );
}

export default App;