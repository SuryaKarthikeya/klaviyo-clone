import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';

const LogoStripForm = ({ data, onSave }) => {
  const [label, setLabel] = useState(data?.label || '');

  useEffect(() => {
    setLabel(data?.label || '');
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...data, label });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Logo Strip Label</label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="e.g. Trusted by 167,000+ brands"
            required
          />
        </div>
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

export default LogoStripForm;
