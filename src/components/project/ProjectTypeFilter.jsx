import React from 'react';

export default function ProjectTypeFilter({ setSelectedType, selectedType }) {
  return (
    <div className="project__type">
      <button
        className={
          'project__type__item' + (selectedType === 'all' ? ' active' : '')
        }
        onClick={() => setSelectedType('all')}
      >
        ALL
      </button>
      <button
        className={
          'project__type__item' +
          (selectedType === 'responsive' ? ' active' : '')
        }
        onClick={() => setSelectedType('responsive')}
      >
        RESPONSIVE
      </button>
      <button
        className={
          'project__type__item' + (selectedType === 'react' ? ' active' : '')
        }
        onClick={() => setSelectedType('react')}
      >
        REACT
      </button>
    </div>
  );
}
