/* This example requires Tailwind CSS v2.0+ */
import Image from "next/image";

const coreTeamData = [
  {
    name: 'Dibya Prashant Singh',
    title: 'Founder Partner',
    description: 'An experienced advocate, specializes in tax litigation and advisory, representing clients before India\'s top courts and tribunals.',
    avatar: '/team/dibya.jpeg',
  },
  {
    name: 'Sanjay Kumar Sharma',
    title: 'Compliance Expert',
    description: 'A seasoned Chartered Accountant, brings over a decade of expertise in audit, taxation, and business advisory across diverse sectors.',
    avatar: '/team/sanjay.jpeg',
  },
  {
    name: 'Aseem Gupta',
    title: 'Senior Tax Consultant',
    description: 'A Chartered Accountant with over 35 years of expertise, specializes in tax planning, corporate restructuring, and strategic financial advisory.',
    avatar: '/team/aseem.jpeg',
  },
];

const teamData = [
  {
    name: 'Kumar Sameer',
    title: 'Associate Counsel',
    description: 'An experienced advocate, specializes in dispute resolution, arbitration, and white-collar crime litigation, delivering strategic legal solutions.',
    avatar: '/team/sameer.jpeg',
  },
  {
    name: 'Mukesh Pushpam',
    title: 'Associate Counsel',
    description: 'An accomplished advocate, specializes in corporate law, commercial contracts, regulatory compliance, and white-collar crime litigation.',
    avatar: '/team/mukesh.jpeg',
  },
  {
    name: 'Sahil Yadav',
    title: 'Associate Counsel',
    description: 'An advocate specializing in corporate law, delivers strategic legal solutions in governance, mergers, acquisitions, and commercial contracts.',
    avatar: '/team/sahil.jpeg',
  },
  {
    name: 'Arshia',
    title: 'Associate Counsel',
    description: 'Specializing in intellectual property law, provides expert legal counsel on patents, trademarks, copyrights, and insolvency disputes',
    avatar: '/team/arshia.jpeg',
  },
  {
    name: 'Avinash Kumar',
    title: 'Associate Counsel',
    description: 'An advocate specializing in commercial, company, and property law, provides expert legal counsel on insolvency, restructuring, and RERA matters',
    avatar: '/team/avinash.jpeg',
  },
  {
    name: 'Pushpesh Kumar Kashyap',
    title: 'Associate',
    description: 'Chartered Accountant with strong analytical skills, ready to support businesses in financial and tax matters.',
    avatar: '/team/pushpesh.jpeg',
  },
];

export default function Team() {
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
        <div className="space-y-12">
          {/* Core Team Section */}
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Meet Our Core Team</h2>
            <p className="text-xl text-gray-500">
              Meet our core team—dedicated legal experts committed to excellence, integrity, and strategic advocacy
            </p>
          </div>
          <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            {coreTeamData.map((person) => (
              <li key={person.name} className="py-10 px-6 bg-gray-100 text-center rounded-lg xl:px-10">
                <div className="space-y-6 xl:space-y-10">
                  <Image className="mx-auto h-24 w-24 rounded-full object-cover" src={person.avatar} alt={person.name} width={96} height={96} />
                  <div className="space-y-2">
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3 className="text-gray-900">{person.name}</h3>
                      <p className="text-indigo-600 text-sm">{person.title}</p>
                    </div>
                    <p className="text-gray-500 text-sm">{person.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Our Team Section */}
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none text-center mt-16">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Meet Our Team</h2>
            <p className="text-xl text-gray-500">
              Our experienced professionals are dedicated to providing exceptional legal counsel.
            </p>
          </div>
          <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            {teamData.map((person) => (
              <li key={person.name} className="py-10 px-6 bg-gray-100 text-center rounded-lg xl:px-10">
                <div className="space-y-6 xl:space-y-10">
                  <Image className="mx-auto h-24 w-24 rounded-full object-cover" src={person.avatar} alt={person.name} width={96} height={96} />
                  <div className="space-y-2">
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3 className="text-gray-900">{person.name}</h3>
                      <p className="text-indigo-600 text-sm">{person.title}</p>
                    </div>
                    <p className="text-gray-500 text-sm">{person.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
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
  