import { HiCheckCircle } from "react-icons/hi";
import { Link } from "react-router-dom";


const tiers = [
    {
    name: 'SANS ENGAGEMENT',
    id: 'tier-hobby',
    priceMonthly: '290DHS',
    description: "The perfect plan if you're just getting started with our offer.",
    features: [
        'Custom 12-week program', 
        'Monthly 30-min check-in', 
        'Exercise video library', 
        'Email support'
    ],
    featured: false,
    },
    {
    name: 'ENGAGEMENT',
    id: 'tier-enterprise',
    priceMonthly: '190DHS',
    description: 'Most popular for serious athletes.',
    features: [
        'Everything in Basic',
        'In-person sessions (Austin)',
        'Advanced analytics',
        'Custom nutrition plan',
        'Recovery protocol',
        '24/7 priority access',
    ],
    featured: true,
    },
]

function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
return (
    <div className="relative isolate bg-black px-6 py-24 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base/7 font-semibold text-[#F0DE36]">Pricing</h2>
            <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
                SIMPLE PLANS. SERIOUS RESULTS.
            </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
            loyalty, and driving sales.
            </p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
            <div
            key={tier.id}
            className={classNames(
                tier.featured ? 'relative bg-black' : 'bg-white/2.5 sm:mx-8 lg:mx-0',
                tier.featured
                ? ''
                : tierIdx === 0
                ? 'sm:rounded-b-none lg:rounded-tr-none'
                : 'sm:rounded-t-none lg:rounded-bl-none',
                ' p-8 ring-2 ring-[#F0DE36] sm:p-10',
            )}
            >
            <h3
                id={tier.id}
                className={classNames(tier.featured ? 'text-[#F0DE36]' : 'text-[#F0DE36]', 'text-base/7 font-semibold')}
            >
                {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
                <span
                className={classNames(
                    tier.featured ? 'text-white' : 'text-white',
                    'text-5xl font-semibold tracking-tight',
                )}
            >
                {tier.priceMonthly}
                </span>
                <span className={classNames(tier.featured ? 'text-[#F0DE36]' : 'text-[#F0DE36]', 'text-base')}>/month</span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-300', 'mt-6 text-base/7')}>
                {tier.description}
            </p>
            <ul
                role="list"
                className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-300',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
                )}
            >
                {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                    <HiCheckCircle 
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-[#F0DE36]' : 'text-[#F0DE36]', 'h-6 w-5 flex-none')}
                    />
                    {feature}
                </li>
                ))}
            </ul>
            <Link
                to="/join"
                className={classNames(
                tier.featured
                    ? 'bg-[#F0DE36] text-black hover:text-[#F0DE36] hover:bg-black focus-visible:outline-[#F0DE36] transition'
                    : 'bg-white/10 text-white inset-ring inset-ring-[#F0DE36] hover:bg-white/20 focus-visible:outline-white/75',
                    'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
                )}
            >
                Get started today
            </Link>
        </div>
        ))}
        </div>
    </div>
)
}
