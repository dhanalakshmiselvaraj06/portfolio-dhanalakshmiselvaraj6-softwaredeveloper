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

      <div className="flex text-lg font-semibold text-gray-600 dark:text-gray-400 items-center gap-3"> 
        <MapPinIcon className="w-6 h-6 text-indigo-500" />
        <span>Frankfurt, Germany</span>
      </div>

      <div className="flex text-lg font-semibold text-gray-600 dark:text-gray-400 items-center gap-3">
        <EnvelopeIcon className="w-6 h-6 text-indigo-500" />
        <a href="mailto:dhanalakshmi.selvaraj1103@gmail.com" className="hover:underline">
          dhanalakshmi.selvaraj1103@gmail.com
        </a>
      </div>

      <div className="flex text-lg font-semibold text-gray-600 dark:text-gray-400 items-center gap-3">
        <LinkedinIcon className="w-6 h-6 text-indigo-500" />
        <a
          href="https://linkedin.com/in/dhana-lakshmi-selvaraj"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          linkedin.com/in/dhana-lakshmi-selvaraj
        </a>
      </div>

      <div className="flex text-lg font-semibold text-gray-600 dark:text-gray-400 items-center gap-3">
        <GithubIcon className="w-6 h-6 text-indigo-500" />
        <a
          href="https://github.com/dhanalakshmiselvaraj06?tab=repositories"
          target="_blank"/* opens in a new tab  */
          rel="noopener noreferrer"
          className="hover:underline"
        >
          github.com/dhanalakshmiselvaraj06
        </a>
      </div>
    </section>
  )
}
