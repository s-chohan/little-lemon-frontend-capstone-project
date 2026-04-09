export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Little Lemon
            </h1>
            <h2 className="text-2xl mb-4 text-yellow-100">
              Chicago
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              We are a family owned Mediterranean restaurant, focused on traditional recipes
              served with a modern twist. Our chefs draw inspiration from Italian, Greek, and
              Turkish cuisine to create dishes that are both familiar and exciting.
            </p>
            <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Reserve a Table
            </button>
          </div>
          <div className="lg:text-right">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop&crop=center"
                alt="Delicious Mediterranean dishes at Little Lemon"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}