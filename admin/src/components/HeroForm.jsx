import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';

const HeroForm = ({ data, onSave }) => {
  const [formData, setFormData] = useState(data || {});

  useEffect(() => {
    setFormData(data || {});
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 space-y-6">
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Headline</label>
          <input
            type="text"
            name="headline"
            value={formData.headline || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Sub Headline</label>
          <textarea
            name="subHeadline"
            value={formData.subHeadline || ''}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Badge Text</label>
          <input
            type="text"
            name="badge"
            value={formData.badge || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Primary CTA Label</label>
            <input
              type="text"
              name="primaryCTA.label"
              value={formData.primaryCTA?.label || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Primary CTA URL</label>
            <input
              type="text"
              name="primaryCTA.url"
              value={formData.primaryCTA?.url || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
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

export default HeroForm;
