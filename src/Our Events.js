import React from "react";
import "./style.css"; // Ensure your CSS is correctly linked

// Array of event data
const events = [
    {
        title: "Graph Q ?",
        image: "https://www.alexadevsrm.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fs4t0kmno%2Fproduction%2F6d8bde6deffd43204f2f59b16775761eae5e109f-1080x1080.jpg&w=2048&q=75",
    },
    {
        title: "GIt 101",
        image: "https://www.alexadevsrm.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fs4t0kmno%2Fproduction%2F915b13bac64d9565b1870aff6cc286511e360525-1440x1440.jpg&w=2048&q=75",
    },
    {
        title: "UI/UX Design Sprint",
       image: "https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
    {
        title: "AI for Good",
        image: "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
];

// EventCard component for rendering individual event cards
const EventCard = ({ title, description, button, image }) => {
    return (
        <div className="card">
            <div
                className="card-image"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            />
            <div className="content">
                <h2 className="title">{title}</h2>
                <p className="copy">{description}</p>
            </div>
        </div>
    );
};

// OurEvents component for rendering the list of events
const OurEvents = () => {
    return (
        <section id="events" className="page-content">
            {events.map((event, index) => (
                <EventCard
                    key={index}
                    title={event.title}
                    description={event.description}
                    image={event.image}
                />
            ))}
        </section>
    );
};

export default OurEvents;