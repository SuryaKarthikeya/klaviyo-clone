import React from 'react';

const Footer = ({ data }) => {
  if (!data) return null;

  // Helper to map string icon names from DB to simple span elements
  const renderIcon = (iconName) => {
    return (
      <span className="w-5 h-5 flex items-center justify-center font-bold text-xs uppercase border border-gray-600 rounded">
        {iconName?.substring(0, 2)}
      </span>
    );
  };

  return (
    <footer className="bg-realify-dark text-white pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20 border-t border-white/20 pt-20">
          
          <div className="col-span-2 md:col-span-3 lg:col-span-2 pr-8">
            <h3 className="text-3xl font-bold tracking-tighter mb-4 flex items-center">
              {data.logo ? (
                <img src={data.logo} alt="Realify.AI" className="h-8 filter brightness-0 invert" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
              ) : null}
              <span style={{ display: data.logo ? 'none' : 'block' }}>Realify.AI</span>
            </h3>
            <p className="text-gray-400 text-lg">{data.tagline || 'The autonomous B2C CRM.'}</p>
          </div>

          {data.columns?.map((col, index) => (
            <div key={col._id || index}>
              <h4 className="font-bold mb-6 text-sm tracking-wider uppercase text-gray-400">{col.heading}</h4>
              <ul className="space-y-4">
                {col.links?.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} className="text-gray-300 hover:text-white transition-colors font-medium">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6">
            {data.socialLinks?.map((social, i) => (
              <a key={social._id || i} href={social.url} title={social.platform} className="text-gray-400 hover:text-white transition-colors">
                {renderIcon(social.icon)}
              </a>
            ))}
          </div>
          
          <div className="flex flex-wrap items-center gap-4 md:gap-8 text-sm text-gray-400 font-medium">
            <span>{data.copyright}</span>
            {data.legalLinks?.map((legal, i) => (
              <a key={legal._id || i} href={legal.url} className="hover:text-white transition-colors">{legal.label}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
