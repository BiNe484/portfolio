import React from 'react'
import Button from "@mui/material/Button";
import Home from '../components/Home.jsx'
import About from '../components/About.jsx'
import Skill from '../components/Skill.jsx'
import Project from '../components/Project.jsx'
import Contact from '../components/Contact.jsx'


export default function Profile() {
  return (
  <>
    <Home/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
  </>
  )
}