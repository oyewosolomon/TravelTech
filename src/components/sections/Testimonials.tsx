// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      quote: "UrbanMove Solutions transformed our city's transit system, reducing wait times and enhancing commuter satisfaction.",
      author: "City Transit Director",
      image: "/api/placeholder/64/64"
    },
    {
      quote: "The real-time passenger information feature is a game-changer for urban mobility.",
      author: "Public Transport Operator",
      image: "/api/placeholder/64/64"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-800 p-8 rounded-lg">
              <div className="flex gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                </div>
              </div>
              <p className="text-lg italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Testimonials