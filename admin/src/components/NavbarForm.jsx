import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';

const NavbarForm = ({ data, onSave }) => {
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

  const handleNavLinkChange = (index, field, value) => {
    const newLinks = [...formData.navLinks];
    newLinks[index] = { ...newLinks[index], [field]: value };
    setFormData(prev => ({ ...prev, navLinks: newLinks }));
  };

  const addNavLink = () => {
    setFormData(prev => ({
      ...prev,
      navLinks: [...(prev.navLinks || []), { label: '', url: '', hasDropdown: false }]
    }));
  };

  const removeNavLink = (index) => {
    const newLinks = [...formData.navLinks];
    newLinks.splice(index, 1);
    setFormData(prev => ({ ...prev, navLinks: newLinks }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Logo Path</label>
          <input
            type="text"
            name="logo"
            value={formData.logo || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Primary CTA Label</label>
            <input
              type="text"
              name="ctaPrimary.label"
              value={formData.ctaPrimary?.label || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Secondary CTA Label</label>
            <input
              type="text"
              name="ctaSecondary.label"
              value={formData.ctaSecondary?.label || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Navigation Links</h3>
            <button type="button" onClick={addNavLink} className="flex items-center gap-1 text-sm text-blue-600 font-medium hover:text-blue-800">
              <Plus className="w-4 h-4" /> Add Link
            </button>
          </div>
          
          <div className="space-y-4">
            {formData.navLinks?.map((link, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg bg-gray-50">
                <input
                  type="text"
                  placeholder="Label"
                  value={link.label}
                  onChange={(e) => handleNavLinkChange(index, 'label', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
                />
                <input
                  type="text"
                  placeholder="URL"
                  value={link.url}
                  onChange={(e) => handleNavLinkChange(index, 'url', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
                />
                <label className="flex items-center gap-2 text-xs font-medium text-gray-500 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={link.hasDropdown}
                    onChange={(e) => handleNavLinkChange(index, 'hasDropdown', e.target.checked)}
                  />
                  Dropdown
                </label>
                <button type="button" onClick={() => removeNavLink(index)} className="text-red-500 hover:text-red-700">
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

export default NavbarForm;
