import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
    const [menuItems, setMenuItems] = useState(items);

    const filterItems = (category) => {
        if (category === "all") {
            setMenuItems(items);
        } else {
            const newMenu = items.filter((menu) => menu.category === category);
            setMenuItems(newMenu);
        }
    };

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={allCategories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}

export default App;
