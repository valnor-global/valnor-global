import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Valnör Global LLC</title>
        <meta name="description" content="Industrial sourcing and trading experts" />
      </Head>
      <header style={styles.header}>
        <div style={styles.logo}>VALNÖR GLOBAL</div>
        <nav>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#services" style={styles.navLink}>Services</a>
          <a href="#divisions" style={styles.navLink}>Divisions</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      <main style={styles.main}>
        <h1 style={styles.title}>Connecting manufacturers with reliable buyers in Latin America</h1>
        <p style={styles.subtitle}>Specializing in MDF, melamine panels, metal profiles, chemicals, and more.</p>

        <section id="about" style={styles.section}>
          <h2>Who We Are</h2>
          <p>Valnör Global LLC is a U.S.-based international trading company. We specialize in sourcing and distributing top-quality industrial materials to reliable partners in Latin America.</p>
        </section>

        <section id="services" style={styles.section}>
          <h2>Our Services</h2>
          <ul>
            <li>🌎 Industrial sourcing</li>
            <li>✅ Quality control and supervision</li>
            <li>🚢 Full logistics coordination</li>
            <li>🗣️ Multilingual support</li>
          </ul>
        </section>

        <section id="divisions" style={styles.section}>
          <h2>Divisions</h2>
          <ul>
            <li>🌲 <b>Valnör Wood</b> — MDF panels, melamine, plywood</li>
            <li>⚙️ <b>Valnör Metal</b> — Profiles, sheets, hardware</li>
            <li>⚗️ <b>Valnör Chemicals</b> — Raw materials, polymers, additives</li>
            <li>🧵 <b>Valnör Textiles</b> — Technical fabrics, workwear</li>
            <li>🔌 <b>Valnör Electronics</b> — Components, devices</li>
          </ul>
        </section>

        <section id="contact" style={styles.section}>
          <h2>Contact Us</h2>
          <p>Email: <a href="mailto:export@valnor-global.com">export@valnor-global.com</a></p>
          <p>Location: Miami, FL – Operating globally</p>
        </section>
      </main>

      <footer style={styles.footer}>
        © 2025 Valnör Global LLC. All rights reserved.
      </footer>
    </>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#0f172a',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 10
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.2rem'
  },
  navLink: {
    marginLeft: '1.5rem',
    color: 'white',
    textDecoration: 'none'
  },
  main: {
    padding: '2rem'
  },
  title: {
    fontSize: '1.8rem',
    textAlign: 'center',
    margin: '2rem 0'
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  section: {
    marginBottom: '3rem'
  },
  footer: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#f3f4f6',
    marginTop: '2rem'
  }
};