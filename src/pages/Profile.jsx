import React from 'react'
import Button from "@mui/material/Button";
import MouseFollower from '../components/animation/MouseFollower.jsx'
import Home from '../components/Home.jsx'
import About from '../components/About.jsx'
import Skill from '../components/Skill.jsx'
import Project from '../components/Project.jsx'
import Contact from '../components/Contact.jsx'
import Certificate from '../components/Certificate.jsx'
import BoxChat from '../components/BoxChat.jsx';


export default function Profile() {
  return (
  <>
    <MouseFollower />
    <Home/>
    <About/>
    <Skill/>
    <Certificate/>
    <Project/>
    <Contact/>
    <BoxChat/>
  </>
  )
}