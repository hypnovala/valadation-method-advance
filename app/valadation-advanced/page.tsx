import Link from 'next/link';
import Image from 'next/image';

const benefits = [
  'Deepens embodiment work for women who already understand nervous system regulation and somatic pacing.',
  'Creates a refined container for integrating desire, discernment, boundaries, and relational truth over 60+ days.',
  'Supports sustainable transformation through high-touch guidance rather than quick-fix intensity.',
];

const deliveryOptions = [
  {
    title: 'Online | Private 1:1 Support',
    description:
      'A discreet virtual container for women who want advanced integration without leaving home—ideal for steady accountability, reflection, and guided somatic implementation.',
    details: ['Weekly touchpoints', 'Personalized integration prompts', 'High-level support between sessions'],
  },
  {
    title: 'Houston | In-Person Bodywork',
    description:
      'An elevated body-led experience in Houston for women desiring hands-on support, deeper tissue-level unwinding, and immersive nervous system recalibration.',
    details: ['Somatic bodywork sessions', 'Energetic and physical attunement', 'Premium in-person care'],
  },
];

const faqs = [
  {
    question: 'Who is this designed for?',
    answer:
      'This experience is intentionally built for women who already have a foundation in somatic, embodiment, or therapeutic self-work and are ready for a more advanced level of support.',
  },
  {
    question: 'Is this a beginner offering?',
    answer:
      'No. The Advanced Integration container is positioned as premium, nuanced, and high-touch. It assumes familiarity with body-based awareness and a willingness to engage with subtler layers of integration.',
  },
  {
    question: 'How long is the experience?',
    answer:
      'The container spans 60+ days, allowing enough time for meaningful change to be practiced, integrated, and stabilized in daily life.',
  },
  {
    question: 'How do I choose between online and Houston bodywork?',
    answer:
      'Choose online if you want private 1:1 guidance with flexibility from anywhere. Choose Houston in-person bodywork if you want direct physical support and an immersive, hands-on somatic experience.',
  },
];

export default function ValadationAdvancedPage() {
  return (
    <main className="overflow-hidden bg-gold-radial">
      <section className="relative isolate">
        <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.24),transparent_45%)]" />
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10 sm:px-10 lg:px-12">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <span className="text-sm uppercase tracking-[0.4em] text-[#f4df9b]">Valadation Method™</span>
            <Link
              href="#apply"
              className="rounded-full border border-[#d4af37]/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#f4df9b] transition hover:border-[#f4df9b] hover:bg-white/5"
            >
              Reserve your space
            </Link>
          </div>

          <div className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
            <div className="space-y-8">
              <span className="inline-flex rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#f4df9b]">
                Advanced integration · 60+ days
              </span>
              <div className="space-y-6">
                <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                  Valadation Method™ — Advanced Integration for women ready to embody what they already know.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[#d7ceba] sm:text-xl">
                  A premium, longer-range container for women already practicing somatic work who desire refined support,
                  deeper body trust, and elegant integration that lasts beyond the session.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#options"
                  className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-[#f4df9b]"
                >
                  Explore delivery options
                </Link>
                <Link
                  href="#faq"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-[#d4af37]/40 hover:bg-white/5"
                >
                  Read the FAQ
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(212,175,55,0.22),rgba(255,255,255,0.03),rgba(212,175,55,0.1))]" />
              <div className="relative rounded-[2rem] border border-[#d4af37]/20 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.35em] text-[#f4df9b]">Purpose & intent</p>
                <div className="mt-6 space-y-6 text-[#e8dfce]">
                  <p className="text-2xl font-medium leading-10 text-white">
                    The Valadation Method is designed to help women integrate body truth, emotional clarity, and relational standards with depth.
                  </p>
                  <p className="leading-8 text-[#d5ccb8]">
                    This advanced container is not about learning the basics. It is about supporting the woman who has already begun the work,
                    and now wants a more precise, luxurious structure for sustaining what her body is revealing.
                  </p>
                </div>
                <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
                  {['Premium positioning', 'High-touch support', 'Designed for experienced women'].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-[#d7ceba]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-[#f4df9b]">Why this exists</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              An elevated path for women whose somatic practice is ready for deeper integration.
            </h2>
            <div className="relative mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30 shadow-glow">
              <Image
                src="/section-two-local.svg"
                alt="Stylized candle-lit portrait artwork used as a premium section visual."
                width={1200}
                height={720}
                className="h-80 w-full object-cover sm:h-96 lg:h-[28rem]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />
            </div>
          </div>
          <div className="grid gap-5">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 text-base leading-8 text-[#ddd4c2] shadow-glow"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="options" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-[#f4df9b]">Delivery options</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Choose the support format that matches your desired depth and proximity.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#d7ceba]">
            Both pathways hold the same premium standard: grounded support, intentional pacing, and space for nuanced transformation over time.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {deliveryOptions.map((option) => (
            <article
              key={option.title}
              className="group rounded-[2rem] border border-[#d4af37]/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 shadow-glow transition hover:border-[#d4af37]/45 hover:bg-[linear-gradient(180deg,rgba(212,175,55,0.12),rgba(255,255,255,0.03))]"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#f4df9b]">Premium path</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{option.title}</h3>
              <p className="mt-4 text-base leading-8 text-[#d8d0bf]">{option.description}</p>
              <ul className="mt-8 space-y-3 text-sm uppercase tracking-[0.22em] text-[#efe2b3]">
                {option.details.map((detail) => (
                  <li key={detail} className="rounded-full border border-white/10 px-4 py-3">
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#f4df9b]">FAQ</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Questions women often ask before entering this level of work.
          </h2>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-glow open:border-[#d4af37]/35 open:bg-white/[0.06]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-medium text-white">
                {faq.question}
                <span className="text-[#f4df9b] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#d8d0bf]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="apply" className="px-6 py-24 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-[#d4af37]/25 bg-[linear-gradient(180deg,rgba(212,175,55,0.14),rgba(255,255,255,0.04))] p-10 shadow-glow backdrop-blur sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.35em] text-[#f4df9b]">Final invitation</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                If your body is asking for a more advanced level of support, this is your next step.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-[#e0d6c5]">
                Enter a private 60+ day container designed for women who value depth, discernment, and premium care. Choose online 1:1 guidance or Houston in-person bodywork and begin the next layer of integration.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="mailto:hello@valadationmethod.com?subject=Valadation%20Method%20Advanced%20Integration"
                className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-[#f4df9b]"
              >
                Apply now
              </a>
              <a
                href="mailto:hello@valadationmethod.com?subject=Houston%20Bodywork%20Inquiry"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-[#d4af37]/40 hover:bg-white/5"
              >
                Ask about Houston bodywork
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
