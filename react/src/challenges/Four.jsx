import { React, useState, useEffect } from "react";

// Den här komponenten har ett par stycken problem och
// saknar några delar. Mer exakt: 5 stycken.
// Det är din uppgift att identifiera och lösa dessa.
//
// Men komponentens syfte är att hämta en användare
// från dummyjson-apiet och skriva ut dennes namn.

const Four = () => {
    const [user, setUser] = useState(null);

    const getData = async (url) => {
        const response = await fetch(url);
        const data = response.json();
        return data;
    };

    async function getUser() {
        const user = await getData("https://dummyjson.com/users/1");
        setUser(user);
    }
    useEffect(() => {
        getUser();
    }, []);
    // Rör inte koden under denna kommentaren
    if (!user) {
        return <div data-testid="four-name">No user found</div>;
    }

    return <div data-testid="four-name">My name is: {`${user.firstName} ${user.lastName}`}</div>;
};

export default Four;
