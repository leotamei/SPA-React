import React, { useState } from 'react';

const ProjectForm = ({ onAddProject }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setError('Both title and description are required.');
      return;
    }

    const newProject = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      imageUrl: imageUrl.trim() || 'https://via.placeholder.com/100',
    };

    onAddProject(newProject);
    setTitle('');
    setDescription('');
    setImageUrl('');
    setError('');
  };

  return (
    <section className="form-card">
      <h2>Add Project</h2>
      {error && <p className="error-message" role="alert">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="project-title">Title</label>
          <input
            id="project-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter project title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="project-image">Image URL (Optional)</label>
          <input
            id="project-image"
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://example.com/image.png"
          />
        </div>

        <div className="form-group">
          <label htmlFor="project-desc">Description</label>
          <textarea
            id="project-desc"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter project description"
          />
        </div>

        <button type="submit" className="btn-add">Add</button>
      </form>
    </section>
  );
};

export default ProjectForm;