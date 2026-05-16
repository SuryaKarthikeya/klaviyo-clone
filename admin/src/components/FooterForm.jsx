import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';

const FooterForm = ({ data, onSave }) => {
  const [formData, setFormData] = useState(data || {});

  useEffect(() => {
    setFormData(data || {});
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleColumnChange = (colIndex, field, value) => {
    const newColumns = [...formData.columns];
    newColumns[colIndex] = { ...newColumns[colIndex], [field]: value };
    setFormData(prev => ({ ...prev, columns: newColumns }));
  };

  const handleLinkChange = (colIndex, linkIndex, field, value) => {
    const newColumns = [...formData.columns];
    const newLinks = [...newColumns[colIndex].links];
    newLinks[linkIndex] = { ...newLinks[linkIndex], [field]: value };
    newColumns[colIndex] = { ...newColumns[colIndex], links: newLinks };
    setFormData(prev => ({ ...prev, columns: newColumns }));
  };

  const addColumn = () => {
    setFormData(prev => ({
      ...prev,
      columns: [...(prev.columns || []), { heading: '', links: [] }]
    }));
  };

  const removeColumn = (index) => {
    const newColumns = [...formData.columns];
    newColumns.splice(index, 1);
    setFormData(prev => ({ ...prev, columns: newColumns }));
  };

  const addLink = (colIndex) => {
    const newColumns = [...formData.columns];
    newColumns[colIndex].links.push({ label: '', url: '' });
    setFormData(prev => ({ ...prev, columns: newColumns }));
  };

  const removeLink = (colIndex, linkIndex) => {
    const newColumns = [...formData.columns];
    newColumns[colIndex].links.splice(linkIndex, 1);
    setFormData(prev => ({ ...prev, columns: newColumns }));
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
            <label className="block text-sm font-semibold text-gray-700 mb-1">Tagline</label>
            <input
              type="text"
              name="tagline"
              value={formData.tagline || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Copyright Text</label>
            <input
              type="text"
              name="copyright"
              value={formData.copyright || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Footer Columns</h3>
            <button type="button" onClick={addColumn} className="flex items-center gap-1 text-sm text-blue-600 font-medium hover:text-blue-800">
              <Plus className="w-4 h-4" /> Add Column
            </button>
          </div>
          
          <div className="space-y-8">
            {formData.columns?.map((col, colIndex) => (
              <div key={colIndex} className="p-5 border border-gray-200 rounded-lg bg-gray-50 relative">
                <button type="button" onClick={() => removeColumn(colIndex)} className="absolute top-4 right-4 text-gray-400 hover:text-red-600">
                  <Trash2 className="w-5 h-5" />
                </button>
                
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Column Heading</label>
                  <input
                    type="text"
                    value={col.heading}
                    onChange={(e) => handleColumnChange(colIndex, 'heading', e.target.value)}
                    className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded text-sm mb-4"
                  />
                  
                  <div className="space-y-2 pl-4 border-l-2 border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-gray-400">Links</span>
                      <button type="button" onClick={() => addLink(colIndex)} className="text-xs text-blue-600 hover:underline">Add Link</button>
                    </div>
                    {col.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="Label"
                          value={link.label}
                          onChange={(e) => handleLinkChange(colIndex, linkIndex, 'label', e.target.value)}
                          className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs"
                        />
                        <input
                          type="text"
                          placeholder="URL"
                          value={link.url}
                          onChange={(e) => handleLinkChange(colIndex, linkIndex, 'url', e.target.value)}
                          className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs"
                        />
                        <button type="button" onClick={() => removeLink(colIndex, linkIndex)} className="text-red-400">
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
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

export default FooterForm;
