export default function Academic() {
  return (
    <section
      id="academic"
      className="space-y-6 py-10 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-3xl font-semibold border-b-2 border-indigo-500 inline-block text-gray-800 dark:text-white">
        Academic Qualifications
      </h2>
      <div>
        {/* Designation */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          MASTER OF COMPUTER APPLICATIONS
        </h3>
        {/* Company name, smaller but still a heading */}
        <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-400">
          Karpagam college of Engineering(Anna University)
        </h4>
        {/* Date */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          06/2011 - 04/2014
        </p>
      </div>
      <div>
        {/* Designation */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          BACHELOR OF SCIENCE IN COMPUTER SCIENCE
        </h3>
        {/* Company name, smaller but still a heading */}
        <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-400">
          V.L.B Janakiammal college of Arts and science(Bharathiar University)
        </h4>
        {/* Date */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          06/2008 - 04/2011
        </p>
      </div>
    </section>
  );
}
