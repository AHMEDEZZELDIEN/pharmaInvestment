export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input type="text" className="w-full border rounded px-3 py-2" placeholder="Your Name" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" placeholder="you@email.com" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea className="w-full border rounded px-3 py-2" rows={5} placeholder="How can we help you?" required />
        </div>
        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Send Message</button>
      </form>
    </div>
  );
}
