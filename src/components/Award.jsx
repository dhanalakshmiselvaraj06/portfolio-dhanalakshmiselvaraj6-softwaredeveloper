import React from "react";

const Award = () => {
  return (
    <section
      id="award"
      className="space-y-6 py-10 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-3xl font-semibold border-b-2 border-indigo-500 inline-block text-gray-800 dark:text-white">
        Award
      </h2>
      <div className="text-lg font-semibold text-yellow-500 animate-pulse">
        Emerging Star Award - Alphind Software Solutions (10/2021 - 02/2022)
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
        Reduced the deployment time of a large-scale Angular application by
        implementing lazy loading, improving initial load performance by 55%,
        and received a Quarterly Award for this achievement
      </p>
    </section>
  );
};

export default Award;
