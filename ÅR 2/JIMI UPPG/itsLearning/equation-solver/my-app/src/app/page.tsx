"use client"

import React, { useState } from 'react';

const EquationSolver = () => {
  const [equation, setEquation] = useState('');
  const [result, setResult] = useState('');

  const solveEquation = () => {
    try {
      const equationToSolve = equation.replace(/x/g, '0');
      const solution = eval(equationToSolve);
      setResult(`x = ${solution}`);
    } catch (error) {
      setResult('Error: Invalid equation');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">Equation Solver</h1>
      <input
        type="text"
        value={equation}
        onChange={(e) => setEquation(e.target.value)}
        placeholder="Enter your equation"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={solveEquation}
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-800 focus:outline-none"
      >
        Solve
      </button>
      {result && <p className="mt-4 text-lg">{`Result: ${result}`}</p>}
    </div>
  );
};

export default EquationSolver;
