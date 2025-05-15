import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './FilteredProjectView.css';
import { projectCategories, getProjectsByCategory } from '../data/projects';

const FilteredProjectView = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // "list" or "grid"
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const filterTabsRef = useRef(null);
  const mobileFilterRef = useRef(null);
  
  // Update filtered projects when activeFilter changes
  useEffect(() => {
    const projects = getProjectsByCategory(activeFilter);
    console.log(`Filter: ${activeFilter}, Found ${projects.length} projects`);
    // Log all project IDs to help with debugging
    projects.forEach(project => {
      console.log(`Project: ${project.title}, ID: ${project.id}`);
    });
    setFilteredProjects(projects);
  }, [activeFilter]);
  
  // Scroll active filter into view when it changes
  useEffect(() => {
    if (filterTabsRef.current) {
      const activeEl = filterTabsRef.current.querySelector('.filter-tab.active');
      if (activeEl) {
        // Scroll the active filter into view with some offset
        const container = filterTabsRef.current;
        const containerWidth = container.offsetWidth;
        const activeElLeft = activeEl.offsetLeft;
        const activeElWidth = activeEl.offsetWidth;
        
        // Calculate center position
        const scrollPosition = activeElLeft - (containerWidth / 2) + (activeElWidth / 2);
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [activeFilter]);
  
  // Handle click outside to close the mobile filter dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileFilterRef.current && !mobileFilterRef.current.contains(event.target)) {
        setShowMobileFilter(false);
      }
    }
    
    // Add event listener when dropdown is open
    if (showMobileFilter) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    // Clean up event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMobileFilter]);
  
  // Count of projects in the current filter
  const projectCount = filteredProjects.length;
  
  // Function to ensure project ID is properly formatted for URLs
  const formatProjectId = (id) => {
    // Ensure the ID is lowercase and replace spaces with hyphens
    return id.toString().toLowerCase().replace(/\s+/g, '-');
  };
  
  // Toggle mobile filter dropdown
  const toggleMobileFilter = () => {
    setShowMobileFilter(!showMobileFilter);
  };
  
  // Handle filter selection
  const handleFilterSelect = (category) => {
    setActiveFilter(category);
    setShowMobileFilter(false); // Close the dropdown after selection
  };
  
  return (
    <div className="filtered-project-view">
      {/* Filter tabs and view toggle */}
      <div className="filter-header">
        {/* Mobile filter button and dropdown */}
        <div className="mobile-filter-container" ref={mobileFilterRef}>
          <button 
            className={`mobile-filter-button ${showMobileFilter ? 'active' : ''}`} 
            onClick={toggleMobileFilter}
          >
            <span>{activeFilter}</span>
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 12 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: showMobileFilter ? 'rotate(180deg)' : 'rotate(0)' }}
            >
              <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          
          <div className={`mobile-filter-dropdown ${showMobileFilter ? 'active' : ''}`}>
            {projectCategories.map((category) => (
              <button
                key={`mobile-${category}`}
                className={`mobile-filter-option ${activeFilter === category ? 'active' : ''}`}
                onClick={() => handleFilterSelect(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Regular filter tabs */}
        <div className="filter-tabs" ref={filterTabsRef}>
          {projectCategories.map((category) => (
            <button
              key={category}
              className={`filter-tab ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="view-toggle">
          <button 
            className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
            aria-label="List view"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="5" width="18" height="2" fill="currentColor"/>
              <rect x="3" y="11" width="18" height="2" fill="currentColor"/>
              <rect x="3" y="17" width="18" height="2" fill="currentColor"/>
            </svg>
          </button>
          <button 
            className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
            aria-label="Grid view"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="7" height="7" fill="currentColor"/>
              <rect x="14" y="3" width="7" height="7" fill="currentColor"/>
              <rect x="3" y="14" width="7" height="7" fill="currentColor"/>
              <rect x="14" y="14" width="7" height="7" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Project count */}
      <div className="project-count-container">
        <div className="project-count">{projectCount} projects</div>
      </div>
      
      {/* Projects display - conditional based on view mode */}
      {viewMode === 'list' ? (
        // List view
        <div className="project-list">
          {filteredProjects.map((project) => (
            <Link 
              key={project.id} 
              to={`/project/${formatProjectId(project.id)}`} 
              className="project-list-item"
              onClick={() => console.log(`Clicked project: ${project.title}, navigating to: /project/${formatProjectId(project.id)}`)}
            >
              <div className="project-title">{project.title}</div>
              <div className="project-thumbnail">
                <img src={project.image} alt={project.title} />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        // Grid view
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <Link 
              key={project.id} 
              to={`/project/${formatProjectId(project.id)}`} 
              className="project-link"
              onClick={() => console.log(`Clicked project: ${project.title}, navigating to: /project/${formatProjectId(project.id)}`)}
            >
              <div 
                className={`project ${project.id}`} 
                style={{ backgroundColor: project.heroBg || '#f8f8f8' }}
              >
                <div className="project-inner">
                  <img src={project.image} alt={project.title} />
                </div>
                <h2>{project.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilteredProjectView; 