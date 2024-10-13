import React from 'react';
import './App.css';  // Custom CSS for bubble animations
import OurEvents from './Our Events';

function App() {
  return (
      <div className="bg-black text-white min-h-screen relative overflow-hidden">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-10">
          <div className="text-xl font-bold">
            <span className="text-teal-400">Alexa</span> Developers SRM
          </div>
          <div className="space-x-8">
            <a href="#home" className="hover:text-teal-400">Home</a>
            <a href="#events" className="hover:text-teal-400">Events</a>
            <a href="#team" className="hover:text-teal-400">Our Team</a>
            <a href="#blogs" className="hover:text-teal-400">Blogs</a>
          </div>
          <button className="px-6 py-2 bg-teal-400 hover:bg-teal-500 rounded-full text-black">
            Apply Now
          </button>
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 z-20">
            Alexa Developers SRM
          </h1>
          <p className="text-2xl sm:text-3xl text-teal-400 font-semibold mb-8 z-20">
            "Voices United, Tech Amplified"
          </p>

          {/* Moving Bubbles */}
          <div className="absolute inset-0 overflow-hidden z-10">
            <div className="bubble w-4 h-4 bg-teal-400 rounded-full"></div>
            <div className="bubble w-6 h-6 bg-teal-300 rounded-full"></div>
            <div className="bubble w-3 h-3 bg-teal-500 rounded-full"></div>
            <div className="bubble w-5 h-5 bg-teal-200 rounded-full"></div>
            <div className="bubble w-4 h-4 bg-teal-400 rounded-full"></div>
            <div className="bubble w-6 h-6 bg-teal-400 rounded-full"></div>
            <div className="bubble w-5 h-5 bg-teal-500 rounded-full"></div>
            <div className="bubble w-3 h-3 bg-teal-300 rounded-full"></div>
            <div className="bubble w-4 h-4 bg-teal-200 rounded-full"></div>
            <div className="bubble w-3 h-3 bg-teal-400 rounded-full"></div>
            <div className="bubble w-4 h-4 bg-teal-500 rounded-full"></div>
            <div className="bubble w-3 h-3 bg-teal-400 rounded-full"></div>
          </div>

          {/* Scroll down text moved to bottom */}
          <div className="absolute bottom-0 mb-10 z-20 pb-10">
            <span className="text-teal-500">Scroll down</span>
          </div>
        </section>
        <section id="about" className="flex flex-col justify-center items-center py-16 bg-black text-white ">
          <h2 className="text-4xl sm:text-5xl font-bold text-teal-400 mb-6 text-center p-4">
            About Us
          </h2>

          {/* Flexbox to align image and text side by side */}
          <div
              className="flex flex-col lg:flex-row justify-center items-center lg:space-x-16 space-y-8 lg:space-y-0 px-10">

            {/* Image on the left */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img src="https://www.alexadevsrm.org/_next/image?url=%2Fclub.png&w=828&q=75"
                   alt="Alexa Developers SRM Team" className=" border-teal-400 transform hover:scale-105 transition-transform duration-200 w-full "/>
            </div>

            {/* About Us Text */}
            <div className="w-full lg:w-1/2 bg-gray-800 p-6 rounded-lg space-y-6">
              <p className="text-lg mb-4">
                Welcome to <span className="text-teal-400 text-2xl">Alexa Developers</span> SRM, a thriving, student-run
                technical organization at SRMIST that brings technology and community together.
                We create an open atmosphere for tech enthusiasts to explore, learn, and grow, with a focus on
                voice-controlled technologies, application development, and UI/UX design via hands-on events and
                workshops.
              </p>
              <p className="text-lg mb-4">
                Our club is a hotbed of collaboration and innovation, where members can experiment, share expertise, and
                make a real difference. Whether you're a newcomer to technology or a seasoned professional, our wide
                range of workshops, hackathons, and contests provide ongoing learning and practical skill development.
              </p>
              <p className="text-lg">
                Together we build a community, where creativity knows no bounds and collaboration is key.
              </p>
            </div>
          </div>
        </section>
        <section id="about" className="flex flex-col justify-center  py-16 bg-black text-white ">
          <h2 className="text-9xl sm:text-5xl font-bold text-teal-400 mb-6 text-center p-4">Our Domains</h2>
          <div className="domain">
            <div className="image">
              <img src="https://www.alexadevsrm.org/home/js.svg"
                   alt="Alexa Developers SRM Team "/></div>
            <div className="para">
              <h1>Technical.</h1>
              <p>A vibrant community of tech enthusiasts collaborating and transforming the future.
                The tech domain works together to perfect frontend user experiences, build robust systems
                in backend, and innovate ideas through app dev, elevating their skills throughout the journey.</p>
            </div>

          </div>
          <div className="domain">
            <div className="para">
              <h1>Creatives.</h1>
              <p>In the Creatives domain, ideas evolve into unforgettable experiences.
                The talented content writers and designers have mastered the creation of compelling
                narratives and seamless design interfaces. Experience the forefront of creativity as they shape
                the art of engagement.</p>
            </div>
            <img className="image" src="https://www.alexadevsrm.org/home/ux.svg"
                 alt="Alexa Developers SRM Team "/></div>
          <div className="para">

          </div>
          <div className="domain">
            <div className="image">
              <img className="img" src="https://www.alexadevsrm.org/home/social.svg"
                   alt="Alexa Developers SRM Team "/></div>
            <div className="para">
              <h1>Events.</h1>
              <p>The heartbeat of the club, from brainstorming brilliant ideas
                to executing them with precision, ensures that each event is not just memorable but leaves
                a lasting impact on everyone involved. Our events domain thrives because of the hard work
                and creativity of the team.</p>
            </div>

          </div>
          <div className="domain">
            <div className="para">
              <h1>Business.</h1>
              <p>The business domain is at the forefront, fostering innovation and entrepreneurial
                spirit among students. It provides real-world relations and networking opportunities with
                industry professionals, bringing in amazing sponsors through skilled PR activities and
                bringing imagination to life.</p>
            </div>
            <img src="https://www.alexadevsrm.org/home/business.svg"
                 alt="Alexa Developers SRM Team " className="image"/></div>

        </section>
        <div className="App">
          {/* Other sections/components */}

          {/* Our Events Section */}
          <OurEvents/>

          {/* Other sections/components */}
        </div>

      </div>
  );
}

export default App;