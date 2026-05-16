import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';

const TestimonialsForm = ({ data, onSave }) => {
  const [sectionTitle, setSectionTitle] = useState(data?.sectionTitle || '');
  const [testimonials, setTestimonials] = useState(data?.testimonials || []);

  useEffect(() => {
    setSectionTitle(data?.sectionTitle || '');
    setTestimonials(data?.testimonials || []);
  }, [data]);

  const handleTestimonialChange = (index, field, value) => {
    const newTestimonials = [...testimonials];
    newTestimonials[index] = { ...newTestimonials[index], [field]: value };
    setTestimonials(newTestimonials);
  };

  const handleAdd = () => {
    setTestimonials([...testimonials, { quote: '', authorName: '', company: '', metrics: [] }]);
  };

  const handleRemove = (index) => {
    const newTestimonials = [...testimonials];
    newTestimonials.splice(index, 1);
    setTestimonials(newTestimonials);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...data, sectionTitle, testimonials });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 space-y-8">
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Section Title</label>
          <input
            type="text"
            value={sectionTitle}
            onChange={(e) => setSectionTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Testimonial Cards</h3>
            <button type="button" onClick={handleAdd} className="flex items-center gap-1 text-sm text-blue-600 font-medium hover:text-blue-800">
              <Plus className="w-4 h-4" /> Add Testimonial
            </button>
          </div>

          <div className="space-y-6">
            {testimonials.map((testi, index) => (
              <div key={index} className="p-5 border border-gray-200 rounded-lg bg-gray-50 relative">
                <button type="button" onClick={() => handleRemove(index)} className="absolute top-4 right-4 text-gray-400 hover:text-red-600 transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
                
                <div className="space-y-4 pr-8">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">Quote</label>
                    <textarea
                      value={testi.quote}
                      onChange={(e) => handleTestimonialChange(index, 'quote', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1">Author Name</label>
                      <input
                        type="text"
                        value={testi.authorName}
                        onChange={(e) => handleTestimonialChange(index, 'authorName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1">Company</label>
                      <input
                        type="text"
                        value={testi.company}
                        onChange={(e) => handleTestimonialChange(index, 'company', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm outline-none focus:border-blue-500"
                      />
                    </div>
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

export default TestimonialsForm;
