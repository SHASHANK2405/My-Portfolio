import React  from "react";
import html from "../assets/HTML.png";
import css from "../assets/CSS.png";
import tailwind from "../assets/Tailwind.png";
import node from "../assets/NodeJs.svg";
import js from "../assets/Javascript.svg";
import "./project.css";
import {FaGithub , FaLink } from "react-icons/fa";


const Project = () => {


    return(
       
        <div className="project-section">
            <h2 className="page-header" id="projects">Projects</h2>
            <div className="project-container">
                <div className="project-card" id="project1">
                    <div className="project-number project-number-right">01</div>
                    <div className="project-content project-content-right">
                        <div class="project-skills-container">
                             <img className="project-skill" src={html} alt=""/>
                             <img className="project-skill" src={css} alt=""/>
                             <img className="project-skill" src={js} alt=""/>
                             <img className="project-skill" src={node} alt=""/>
                           
                        </div>
                        <div className="project-heading">Password Generator</div>
                        <div className="project-subheading">It is a Password Generator App. Which helps you to create your own strong password using characters,numbers,symbols .
                        </div>
                        <div className="btn-grp">
                            <button className="btn-pink btn-project">Read More</button>
                            <a target="_blank" href="https://github.com/SHASHANK2405/Password_Generator"  rel="noreferrer">
                                <i title="GitHubLink" className="fa-brands fa-github icon">
                                    <FaGithub/>
                                </i>
                            </a>
                            <a target="_blank" href="https://shashank2405.github.io/Password_Generator/"  rel="noreferrer">
                                <i title="Live Link" className="icon" >
                                    <FaLink/>
                                </i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-card" id="project2">
                    <div className="project-number project-number-left">02</div>
                    <div className="project-content project-content-left">
                        <div className="project-skills-container">
                            <img className="project-skill" src={html} alt=""/>
                            <img className="project-skill" src={css} alt=""/>
                            <img className="project-skill" src={js} alt=""/>
                          
                            <img className="project-skill" src={tailwind} alt=""/>
                            
                        </div>
                        <div className="project-heading">Tic Tac Toe</div>
                        <div className="project-subheading">A platform where you can play Tic Tac Toe and enjoy with your Friends 
                        </div>
                        <div className="btn-grp">
                            <button className="btn-pink btn-project">Read More</button>
                            <a target="_blank" href="https://github.com/SHASHANK2405/Tic_Tac_toe" rel="noreferrer">
                                <i title="GitHubLink" className=" icon">
                                    <FaGithub/>
                                </i>
                            </a>
                            <a target="_blank" href="https://shashank2405.github.io/Tic_Tac_toe/" rel="noreferrer">
                                <i title="Live Link" className=" icon">
                                    <FaLink/>
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="project-card" id="project3">
                    <div className="project-number project-number-right">03</div>
                    <div className="project-content project-content-right">
                        <div class="project-skills-container">
                             <img className="project-skill" src={html} alt=""/>
                             <img className="project-skill" src={css} alt=""/>
                             <img className="project-skill" src={js} alt=""/>
                             <img className="project-skill" src={node} alt=""/>
                             <img className="project-skill" src={tailwind} alt=""/>
                           
                        </div>
                        <div className="project-heading">Dev Detective</div>
                        <div className="project-subheading">It is a website in which you can find anyone's Github account with their some information like bio,followers,repos, etc . Also use the DARK MODE.
                        </div>
                        <div className="btn-grp">
                            <button className="btn-pink btn-project">Read More</button>
                            <a target="_blank" href="https://github.com/SHASHANK2405/Dev_Detect_Github"  rel="noreferrer">
                                <i title="GitHubLink" className="fa-brands fa-github icon">
                                    <FaGithub/>
                                </i>
                            </a>
                            <a target="_blank" href=" https://shashank2405.github.io/Dev_Detect_Github/"  rel="noreferrer">
                                <i title="Live Link" className="icon" >
                                    <FaLink/>
                                </i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-card" id="project4">
                    <div className="project-number project-number-left">04</div>
                    <div className="project-content project-content-left">
                        <div className="project-skills-container">
                            <img className="project-skill" src={html} alt=""/>
                            <img className="project-skill" src={css} alt=""/>
                            <img className="project-skill" src={js} alt=""/>
                          
                            <img className="project-skill" src={node} alt=""/>
                            
                        </div>
                        <div className="project-heading">Weather Report App</div>
                        <div className="project-subheading">It is a app that shows the weather report through API to this platform. it also shows current location weather as well which is very helpfull.
                        </div>
                        <div className="btn-grp">
                            <button className="btn-pink btn-project">Read More</button>
                            <a target="_blank" href="https://github.com/SHASHANK2405/Weather_report_App" rel="noreferrer">
                                <i title="GitHubLink" className=" icon">
                                    <FaGithub/>
                                </i>
                            </a>
                            <a target="_blank" href="https://shashank2405.github.io/Weather_report_App/" rel="noreferrer">
                                <i title="Live Link" className=" icon">
                                    <FaLink/>
                                </i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* <div className="project-card" id="project1">
                    <div className="project-number project-number-right">01</div>
                    <div className="project-content project-content-right">
                        <div class="project-skills-container">
                             <img className="project-skill" src={html} alt=""/>
                             <img className="project-skill" src={css} alt=""/>
                             <img className="project-skill" src={js} alt=""/>
                             <img className="project-skill" src={node} alt=""/>
                           
                        </div>
                        <div className="project-heading">Password Generator</div>
                        <div className="project-subheading">It is a Password Generator App. Which helps you to create your own strong password using characters,numbers,symbols .
                        </div>
                        <div className="btn-grp">
                            <button className="btn-pink btn-project">Read More</button>
                            <a target="_blank" href="https://github.com/SHASHANK2405/Password_Generator"  rel="noreferrer">
                                <i title="GitHubLink" className="fa-brands fa-github icon">
                                    <FaGithub/>
                                </i>
                            </a>
                            <a target="_blank" href="https://shashank2405.github.io/Password_Generator/"  rel="noreferrer">
                                <i title="Live Link" className="icon" >
                                    <FaLink/>
                                </i>
                            </a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Project;