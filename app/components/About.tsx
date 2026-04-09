export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=400&fit=crop&crop=center"
              alt="Little Lemon restaurant interior with Mediterranean decor"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
              Despite the city&apos;s diversity, the two brothers recognized the lack of
              Mediterranean cuisine in Chicago, and were inspired to bring the flavors
              of their hometown in Italy to the people of Chicago.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The original menu was very small - just a few classics like bruschetta,
              Margherita pizza, and pasta dishes. But word of mouth spread quickly,
              and within a year, Little Lemon was packed every night.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}