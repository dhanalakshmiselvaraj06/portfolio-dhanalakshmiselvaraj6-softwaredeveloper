import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { GithubIcon, LinkedinIcon } from './SvgIcons'

export default function Contact() {
  return (
    <section
      id="contact"
      className="space-y-6 py-10 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-3xl font-semibold border-b-2 border-indigo-500 inline-block text-gray-800 dark:text-white">
        Contact
      </h2>

      {/* Location */}
      <div className="flex flex-wrap text-lg font-semibold text-gray-600 dark:text-gray-400 items-center gap-3">
        <MapPinIcon className="w-6 h-6 text-indigo-500 flex-shrink-0" />
        <span>Frankfurt, Germany</span>
      </div>

      {/* Email */}
      <div className="flex flex-wrap text-lg font-semibold text-gray-600 dark:text-gray-400 items-center gap-3">
        <EnvelopeIcon className="w-6 h-6 text-indigo-500 flex-shrink-0" />
        <a
          href="mailto:dhanalakshmi.selvaraj1103@gmail.com"
          className="hover:underline break-words"
        >
          dhanalakshmi.selvaraj1103@gmail.com
        </a>
      </div>

      {/* LinkedIn */}
      <div className="flex flex-wrap text-lg font-semibold text-gray-600 dark:text-gray-400 items-center gap-3">
        <LinkedinIcon className="w-6 h-6 text-indigo-500 flex-shrink-0" />
        <a
          href="https://linkedin.com/in/dhana-lakshmi-selvaraj"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline break-words"
        >
          linkedin.com/in/dhana-lakshmi-selvaraj
        </a>
      </div>

      {/* GitHub */}
      <div className="flex flex-wrap text-lg font-semibold text-gray-600 dark:text-gray-400 items-center gap-3">
        <GithubIcon className="w-6 h-6 text-indigo-500 flex-shrink-0" />
        <a
          href="https://github.com/dhanalakshmiselvaraj06?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline break-words"
        >
          github.com/dhanalakshmiselvaraj06
        </a>
      </div>
    </section>
  )
}
