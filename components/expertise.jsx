import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/outline'
  
  const features = [
    { name: 'Push to Deploy', icon: CloudUploadIcon },
    { name: 'SSL Certificates', icon: LockClosedIcon },
    { name: 'Simple Queues', icon: RefreshIcon },
    { name: 'Advanced Security', icon: ShieldCheckIcon },
    { name: 'Powerful API', icon: CogIcon },
    { name: 'Database Backups', icon: ServerIcon },
  ]
  
  export default function Expertise() {
    const expertiseAreas = [
      {
        title: 'GST Litigation & Advisory',
        description: 'Expert guidance and strategic solutions for GST litigation and advisory services, ensuring resolution with confidence.',
        icon: '💼' // Placeholder icon
      },
      {
        title: 'Income Tax Litigation & Advisory',
        description: 'Expert Income Tax litigation and advisory services for strategic oversight, dispute resolution, and regulatory assurance.',
        icon: '💡' // Placeholder icon
      },
      {
        title: 'Tax Planning',
        description: 'Proactive strategies to minimize tax liabilities and maximize savings for individuals and corporations.',
        icon: '🛡️' // Placeholder icon
      },
      {
        title: 'White Collar Crimes',
        description: 'Expert legal defense and advisory for white-collar crime cases, ensuring strategic resolution and regulatory integrity.',
        icon: '📄' // Placeholder icon
      },
      {
        title: 'Insolvency & Bankruptcy',
        description: 'Expert legal solutions for insolvency and bankruptcy, ensuring strategic resolution and financial stability.',
        icon: '💻' // Placeholder icon
      },
      {
        title: 'Arbitration',
        description: 'Expert legal guidance and representation for arbitration, ensuring fair resolution and strategic advocacy.',
        icon: '🤝' // Placeholder icon
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
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>

        {/* Main content */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Expertise</h2>
            <p className="mt-4 text-lg text-gray-500">
              We provide comprehensive legal services to navigate the complexities of commercial tax law.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((area) => (
              <div key={area.title} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-blue-500 text-white">
                    {/* Replace with actual icons */}
                    {area.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{area.title}</h3>
                <p className="mt-2 text-base text-gray-500">{area.description}</p>
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
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    )
  }
  
