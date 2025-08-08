import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">

        {/* Left Side */}
        <div className=" text-center md:text-left mt-8 md:mt-0">

          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 md:mb-5 leading-tight">
            Hi, I am  Krishna Yadav
          </h1>

          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Frontend Developer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate front-end developer with hands-on experience in building responsive and user-friendly web interfaces. Proficient in HTML, CSS, JavaScript, ReactJS, Tailwind CSS, and PHP, I enjoy turning ideas into interactive digital experiences. With a strong foundation in MySQL and backend logic, I bring full functionality to my projects while maintaining clean, modern design principles.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1Jjz6__SNsXHW73LU9bcIiVr1jmeXO0m2/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>

        </div>

      </div>

    </section>
  );
};

export default About;
