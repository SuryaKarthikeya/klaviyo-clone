import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';

const PricingForm = ({ data, onSave }) => {
  const [formData, setFormData] = useState(data || {});

  useEffect(() => {
    setFormData(data || {});
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlanChange = (index, field, value) => {
    const newPlans = [...formData.plans];
    if (field === 'features') {
      newPlans[index] = { ...newPlans[index], features: value.split(',').map(f => f.trim()) };
    } else {
      newPlans[index] = { ...newPlans[index], [field]: value };
    }
    setFormData(prev => ({ ...prev, plans: newPlans }));
  };

  const addPlan = () => {
    setFormData(prev => ({
      ...prev,
      plans: [...(prev.plans || []), { name: '', price: '', description: '', features: [], ctaLabel: '', ctaUrl: '', highlighted: false }]
    }));
  };

  const removePlan = (index) => {
    const newPlans = [...formData.plans];
    newPlans.splice(index, 1);
    setFormData(prev => ({ ...prev, plans: newPlans }));
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
            <label className="block text-sm font-semibold text-gray-700 mb-1">Subtitle</label>
            <input
              type="text"
              name="subtitle"
              value={formData.subtitle || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Pricing Plans</h3>
            <button type="button" onClick={addPlan} className="flex items-center gap-1 text-sm text-blue-600 font-medium hover:text-blue-800">
              <Plus className="w-4 h-4" /> Add Plan
            </button>
          </div>
          
          <div className="space-y-6">
            {formData.plans?.map((plan, index) => (
              <div key={index} className="p-5 border border-gray-200 rounded-lg bg-gray-50 relative">
                <button type="button" onClick={() => removePlan(index)} className="absolute top-4 right-4 text-gray-400 hover:text-red-600">
                  <Trash2 className="w-5 h-5" />
                </button>
                
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">Plan Name</label>
                    <input
                      type="text"
                      value={plan.name}
                      onChange={(e) => handlePlanChange(index, 'name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">Price (e.g., $45/mo)</label>
                    <input
                      type="text"
                      value={plan.price}
                      onChange={(e) => handlePlanChange(index, 'price', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-semibold text-gray-500 mb-1">Features (comma separated)</label>
                    <input
                      type="text"
                      value={plan.features?.join(', ')}
                      onChange={(e) => handlePlanChange(index, 'features', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-xs font-semibold text-gray-500 mt-2">
                      <input
                        type="checkbox"
                        checked={plan.highlighted}
                        onChange={(e) => handlePlanChange(index, 'highlighted', e.target.checked)}
                      />
                      Highlighted (Recommended)
                    </label>
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

export default PricingForm;
