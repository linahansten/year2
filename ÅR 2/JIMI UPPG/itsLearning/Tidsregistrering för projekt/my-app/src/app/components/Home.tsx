"use client"
import React, { useEffect, useState } from 'react';
import { getData, saveData } from '@/utils/handleDatabase';
import Link from 'next/link';
import { Timer } from './Timer';
import { Create } from './Create';
import  Delete  from './Delete';

export const Home = () => {
  const [projects, setProjects] = useState([]);
  const [finishedProjects, setFinishedProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setProjects(data || []);
    };
    fetchData();
  }, []);

  const moveFinished = (id) => {
    const projectIndex = projects.findIndex(project => project.id === id);
    const updatedProjects = [...projects];
    const finishedProject = updatedProjects.splice(projectIndex, 1)[0];
    setProjects(updatedProjects);
    setFinishedProjects(prevState => [...prevState, finishedProject]);
  };

  return (
    <div className="bg-slate-500 min-h-screen text-slate-600">
      {/* Navigation Links */}
      <nav className="flex justify-between items-center px-4 py-2 bg-gray-900">
        <div className="flex space-x-4">
          <Link href="/">All Projects</Link>
          <Link href="/">Create New Project</Link>
        </div>
        <div>
          <Link href="/recent-projects">Recent Projects</Link>
          <Link href="/finished-projects">Finished Projects</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-screen-lg mx-auto py-8 px-4">
        <Create />
        {/* Current Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-slate-50">Current Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div key={project.id} className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold">{project.name}</h3>
                <p>{project.notes}</p>
                <Timer projectId ={project.id} time ={project.elapsedtime}/>
                <div className="mt-4 space-x-4">
                  <Link href={`/edit-project?id=${project.id}`}>Edit WIP</Link>
                </div>
              <Delete/>
            </div>
            ))}
          </div>
        </section>

        {/* Finished Projects */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-50">Finished Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {finishedProjects.map((project) => (
              <div key={project.id} className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold">{project.name}</h3>
                <p>{project.notes}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};