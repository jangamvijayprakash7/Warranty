// app/page.tsx

export default function HomePage() {
  return (
    <main className="bg-slate-100 text-gray-800">
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Store Receipts. Track Warranties.
            <span className="text-blue-600"> Never Miss an Expiry.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Upload receipts, manage warranty details, and get smart reminders
            before your warranties expire.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/register"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-500"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">
            Managing Receipts Is Hard
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Paper receipts get lost",
              "Warranty expiry is forgotten",
              "No single place to store data",
              "Hard to find purchase details",
            ].map((text, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow"
              >
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* HOW IT WORKS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">1. Upload Receipt</h3>
              <p className="text-gray-600">
                Upload your bill as image or PDF
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">
                2. Add Warranty Details
              </h3>
              <p className="text-gray-600">
                Enter product and warranty information
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">3. Get Reminders</h3>
              <p className="text-gray-600">
                Receive alerts before warranty expires
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Receipt Storage", "Warranty Tracking", "Smart Reminders", "Easy Search", "Cloud Backup", "Secure Access"].map(
              (feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow"
                >
                  <h3 className="font-semibold text-lg mb-2">{feature}</h3>
                  <p className="text-gray-600">
                    Simple and reliable way to manage your purchases
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Start Organizing Your Receipts Today
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of users who never miss warranty claims.
          </p>
          <a
            href="/register"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow hover:bg-blue-700"
          >
            Create Free Account
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <p>© 2025 Digital Warranty Organizer</p>
          <div className="flex gap-6">
            <a href="/about" className="hover:text-white">About</a>
            <a href="/contact" className="hover:text-white">Contact</a>
            <a href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
