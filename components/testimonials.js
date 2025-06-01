import Image from "next/image";

const testimonialsData = [
  {
    quote: "TaxLaw Hub provided invaluable assistance with our corporate tax restructuring. Their expertise saved us a significant amount.",
    name: "John Smith",
    title: "CEO, Innovate Corp",
    avatar: "/avatars/john-smith.jpg", // Placeholder avatar path
  },
  {
    quote: "The team at TaxLaw Hub made tax planning simple and effective. Highly recommended!",
    name: "Jane Doe",
    title: "Small Business Owner",
    avatar: "/avatars/jane-doe.jpg", // Placeholder avatar path
  },
  {
    quote: "Their knowledge of international tax law is exceptional. They guided us through complex regulations with ease.",
    name: "Peter Jones",
    title: "Finance Director, Global Ventures",
    avatar: "/avatars/peter-jones.jpg", // Placeholder avatar path
  },
  {
    quote: "Responsive, thorough, and trustworthy. TaxLaw Hub is our go-to for all tax matters.",
    name: "Sarah Williams",
    title: "Controller, Tech Solutions Ltd.",
    avatar: "/avatars/sarah-williams.jpg", // Placeholder avatar path
  },
  {
    quote: "Navigating tax compliance was a breeze thanks to TaxLaw Hub's clear guidance.",
    name: "David Lee",
    title: "Operations Manager",
    avatar: "/avatars/david-lee.jpg", // Placeholder avatar path
  },
  {
    quote: "They helped us successfully resolve a challenging tax audit efficiently.",
    name: "Emily Chen",
    title: "Founder, Green Energy Co.",
    avatar: "/avatars/emily-chen.jpg", // Placeholder avatar path
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-2 text-lg leading-6 text-gray-600">
            Hear directly from businesses and individuals who trust Singh Sharma & Associates.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg p-6">
              <div className="flex items-center mb-4">
                {/* Star Icon Placeholder */}
                <svg
                  className="h-6 w-6 text-yellow-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .288l2.833 8.718h9.167l-7.416 5.389 2.833 8.718-7.417-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
                </svg>
                <p className="text-gray-700 italic">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center">
                {/* Avatar Placeholder */}
                <div className="flex-shrink-0">
                  <Image
                    className="h-10 w-10 rounded-full"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 