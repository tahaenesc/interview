// components/filterComponent.tsx
import React from 'react';
import { useFilterStore } from '@/store/filterStore';

const FilterComponent = () => {
  const { statusFilter, genderFilter, setStatusFilter, setGenderFilter } = useFilterStore();

  return (
    <div className="flex gap-4 ">
      <select
        className="p-4"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        value={genderFilter}
        onChange={(e) => setGenderFilter(e.target.value)}
      >
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};

export default FilterComponent;
