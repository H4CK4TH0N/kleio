
import { siteConfig } from '@/config/site.config'
import { MessageSquare, FileText, Zap, ChartBar, Lock, Cloud } from 'lucide-react';

interface Feature {
  id: number
  name: string
  description: string
  icon: JSX.Element
}

const iconSize = 18

const FeaturesData: Feature[] = [
  {
    id: 1,
    name: 'Intelligent Transcription',
    description:
      'Kleio uses advanced AI to accurately transcribe your meetings in real-time, capturing every important detail.',
    icon: <MessageSquare size={iconSize} />,
  },
  {
    id: 2,
    name: 'AI-Powered Summarization',
    description:
      'Transform lengthy meetings into concise, actionable summaries with our state-of-the-art natural language processing.',
    icon: <FileText size={iconSize} />,
  },
  {
    id: 3,
    name: 'Instant Presentation Creation',
    description:
      'Automatically generate professional slides from your meeting content, saving hours of manual work.',
    icon: <Zap size={iconSize} />,
  },
  {
    id: 4,
    name: 'Insightful Analytics',
    description:
      'Gain valuable insights into meeting patterns, participation, and productivity with our comprehensive analytics dashboard.',
    icon: <ChartBar size={iconSize} />,
  },
  {
    id: 5,
    name: 'Enterprise-Grade Security',
    description:
      'Rest easy knowing your meeting data is protected with end-to-end encryption and robust security measures.',
    icon: <Lock size={iconSize} />,
  },
  {
    id: 6,
    name: 'Seamless Cloud Integration',
    description:
      'Powered by Squid Cloud, Kleio offers reliable, scalable, and high-performance cloud-native functionality.',
    icon: <Cloud size={iconSize} />,
  },
]

const FeaturesGrid = () => {
  return (
    <div>
      <div className="mt-8 grid w-full grid-cols-2 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {FeaturesData.map((feature) => {
          return (
            <div key={feature.id} className="width-fit text-left">
              <div className="mb-2 w-fit rounded-lg bg-blue-500 p-1 text-center text-white ">
                {feature.icon}
              </div>
              <div className="text-md mb-1 font-semibold text-gray-900 dark:text-gray-100">
                {feature.name}
              </div>
              <div className="font-regular max-w-sm text-xs text-gray-600  dark:text-gray-400">
                {feature.description}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const FeaturesWithHeading = () => {
  return (
    <div className="flex w-full max-w-5xl mx-auto flex-col items-center justify-center">
      <h1 className="mb-2 max-w-3xl text-center text-2xl font-semibold tracking-tighter text-gray-900 md:text-3xl dark:text-gray-100">
        {siteConfig.name} is not like other meeting summarizers
      </h1>
      <p className="max-w-sm text-center text-sm text-gray-600 dark:text-gray-400">
        {siteConfig.name} is a meeting summarizer that is designed to be easy to use, customizable,
        and user friendly.
      </p>
      <FeaturesGrid />
    </div>
  )
}
