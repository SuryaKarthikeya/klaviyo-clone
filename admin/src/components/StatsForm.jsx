import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';

const StatsForm = ({ data, onSave }) => {
  const [stats, setStats] = useState(data?.stats || []);

  useEffect(() => {
    setStats(data?.stats || []);
  }, [data]);

  const handleChange = (index, field, value) => {
    const newStats = [...stats];
    newStats[index] = { ...newStats[index], [field]: value };
    setStats(newStats);
  };

  const handleAdd = () => {
    setStats([...stats, { value: '', label: '' }]);
  };

  const handleRemove = (index) => {
    const newStats = [...stats];
    newStats.splice(index, 1);
    setStats(newStats);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...data, stats });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 space-y-6">
        
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-800">Stats Items</h3>
          <button type="button" onClick={handleAdd} className="flex items-center gap-1 text-sm text-blue-600 font-medium hover:text-blue-800">
            <Plus className="w-4 h-4" /> Add Stat
          </button>
        </div>

        {stats.map((stat, index) => (
          <div key={index} className="flex items-start gap-4 p-4 border border-gray-100 rounded-lg bg-gray-50 relative">
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Value (e.g., $3.7B+)</label>
                <input
                  type="text"
                  value={stat.value}
                  onChange={(e) => handleChange(index, 'value', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Label</label>
                <input
                  type="text"
                  value={stat.label}
                  onChange={(e) => handleChange(index, 'label', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <button type="button" onClick={() => handleRemove(index)} className="mt-6 text-red-500 hover:text-red-700">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}

      </div>
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end">
        <button type="submit" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default StatsForm;
