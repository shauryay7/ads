import React from 'react';

const blogs = [
    {
        title: "Automatic Speech Recognition Technology",
        date: "Sep 26, 2020",
        description: "Speech is the primary mode of communication among human beings. On the other hand...",
        image: "https://www.alexadevsrm.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fs4t0kmno%2Fproduction%2F251f0d42e29f9758ee80c47bfb602520d785ce46-760x440.png&w=2048&q=75",
    },
    {
        title: "A Beginner’s Roadmap to Mastering Cybersecurity",
        date: "Feb 29, 2024",
        description: "Welcome to the important world of cybersecurity, where we work to keep digital information safe...",
        image: "https://www.alexadevsrm.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fs4t0kmno%2Fproduction%2F476503007867d9319343f6af5e235e77b4365aab-381x132.png&w=2048&q=75",
    },
    {
        title: "Using AWS S3 with Node.js",
        date: "Sep 16, 2020",
        description: "AWS or Amazon Web Services is the biggest and most popular cloud computing platform out there...",
        image: "https://www.alexadevsrm.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fs4t0kmno%2Fproduction%2Fe7341c84482bd12ccb8a786b433af56d24ed2e75-650x190.png&w=2048&q=75",
    },
];

const BlogPage = () => {
    return (
        <div className=" text-white p-20">
            <h2 className="text-6xl font-bold text-teal-400 mb-6 text-center">Our Blogs</h2>
            <p className="text-2xl mb-10 text-center">
                At the SRM Alexa Developer Club, our blog offers a rich blend of tech innovations...
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                    >
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-90"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{blog.date}</p>
                            <p className="text-gray-300">{blog.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;