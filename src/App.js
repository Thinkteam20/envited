import React, { useEffect, useState } from "react";

import Home from "./pages/home/home.jsx";
import CreatePage from "./pages/create/create.jsx";
import EventPage from "./pages/event/event.jsx";

import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
    useLocation,
} from "react-router-dom";

const App = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {}, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/create' element={<CreatePage />}></Route>
                <Route path='/event' element={<EventPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
