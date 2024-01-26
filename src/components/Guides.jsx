import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/quickstart',
    name: 'Quickstart',
    description: 'Learn how to quickly get started with Trieve.',
  },
  {
    href: '/self_hosting',
    name: 'Self Hosting',
    description: 'Learn how to self-host Trieve on your own infrastructure.',
  },
  {
    href: '/environment_vars',
    name: 'Environment Variables',
    description:
      'Learn about the different environment variables used by Trieve.',
  },
  {
    href: '/custom_llm_embed_server',
    name: 'Use Custom LLM or Embedding Model',
    description: 'Learn how to use custom embedding models and LLMs with Trieve.',
  },
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Guides
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
