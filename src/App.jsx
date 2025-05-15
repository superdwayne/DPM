import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Navigate, Outlet, useParams } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FilteredProjectView from './components/FilteredProjectView'
import ProjectDetail from './components/ProjectDetail'
import EnhancedProjectDetail from './components/EnhancedProjectDetail'
import About from './components/About'
import Showreel from './components/Showreel'
import { getProjectById, projects } from './data/projects'

// Layout component
const Layout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Outlet />
    </>
  )
}

// Project detail loader
const ProjectDetailComponent = () => {
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <FilteredProjectView />
      },
      {
        path: "projects",
        element: <FilteredProjectView />
      }
    ]
  },
  {
    path: "/project/:projectId",
    element: <ProjectDetailComponent />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <About />
  },
  {
    path: "/showreel",
    element: <Showreel />
  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  }
]);

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
