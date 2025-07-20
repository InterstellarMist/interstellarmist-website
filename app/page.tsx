import Image from "next/image";

export default function Page() {
  return (
    <section>
      <h1 className="mb-12 text-3xl font-semibold tracking-tighter">
        Welcome to my website ✨
      </h1>

      <Image src={"/blog/assets/homepage/me pic.jpg"} alt="Nicholas Chai" width={250} height={250} className="rounded-[40px] mb-8" />
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Hi, I'm Nicholas Chai
      </h1>
      <h2 className="mb-4 text-lg font-light tracking-tighter">
        Applied Physics graduate, systems tinkerer, lifelong learner.
      </h2>
      <p className="mb-4 whitespace-pre-line">
        {`Welcome to my corner of the web. I build and explore systems, whether they’re physical, digital, or philosophical. With a background in Applied Physics and a deep interest in computing, I’ve spent the last few years diving into networking, self-hosted infrastructure, automation, and programming. From configuring Linux servers to experimenting with code and building personal tools, I find meaning in understanding how things work and making them work better.

    This site is both a living lab and a personal gateway. You’ll find notes on the tools I’m building, the concepts I’m exploring, and the occasional reflection on life, systems, and the strange harmony between them.

    Thanks for stopping by. Feel free to explore.`}
      </p>
    </section>
  );
}
