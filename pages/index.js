
export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem', maxWidth: '1000px', margin: 'auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>VALNÖR GLOBAL</h1>
        <nav>
          <a href="#about" style={{ marginRight: '1rem' }}>About</a>
          <a href="#services" style={{ marginRight: '1rem' }}>Services</a>
          <a href="#divisions" style={{ marginRight: '1rem' }}>Divisions</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Trading company specializing in industrial materials</h2>
        <p>MDF, melamine panels, metal profiles, chemicals, and more.</p>
      </section>

      <section id="about" style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.3rem', fontWeight: '600' }}>Who We Are</h3>
        <p>Valnör Global LLC is a U.S.-based international trading company. We specialize in sourcing and distributing top-quality industrial materials to reliable partners in Latin America.</p>
      </section>

      <section id="services" style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.3rem', fontWeight: '600' }}>Our Services</h3>
        <ul>
          <li>Industrial sourcing</li>
          <li>Quality control and technical supervision</li>
          <li>Full logistics coordination</li>
          <li>Multilingual support</li>
        </ul>
      </section>

      <section id="divisions" style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.3rem', fontWeight: '600' }}>Divisions</h3>
        <ul>
          <li><strong>Valnör Wood</strong> – MDF panels, melamine, plywood</li>
          <li><strong>Valnör Metal</strong> – Profiles, sheets, hardware</li>
          <li><strong>Valnör Chemicals</strong> – Raw materials, polymers, additives</li>
          <li><strong>Valnör Textiles</strong> – Technical fabrics, workwear</li>
          <li><strong>Valnör Electronics</strong> – Components, devices</li>
        </ul>
      </section>

      <section id="contact" style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.3rem', fontWeight: '600' }}>Contact Us</h3>
        <p>Email: <a href="mailto:export@valnor-global.com">export@valnor-global.com</a></p>
        <p>Location: Miami, FL – Operating globally</p>
      </section>

      <footer style={{ textAlign: 'center', fontSize: '0.9rem', color: '#777', borderTop: '1px solid #ccc', paddingTop: '2rem' }}>
        © 2025 Valnör Global. All rights reserved.
      </footer>
    </div>
  );
}
