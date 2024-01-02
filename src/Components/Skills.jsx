import React  from "react";
import html from "../assets/HTML.png";
import css from "../assets/CSS.png";
import tailwind from "../assets/Tailwind.png";
import node from "../assets/NodeJs.svg";
import js from "../assets/Javascript.svg";
import blob from "../assets/blobvector.png";
import reeact from "../assets/React.png";
import nextjs from "../assets/NextJsCircle.png";
import bootstrap from "../assets/Bootstrap.svg";
import material from "../assets/MaterialUI.svg";
import express from "../assets/Express.png";
import git from "../assets/Git.svg";
import gitHub from "../assets/Github.svg";
import graph from "../assets/Graphql.svg";
import mongo from "../assets/MongoDB.svg";
import bash from "../assets/Bash.svg";
import chartjs from "../assets/ChartJs.svg";
import "./Skills.css";

const Skills = () => {
    return(
        <div>
        <div class="skills-container container" id="skills">
            <div class="skill-fade-text" id="skills">Skills</div>
            <div class="skill-container-left">
                <h2 class="skill-heading">
                    <span class="caps">M</span>e and
                    <br/>
                    MyTech Stack
                </h2>
                <div class="skill-subheading">
                    <p>
                        Hi Everyone My name is Shashank Gulati.  Currently, I am pursuing Btech in CSE branch 
                        and my goal is to become a great full Stack Developer and I am working on it 
                        I am also familier with Data Science and loves to play with Data.
                    </p>
                    <p>Here, are some of my major skills show in the right side from past few months I 
                        Update my skills to peak and I am Happy to express you .and I created some of my 
                        major and minor projects which are displayed above in the project section.
                    </p>
                    <p>
                        I know HTML, CSS, JS and many more related to this and I am also REACT enthusiast 
                        and Passionate about clean code and open source. 
                    </p>
                </div>
            </div>
            <div class="skill-container-right">
                <img src={blob} alt="" class="blob-style"/>
                <img src={html} alt="" class="skills-logo"/>
                <img src={css} alt="" class="skills-logo"/>
                <img src={js} alt="" class="skills-logo"/>
                <img src={reeact} alt="" class="skills-logo"/>
                <img src={node} alt="" class="skills-logo"/>
                <img src={nextjs} alt="" class="skills-logo"/>
                {/* <img src="./images/Redux.svg" alt="" class="skills-logo"> */}
                <img src={tailwind} alt="" class="skills-logo"/>
                <img src={bootstrap} alt="" class="skills-logo"/>
                <img src={material} alt="" class="skills-logo"/>
                <img src={express} alt="" class="skills-logo"/>
                <img src={git} alt="" class="skills-logo"/>
                <img src={gitHub} alt="" class="skills-logo"/>
                <img src={graph} alt="" class="skills-logo"/>
                <img src={mongo} alt="" class="skills-logo"/>
                {/* <img src="./images/Vercel.svg" alt="" class="skills-logo"> */}
                <img src={chartjs} alt="" class="skills-logo"/>
                <img src={bash} alt="" class="skills-logo"/>
                {/* <img src="./images/Docker.svg" alt="" class="skills-logo"> */}
                {/* <img src="./images/K8s.svg" alt="" class="skills-logo"> */}
            </div>
        </div>
        </div>
    )
}

export default Skills;