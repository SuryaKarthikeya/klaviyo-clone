import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';

const FeaturesForm = ({ data, onSave }) => {
  const [formData, setFormData] = useState(data || {});

  useEffect(() => {
    setFormData(data || {});
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFeatureChange = (index, field, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = { ...newFeatures[index], [field]: value };
    setFormData(prev => ({ ...prev, features: newFeatures }));
  };

  const addFeature = () => {
    setFormData(prev => ({
      ...prev,
      features: [...(prev.features || []), { title: '', description: '', icon: '', ctaLabel: '', ctaUrl: '', imageUrl: '' }]
    }));
  };

  const removeFeature = (index) => {
    const newFeatures = [...formData.features];
    newFeatures.splice(index, 1);
    setFormData(prev => ({ ...prev, features: newFeatures }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-6">
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
            <label className="block text-sm font-semibold text-gray-700 mb-1">Section Subtitle</label>
            <input
              type="text"
              name="sectionSubtitle"
              value={formData.sectionSubtitle || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Feature Cards</h3>
            <button type="button" onClick={addFeature} className="flex items-center gap-1 text-sm text-blue-600 font-medium hover:text-blue-800">
              <Plus className="w-4 h-4" /> Add Feature
            </button>
          </div>
          
          <div className="space-y-6">
            {formData.features?.map((feature, index) => (
              <div key={index} className="p-5 border border-gray-200 rounded-lg bg-gray-50 relative">
                <button type="button" onClick={() => removeFeature(index)} className="absolute top-4 right-4 text-gray-400 hover:text-red-600">
                  <Trash2 className="w-5 h-5" />
                </button>
                
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="col-span-2">
                    <label className="block text-xs font-semibold text-gray-500 mb-1">Title</label>
                    <input
                      type="text"
                      value={feature.title}
                      onChange={(e) => handleFeatureChange(index, 'title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-semibold text-gray-500 mb-1">Description</label>
                    <textarea
                      value={feature.description}
                      onChange={(e) => handleFeatureChange(index, 'description', e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">CTA Label</label>
                    <input
                      type="text"
                      value={feature.ctaLabel || ''}
                      onChange={(e) => handleFeatureChange(index, 'ctaLabel', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      placeholder="e.g. Learn more"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">CTA URL</label>
                    <input
                      type="text"
                      value={feature.ctaUrl || ''}
                      onChange={(e) => handleFeatureChange(index, 'ctaUrl', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      placeholder="e.g. /email"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">Icon Name (Lucide)</label>
                    <input
                      type="text"
                      value={feature.icon || ''}
                      onChange={(e) => handleFeatureChange(index, 'icon', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      placeholder="e.g. Mail, Smartphone, Zap"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">Image URL</label>
                    <input
                      type="text"
                      value={feature.imageUrl || ''}
                      onChange={(e) => handleFeatureChange(index, 'imageUrl', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      placeholder="e.g. /images/feature.jpg"
                    />
                  </div>
                </div>
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

export default FeaturesForm;
