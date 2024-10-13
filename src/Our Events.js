import React from "react";
import "./style.css"; // Ensure your CSS is correctly linked

// Array of event data
const events = [
    {
        title: "Hackathon 2024",
        description:
            "Join us for an exciting hackathon where innovators and tech enthusiasts compete to create cutting-edge solutions.",
        button: "View Details",
        image: "https://www.alexadevsrm.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fs4t0kmno%2Fproduction%2F6d8bde6deffd43204f2f59b16775761eae5e109f-1080x1080.jpg&w=2048&q=75",
    },
    {
        title: "Voice Tech Workshop",
        description:
            "A hands-on workshop on building voice-enabled apps with Alexa's cutting-edge voice technology.",
        button: "View Details",
        image: "https://images.unsplash.com/photo-1533903345306-15d1c30952de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
    {
        title: "UI/UX Design Sprint",
        description:
            "Explore UI/UX design fundamentals and work on real-world projects during this sprint event.",
        button: "View Details",
        image: "https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
    {
        title: "AI for Good",
        description:
            "Learn how AI is changing the world and how you can contribute through this initiative focused on solving global issues.",
        button: "View Details",
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
                <button className="btn">{button}</button>
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
                    button={event.button}
                    image={event.image}
                />
            ))}
        </section>
    );
};

export default OurEvents;