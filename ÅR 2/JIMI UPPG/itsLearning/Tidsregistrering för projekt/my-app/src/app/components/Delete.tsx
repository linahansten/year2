"use client"
import { deleteData } from '@/utils/handleDatabase';
import { useState } from 'react';

const Delete = ({ projectId }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      console.log('Deleting project with ID:', projectId);
      await deleteData(projectId);
      console.log('Project deleted successfully');
      // Optionally, you can trigger any additional actions upon successful deletion
    } catch (error) {
      console.error('Error deleting project:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div>
      <button onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </div>
  );
};

export default Delete;
