"use client"
import { getData, saveData } from '@/utils/handleDatabase';

export const Create =() => {
  const createProject = async (formData) => {
    const projectName = formData.get('projectName') as string;
    const notes = formData.get('notes') as string;
    const start = new Date();
    await saveData(projectName, notes, start);
    const updatedProjects = await getData();
     setProjects(updatedProjects);
  };

  return (
    <div className="bg-slate-500 min-h-screen text-slate-50">
      {/* Main Content */}
      <main className="max-w-screen-lg mx-auto py-8 px-4">
        {/* Create Project Form */}
        <form className="mb-8" onSubmit={(e) => { e.preventDefault(); createProject(new FormData(e.target)); }}>
          <h2 className="text-2xl font-semibold mb-4">Create Project</h2>
          <div className="flex flex-col space-y-2">
            <input type="text" className="px-4 py-2 rounded bg-gray-100 focus:outline-none text-slate-600" name="projectName" placeholder="Project Name" />
            <textarea className="px-4 py-2 rounded bg-gray-100 focus:outline-none text-slate-600" name="notes" placeholder="Notes"></textarea>
            <button type="submit" className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 focus:outline-none">Save Project</button>
          </div>
        </form>
      </main>
    </div>
  );
};

