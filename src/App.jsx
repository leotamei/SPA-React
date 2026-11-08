import React, { useState } from 'react';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import './styles/App.css';

const INITIAL_PROJECTS = [
  { id: 1, title: 'Project 1', description: 'Description of the project', imageUrl: '' },
  { id: 2, title: 'Project 2', description: 'Description of the project', imageUrl: '' },
  { id: 3, title: 'Project 3', description: 'Description of the project', imageUrl: '' },
];

function App() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddProject = (newProject) => {
    setProjects((prev) => [newProject, ...prev]);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <ProjectForm onAddProject={handleAddProject} />
        <section className="showcase-section">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <ProjectList projects={filteredProjects} />
        </section>
      </main>
    </div>
  );
}

export default App;