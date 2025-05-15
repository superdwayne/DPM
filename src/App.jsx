import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FilteredProjectView from './components/FilteredProjectView'
import ProjectDetail from './components/ProjectDetail'
import EnhancedProjectDetail from './components/EnhancedProjectDetail'
import About from './components/About'
import Showreel from './components/Showreel'
import { getProjectById, projects } from './data/projects'
import { useParams, Navigate } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <FilteredProjectView />
            </>
          } />
          <Route path="/projects" element={
            <>
              <Navbar />
              <Hero />
              <FilteredProjectView />
            </>
          } />
          <Route path="/project/:projectId" element={
            <ProjectDetailWrapper />
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<About />} />
          <Route path="/showreel" element={<Showreel />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

// Wrapper component to determine which project detail component to render
const ProjectDetailWrapper = () => {
  const { projectId } = useParams();
  console.log(`Looking up project with ID: ${projectId}`);
  
  // Try exact match first
  let project = getProjectById(projectId);
  
  // If not found, try case insensitive match
  if (!project) {
    console.log('Project not found by exact ID, trying case-insensitive match');
    const normalizedId = projectId.toLowerCase();
    project = projects.find(p => p.id.toLowerCase() === normalizedId);
  }
  
  // Log all projects for debugging
  console.log('All available project IDs:');
  projects.forEach(p => console.log(`- ${p.id}`));
  
  if (!project) {
    console.log('Project not found, redirecting to home');
    return <Navigate to="/" replace />;
  }
  
  console.log(`Found project: ${project.title}, Enhanced: ${project.isEnhanced}`);
  
  return project?.isEnhanced ? (
    <EnhancedProjectDetail key={projectId} />
  ) : (
    <ProjectDetail key={projectId} />
  );
};

export default App
