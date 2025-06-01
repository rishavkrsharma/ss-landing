'use client'

export default function Contact() {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact Us</h2>
        <p className="mt-2 text-lg/8 text-gray-600">Fill out the form below or reach out via phone or email. We look forward to hearing from you.</p>
      </div>
      <div className="mx-auto mt-10 max-w-xl">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">Our Information</h2>
          <div className="mb-2 text-gray-600">
            <strong>Address:</strong> 1212B, 12th Floor, Tower A, Phase-I, Spectrum Metro Mall, Sector-75, Noida, UP-201301
          </div>
          <div className="mb-2 text-gray-600">
            <strong>Email:</strong> legal@singhsharma.in
          </div>
          <div className="text-gray-600">
            <strong>Phone:</strong> +91 9560103269 | 8877777345
          </div>
        </div>
      </div>
    </div>
  );
} 