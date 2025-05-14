export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Valnör Global LLC</h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto">Connecting manufacturers with reliable buyers across Latin America.</p>
        <nav className="mt-6 flex justify-center space-x-6 text-sm text-gray-700">
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#divisions" className="hover:underline">Divisions</a>
          <a href="#why" className="hover:underline">Why Valnör</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section id="about" className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-base leading-relaxed">
          Valnör Global LLC is a U.S.-based international trading company. We specialize in sourcing and distributing top-quality industrial materials to reliable partners in Latin America. Our direct connections with manufacturers ensure competitive pricing, product consistency, and custom-tailored solutions.
        </p>
      </section>

      <section id="services" className="bg-gray-100 p-6 rounded-2xl shadow-md max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Industrial sourcing (MDF, chemicals, metals, fabrics, electronics)</li>
          <li>Quality control and private label packaging</li>
          <li>Full logistic coordination and compliance</li>
          <li>Multilingual support (English / Spanish / Chinese)</li>
        </ul>
      </section>

      <section id="divisions" className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Divisions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 border rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Valnör Wood</h3>
            <p>MDF panels, melamine boards, plywood and wood-based products.</p>
          </div>
          <div className="p-4 border rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Valnör Metal</h3>
            <p>Metal profiles, sheets, hardware, and industrial fittings.</p>
          </div>
          <div className="p-4 border rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Valnör Chemicals</h3>
            <p>Raw materials, polymers, industrial chemicals and additives.</p>
          </div>
          <div className="p-4 border rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Valnör Textiles</h3>
            <p>Technical fabrics, uniforms, and workwear for industrial use.</p>
          </div>
          <div className="p-4 border rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Valnör Electronics</h3>
            <p>Industrial electronic components, sensors, and control systems.</p>
          </div>
        </div>
      </section>

      <section id="why" className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Why Valnör?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 border rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Latin America Expertise</h3>
            <p>We understand the regional needs, regulations, and market culture.</p>
          </div>
          <div className="p-4 border rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Global Network</h3>
            <p>Direct links to top manufacturers and freight coordinators worldwide.</p>
          </div>
          <div className="p-4 border rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Flexible Logistics</h3>
            <p>FOB, CIF, DDP – adapted to your preferred trade terms.</p>
          </div>
          <div className="p-4 border rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Transparent Operations</h3>
            <p>U.S. registered company, full documentation, reliable transactions.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-100 p-6 rounded-2xl shadow-md max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-2">Email: <a className="text-blue-600" href="mailto:export@valnor-global.com">export@valnor-global.com</a></p>
        <p>Location: Miami, FL – Operating globally</p>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-16">
        &copy; {new Date().getFullYear()} Valnör Global LLC. All rights reserved.
      </footer>
    </div>
  );
}
