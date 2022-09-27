import React, { useEffect, useState } from "react";

import Home from "./pages/home/home.jsx";
import CreatePage from "./pages/create/create.jsx";
import EventPage from "./pages/event/event.jsx";

import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
} from "react-router-dom";

const App = () => {
    const [eventCards, setEventCards] = useState([
        {
            id: undefined,
            eventName: undefined,
            hostName: undefined,
            sTime: undefined,
            eTime: undefined,
            location: undefined,
            img: undefined,
        },
    ]);
    const handleEdit = (newEvents) => {
        // console.log(newEvents);
        setEventCards((event) => {
            const updated = { ...eventCards };
            updated[event.id] = event;
            return updated;
        });
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route
                    path='/create'
                    element={
                        <CreatePage
                            eventCards={eventCards}
                            editEvent={handleEdit}
                        />
                    }
                ></Route>
                <Route
                    path='/event'
                    element={<EventPage eventCards={eventCards} />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
