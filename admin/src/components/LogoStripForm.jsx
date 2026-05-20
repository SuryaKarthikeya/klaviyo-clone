import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';

const LogoStripForm = ({ data, onSave }) => {
  const [label, setLabel] = useState(data?.label || '');
  const [logos, setLogos] = useState(data?.logos || []);

  useEffect(() => {
    setLabel(data?.label || '');
    setLogos(data?.logos || []);
  }, [data]);

  const handleLogoChange = (index, field, value) => {
    const newLogos = [...logos];
    newLogos[index] = { ...newLogos[index], [field]: value };
    setLogos(newLogos);
  };

  const handleAdd = () => {
    setLogos([...logos, { name: '', imageUrl: '', url: '' }]);
  };

  const handleRemove = (index) => {
    const newLogos = [...logos];
    newLogos.splice(index, 1);
    setLogos(newLogos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...data, label, logos });
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

        <div>
          <div className="flex justify-between items-center mb-4 border-t pt-4">
            <h3 className="font-bold text-gray-800">Brand Logos</h3>
            <button type="button" onClick={handleAdd} className="flex items-center gap-1 text-sm text-blue-600 font-medium hover:text-blue-800">
              <Plus className="w-4 h-4" /> Add Logo
            </button>
          </div>

          <div className="space-y-4">
            {logos.map((logo, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg bg-gray-50 relative">
                <button type="button" onClick={() => handleRemove(index)} className="absolute top-4 right-4 text-gray-400 hover:text-red-600 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
                
                <div className="grid grid-cols-3 gap-4 pr-8">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">Brand Name</label>
                    <input
                      type="text"
                      value={logo.name || ''}
                      onChange={(e) => handleLogoChange(index, 'name', e.target.value)}
                      className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm bg-white"
                      placeholder="e.g. Shopify"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">Logo Image URL</label>
                    <input
                      type="text"
                      value={logo.imageUrl || ''}
                      onChange={(e) => handleLogoChange(index, 'imageUrl', e.target.value)}
                      className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm bg-white"
                      placeholder="e.g. /logos/shopify.svg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">Website URL</label>
                    <input
                      type="text"
                      value={logo.url || ''}
                      onChange={(e) => handleLogoChange(index, 'url', e.target.value)}
                      className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm bg-white"
                      placeholder="e.g. https://shopify.com"
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

export default LogoStripForm;
