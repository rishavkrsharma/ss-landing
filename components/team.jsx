/* This example requires Tailwind CSS v2.0+ */
import Image from "next/image";

const coreTeamData = [
  {
    name: 'Dibya Prashant Singh',
    title: 'Founder Partner',
    description: 'Dibya Prashant  is an advocate with a proven track record in representing clients in tax litigation matters before Courts and Tribunals in Delhi and across India for almost a decade. He has successfully represented clients in complex Income Tax, GST and Customs matters before the Supreme Court of India, the High Court of Delhi, the High Court of Judicature at Allahabad, the High Court of Bombay, the Madras High Court, the High Court of Tripura, the ITAT Delhi, and other judicial forums. Dibya Prashant also regularly appears in Income Tax matters before the Commissioner of Income Tax (Appeals), as well as before Appellate Authorities under the GST Acts. His expertise extends beyond litigation, as he regularly advises clients on tax planning and contractual disputes, providing comprehensive legal solutions tailored to their specific needs.',
    avatar: '/team/dibya.jpeg',
  },
  {
    name: 'Sanjay Kumar Sharma',
    title: 'Compliance Expert',
    description: 'Sanjay Kumar Sharma is a Chartered Accountant with over a decade of extensive experience spanning the Mining, Real Estate, QSR, IT, and other dynamic sectors. Sanjay Sharma is a seasoned financial strategist specializing in audit, taxation, and business advisory. His expertise encompasses PSUs, private corporations, and CA firms, providing him with a comprehensive understanding of the regulatory, compliance, and financial challenges faced by businesses. Sanjay is an expert in ROC (Registrar of Companies) matters, ensuring seamless corporate governance and statutory compliance for clients. His deep proficiency in corporate tax strategy makes him a trusted advisor for SMEs and startups, aiding them in navigating complex fiscal landscapes while optimizing growth opportunities.',
    avatar: '/team/sanjay.jpeg',
  },
  {
    name: 'Aseem Gupta',
    title: 'Senior Tax Consultant',
    description: ' Aseem Gupta is a chartered accountant with over 35 years of experience in tax planning, compliance, and business management. During his long illustrious career, Aseem has advised a number of MNCs and domestic companies with regard to tax planning, merger and acquisition, de-merger, corporate restructuring, regulatory compliances, and risk management. He regularly advises clients from the Real Estate, QSR, IT, Retail, Hospitality, and Healthcare sectors. Mr. Gupta is associated with Singh Sharma & Associates in the capacity of a Consultant and regularly advises our clients in areas of tax planning and regulatory compliance. Beyond his technical expertise, Mr. Gupta is known for his strategic insights and pragmatic approach, helping businesses navigate complex financial landscapes with confidence.',
    avatar: '/team/aseem.jpeg',
  },
  {
    name: 'Pushpesh Kumar Kashyap',
    title: 'Associate',
    description: 'A Chartered Accountant with a keen analytical mindset, Pushpesh Kumar Kashyap brings a wealth of expertise in financial management, tax compliance, and business advisory services. He is adept at navigating complex regulatory frameworks and offers strategic guidance to organizations on financial planning, tax optimization, and risk management. With a strong commitment to accuracy and integrity, Pushpesh supports businesses in achieving their fiscal objectives, ensuring compliance with statutory requirements, and driving sustainable growth across diverse sectors.',
    avatar: '/team/pushpesh.jpeg',
  },
];

const teamData = [
  // {
  //   name: 'Kumar Sameer',
  //   title: 'Associate Counsel',
  //   description: 'An experienced advocate, specializes in dispute resolution, arbitration, and white-collar crime litigation, delivering strategic legal solutions.',
  //   avatar: '/team/sameer.jpeg',
  // },
  // {
  //   name: 'Mukesh Pushpam',
  //   title: 'Associate Counsel',
  //   description: 'An accomplished advocate, specializes in corporate law, commercial contracts, regulatory compliance, and white-collar crime litigation.',
  //   avatar: '/team/mukesh.jpeg',
  // },
  // {
  //   name: 'Sahil Yadav',
  //   title: 'Associate Counsel',
  //   description: 'An advocate specializing in corporate law, delivers strategic legal solutions in governance, mergers, acquisitions, and commercial contracts.',
  //   avatar: '/team/sahil.jpeg',
  // },
  {
    name: 'Arshia',
    title: 'Associate Counsel',
    description: 'Arshia, an advocate specializes in protecting and enforcing intellectual property rights like patents, trademarks, and copyrights. She advises clients on IP strategy, drafts, and files applications, and represents clients in disputes or litigation related to intellectual property. Apart from intellectual property matters, she has also represented clients in matters arising out of insolvency and bankruptcy disputes before the NCLT Benches at Delhi and Chandigarh. She regularly appears for clients before the High Court of Punjab & Haryana at Chandigarh, High Court of Delhi as well as the District Courts in Punjab and Delhi.',
    avatar: '/team/arshia.jpeg',
  },
  {
    name: 'Avinash Kumar',
    title: 'Associate Counsel',
    description: ' Avinash Kumar is an advocate who specializes in commercial and company laws. He regularly advises and represents clients in insolvency and company law matters. He assists clients through the complexities of bankruptcy filings, restructuring, and liquidation processes, ensuring their interests are safeguarded and optimal outcomes are achieved. Avinash has a profound understanding of property law, adeptly handling a wide range of property related issues. He offers comprehensive legal services in matters pertaining to RERA Act. His meticulous attention to detail and thorough knowledge of property regulations ensure clients receive sound legal advice and effective solutions.',
    avatar: '/team/avinash.jpeg',
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
          <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-2 lg:gap-8">
            {coreTeamData.map((person) => (
              <li key={person.name} className="py-10 px-6 bg-gray-50 text-center rounded-lg xl:px-10">
                <div className="space-y-6 xl:space-y-10">
                  <img className="mx-auto w-100 h-100 rounded-2xl object-cover" src={person.avatar} alt={person.name} />
                  <div className="space-y-2">
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3 className="text-gray-900">{person.name}</h3>
                      <p className="text-indigo-600 text-sm">{person.title}</p>
                    </div>
                    <p className="text-gray-600 text-sm">{person.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Our Team Section */}
          {/* <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none text-center mt-16">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Meet Our Team</h2>
            <p className="text-xl text-gray-500">
              Our experienced professionals are dedicated to providing exceptional legal counsel.
            </p>
          </div>
          <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            {teamData.map((person) => (
              <li key={person.name} className="py-10 px-6 bg-gray-50 text-center rounded-lg xl:px-10">
                <div className="space-y-6 xl:space-y-10">
                  <img className="mx-auto w-full h-60 rounded-xl object-cover" src={person.avatar} alt={person.name} />
                  <div className="space-y-2">
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3 className="text-gray-900">{person.name}</h3>
                      <p className="text-indigo-600 text-sm">{person.title}</p>
                    </div>
                    <p className="text-gray-600 text-sm">{person.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul> */}
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
  