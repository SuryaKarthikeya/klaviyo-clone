import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';

const IntegrationsForm = ({ data, onSave }) => {
  const [formData, setFormData] = useState(data || {});

  useEffect(() => {
    setFormData(data || {});
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleIntegrationChange = (index, field, value) => {
    const newIntegrations = [...formData.integrations];
    newIntegrations[index] = { ...newIntegrations[index], [field]: value };
    setFormData(prev => ({ ...prev, integrations: newIntegrations }));
  };

  const addIntegration = () => {
    setFormData(prev => ({
      ...prev,
      integrations: [...(prev.integrations || []), { name: '', logoUrl: '', category: '', url: '' }]
    }));
  };

  const removeIntegration = (index) => {
    const newIntegrations = [...formData.integrations];
    newIntegrations.splice(index, 1);
    setFormData(prev => ({ ...prev, integrations: newIntegrations }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Section Title</label>
            <input
              type="text"
              name="sectionTitle"
              value={formData.sectionTitle || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Subtitle</label>
            <input
              type="text"
              name="subtitle"
              value={formData.subtitle || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Total Count</label>
            <input
              type="text"
              name="totalCount"
              value={formData.totalCount || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              placeholder="e.g. 350+"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Integration Logos</h3>
            <button type="button" onClick={addIntegration} className="flex items-center gap-1 text-sm text-blue-600 font-medium hover:text-blue-800">
              <Plus className="w-4 h-4" /> Add Integration
            </button>
          </div>
          
          <div className="space-y-4">
            {formData.integrations?.map((integ, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg bg-gray-50">
                <input
                  type="text"
                  placeholder="Name"
                  value={integ.name}
                  onChange={(e) => handleIntegrationChange(index, 'name', e.target.value)}
                  className="w-40 px-3 py-2 border border-gray-300 rounded text-sm"
                />
                <input
                  type="text"
                  placeholder="Logo URL"
                  value={integ.logoUrl}
                  onChange={(e) => handleIntegrationChange(index, 'logoUrl', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
                />
                <input
                  type="text"
                  placeholder="Category"
                  value={integ.category}
                  onChange={(e) => handleIntegrationChange(index, 'category', e.target.value)}
                  className="w-40 px-3 py-2 border border-gray-300 rounded text-sm"
                />
                <button type="button" onClick={() => removeIntegration(index)} className="text-red-500 hover:text-red-700">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
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

export default IntegrationsForm;
