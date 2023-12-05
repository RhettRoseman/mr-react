import React, { useState } from 'react';
import '../../assets/css/projects.css';

//fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJsSquare, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons';

// images for skillsets
import viteSVG from '../../assets/images/svg/viteLogo.svg';
import netlifySVG from '../../assets/images/svg/netlifyLogo.svg';
import sassSVG from '../../assets/images/svg/sassLogo.svg';

//project images
import project1Image from '../../assets/images/project1img.png';

export default function Projects() {
    const [activeIndex, setCurrentIndex] = useState(0);

    const reactLogo = <FontAwesomeIcon icon={faReact} style={{color: 'cyan'}}/>
    const htmlLogo = <FontAwesomeIcon icon={faHtml5} style={{color: 'orangered'}}/>
    const cssLogo = <FontAwesomeIcon icon={faCss3} style={{color: 'blue'}}/>
    const jsLogo = <FontAwesomeIcon icon={faJsSquare} style={{color: 'gold'}}/>
    const netlifyLogo = <img src={netlifySVG} className='netlifyLogo' alt="Netlify Logo"/>;
    const viteLogo = <img src={viteSVG} className='viteLogo' alt="Vite Logo"/>;
    const sassLogo = <img src={sassSVG} className='sassLogo' alt='Sass Logo'/>;
    const nodeLogo = <FontAwesomeIcon icon={faNodeJs} style={{color: 'green'}}/>



    function updateIndex(newIndex) {
        newIndex < 0
            ? newIndex = 0
            : newIndex >= projects.length
                ? newIndex = projects.length - 1
                : newIndex
        setCurrentIndex(newIndex);
    }


    //object array properties that will be used to call property values and render them in project cards
    const projects = [
        {
            name: "Project1",
            techstack: (
                <>

                    {jsLogo}
                    {htmlLogo}
                    {cssLogo}
                    {nodeLogo}
                </>
            ),
            dependencies: (
                <>
                    <p>MongoDB</p>
                    <p>Express</p>
                    <p>Node.js</p>
                    <p>Heroku</p>
                </>
            ),
            description: (
                <>
                    <p>
                        Decide on the first featured project we will use for the portfolio.


                    </p>
                </>
            ),
            demoUrl: "https://postup-69c44779947a.herokuapp.com",
            image: project1Image,
            // imageProject,
        }

        //Start Project Tempalte ************************************************************************
        // Copy and paste the template below to create a new project to display in the carousel.
        // ,
        // {
        //     name: "App Name",
        //     techstack: (
        //         <>
        //             add logos here for the skills used in your project
        //             {viteLogo}
        //             {reactLogo}
        //             {jsLogo}
        //         </>
        //     ),
        //     dependencies: (
        //         <>
        //             {netlifyLogo}
        //             <p>react-qr-code</p>
        //         </>
        //     ),
        //     description: (
        //         <>
        //             <p>
        //
        //                 Project description goes here.
        //             </p>
        //         </>
        //     ),
        //     demoUrl: "https://github.com/mattestinb/app-name/",
        //     image: projectImage,
        //     githubUrl: "https://mattestinb.github.io/app-name/",
        //heroku or netlify url -- must create a new object property ex:
        //herokuUrl: "https://mattestinb.herokuapp.com",
        // },

        //End of Project Template ***********************************************************************
    ];


    return (
        <div className="project1Container" onTouchMove={updateIndex}>
            <div
                className="project1"
                style={{ transform: `translate(-${activeIndex * 100}%)` }}
            >
                {projects.map((project, index) => {
                    project.githubUrl = "https://github.com/mattestinb/project1/"; //project 1 link
                    return (
                        <section className="project" key={index}>
                            <div className='projectImg'>
                                <img src={project.image} />
                            </div>
                            <div className='projectInfo'>
                                <h3>{project.name}</h3>
                                <div className='projectStacks'>
                                    {project.techstack}
                                </div>
                                <div className='projectDeps'>
                                    {project.dependencies}
                                </div>
                                <div className='projectDesc'>
                                    {project.description}
                                </div>

                                {/*what links will be be using? github? */}
                                <a target='_blank' href={project.demoUrl}>Live Demo</a>
                                <a target='_blank' href={project.githubUrl}>Github</a>
                            </div>
                        </section>
                    );
                })}
            </div>


            {/* Back Button - previous project */}
            <div className="wheel-btns">
                <button
                    className="btn-arrow"
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}
                >
          <span>
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>{" "}
                </button>

                {/* Active Project -- circle will fill to show the active project */}
                <div className="indicators">
                    {projects.map((project, index) => {
                        return (
                            <button
                                className="indicator-btns"
                                onClick={() => {
                                    updateIndex(index);
                                }}>
                <span className={
                    `${index === activeIndex
                        ? "indicator-symbol-active"
                        : "indicator-symbol"
                    }`
                }>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                            </button>
                        );
                    })}
                </div>


                {/*  Forward Button - next project */}
                <button
                    className="btn-arrow"
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}
                >
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
                </button>
            </div>
        </div>
    );


}
