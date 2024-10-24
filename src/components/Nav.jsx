export default function Nav() {
  
    return (
      <nav className="main-header-menu">
        <section
          style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <div style={linkStyle}>
            <a href="#">Home</a>
          </div>
          <div style={linkStyle}>
            <a href="#">Login</a>
          </div>
          <div style={linkStyle}>
            <a href="#">Register</a>
          </div>
          <div style={linkStyle}>
            <a href="#">About</a>
          </div>
          <div style={linkStyle}>
            <a href="#">Contact</a>
          </div>
        </section>
      </nav>
    );
  }
  