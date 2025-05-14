export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>Valnör Global LLC</h1>
      <p>Connecting manufacturers with reliable buyers across Latin America.</p>

      <nav style={{ marginBottom: '2rem' }}>
        <a href="#about" style={{ marginRight: '1rem' }}>About Us</a>
        <a href="#services" style={{ marginRight: '1rem' }}>Services</a>
        <a href="#divisions" style={{ marginRight: '1rem' }}>Divisions</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="about">
        <h2>Who We Are</h2>
        <p>
          Valnör Global LLC is a U.S.-based international trading company. We specialize in sourcing
          and distributing top-quality industrial materials to reliable partners in Latin America.
        </p>
      </section>

      <section id="services">
        <h2>Our Services</h2>
        <ul>
          <li>🌐 Industrial sourcing</li>
          <li>🔍 Quality control</li>
          <li>🚢 Full logistics coordination</li>
          <li>🗣️ Multilingual support</li>
        </ul>
      </section>

      <section id="divisions">
        <h2>Divisions</h2>
        <ul>
          <li>🌲 <strong>Valnör Wood</strong> — MDF panels, melamine, plywood</li>
          <li>⚙️ <strong>Valnör Metal</strong> — Profiles, sheets, hardware</li>
          <li>⚗️ <strong>Valnör Chemicals</strong> — Raw materials, polymers, additives</li>
          <li>🧵 <strong>Valnör Textiles</strong> — Technical fabrics, workwear</li>
          <li>💡 <strong>Valnör Electronics</strong> — Components, devices</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:export@valnor-global.com">export@valnor-global.com</a></p>
        <p>Location: Miami, FL – Operating globally</p>
      </section>

      <footer style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#666' }}>
        © 2025 Valnör Global LLC. All rights reserved.
      </footer>
    </div>
  );
}
