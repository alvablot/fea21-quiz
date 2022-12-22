import React from "react";

const Item = (props) => {
    console.log(props.text);
    // Don't touch this
    const text = props.text;
    if (typeof text === "string") {
        return <p data-testid="three-faulty-item">Inte ett nummer</p>;
    }

    // Men detta går bra
    return <p data-testid="three-item">{text}</p>;
};

// Slutför Three så att den skriver ut
// de items den får genom props i en lista av Items.
// Men se till att den filtrerar ut de som inte är nummer.
// Item ska alltså inte skriva ut "Inte ett nummer"

const Three = (props) => {
    const numericItems = [];
    props.items.map((item, i) => {
        if (typeof item === "number") {
            numericItems[i] = item;
        }
    });
    return (
        <div>
            {numericItems.map((item) => {
                return <Item text={item} />;
            })}
        </div>
    );
};

export default Three;
