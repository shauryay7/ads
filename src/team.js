import React from 'react';
import "./team.css"

function TeamPage() {
    const coreTeam = [
        {
            name: "Talat Binti Firdous",
            position: "President",
            imgSrc: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
            instagram: "#",
            linkedin: "#",
        },
        {
            name: "Shivain Kohli",
            position: "Vice President",
            imgSrc: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
            instagram: "#",
            linkedin: "#",
        },
    ];

    const heads = [
        {
            name: "Divyanshu Yadav",
            position: "Technical Head",
            imgSrc: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
            instagram: "#",
            linkedin: "#",
        },
        {
            name: "Muhammad Azhar Abbas",
            position: "Events Head",
            imgSrc: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
            instagram: "#",
            linkedin: "#",
        },
        {
            name: "Pragya Chaubey",
            position: "Creatives Head",
            imgSrc: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
            instagram: "#",
            linkedin: "#",
        },
        {
            name: "Yashika Shreya",
            position: "Business Head",
            imgSrc: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
            instagram: "#",
            linkedin: "#",
        },
    ];

    return (
        <div className="bg-black text-white px-4">
            <h1 className="text-6xl font-bold text-teal-400 text-center mt-20 head gradient-text">Our Team</h1>
            <p className=" mt-4  mx-auto text-2xl pad">
                Our team at the SRM Alexa Developer Club includes passionate members, dedicated executives,
                and a visionary head, all working together to foster innovation, learning, and community
                engagement through dynamic events and activities.
            </p>

            {/* Core Team */}
            <section className="mt-16">
                <h2 className="text-4xl font-semibold text-center text-teal-400 mb-8">The Core</h2>
                <div className="flex justify-center space-x-16">
                    {coreTeam.map((member, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={member.imgSrc}
                                alt={member.name}
                                className="rounded-full h-40 w-40 object-cover mx-auto"
                            />
                            <h3 className="text-2xl font-semibold mt-4">{member.name}</h3>
                            <p className="text-teal-400">{member.position}</p>
                            <div className="flex justify-center space-x-4 mt-2">
                                <a href={member.instagram} className="text-white">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href={member.linkedin} className="text-white">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Heads */}
            <section className="mt-16">
                <h2 className="text-4xl font-semibold text-center text-teal-400 mb-8">The Heads</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {heads.map((member, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={member.imgSrc}
                                alt={member.name}
                                className="rounded-full h-32 w-32 object-cover mx-auto"
                            />
                            <h3 className="text-2xl font-semibold mt-4">{member.name}</h3>
                            <p className="text-teal-400">{member.position}</p>
                            <div className="flex justify-center space-x-4 mt-2">
                                <a href={member.instagram} className="text-white">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href={member.linkedin} className="text-white">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default TeamPage;