const shortcuts = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "🐙"
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: "▶️"
    },
    {
      name: "Gmail",
      url: "https://gmail.com",
      icon: "✉️"
    }
  ];
  
  function Shortcuts() {
    return (
      <div className="shortcuts">
  
        {shortcuts.map((site) => (
          <a
            key={site.name}
            href={site.url}
            className="shortcut"
          >
            <div className="shortcut-icon">
              {site.icon}
            </div>
  
            <span>{site.name}</span>
          </a>
        ))}
  
      </div>
    );
  }
  
  export default Shortcuts;