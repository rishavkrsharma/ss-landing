export default function WhyChooseUs() {
  const features = [
    {
      name: 'Experienced Team',
      description: 'Our lawyers have decades of combined experience in commercial tax law.',
      icon: '👥' // Placeholder icon
    },
    {
      name: 'Client-Focused',
      description: 'We prioritize your unique needs and goals in our tax strategies.',
      icon: '🎧' // Placeholder icon
    },
    {
      name: 'Proven Track Record',
      description: 'Successfully helping clients achieve significant tax savings and compliance.',
      icon: '✅' // Placeholder icon
    },
    {
      name: 'Up-to-Date Knowledge',
      description: 'Staying current with the latest tax legislation and trends.',
      icon: '📚' // Placeholder icon
    },
  ];

  return (
    <div className="relative isolate py-24 sm:py-32">
      {/* Top gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#35D4E6] to-[#261CD9] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Choose Singh Sharma?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Benefit from our deep knowledge, personalized approach, and dedication to your success.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md min-h-[250px]">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg text-white">
                      {/* Replace with actual icons */}
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                  <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-gradient-to-tr from-[#35D4E6] to-[#261CD9] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
        />
      </div>
    </div>
  );
}
