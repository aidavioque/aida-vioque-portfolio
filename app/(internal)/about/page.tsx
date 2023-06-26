/* eslint-disable @next/next/no-img-element */

function About() {
  return (
    <div className="container py-24">
      <p className="pb-10">
        Hi! I&rsquo;m <span className="font-bold">Aida</span>, a{' '}
        <span className="font-bold">Product Designer</span> (UX/UI), currently
        based in Spain.
      </p>
      <p>
        My career path has led me through diverse fields and roles, including
        illustration and design, education, and editorial. It is my curiosity in
        understanding people&rsquo;s motivations and my interest for creating
        impactful solutions that has driven me towards the role of Product
        Designer.
      </p>
      <div className="mt-20 flex">
        <div className="flex-1 space-y-8">
          <div>
            <h3 className="pb-2 font-bold text-primary">Jewelry freelancing</h3>
            <p>
              My first attempt at product design was in jewellery. My main goal
              was to get a harmonic combination between aesthetics and
              wearability, such as lightness, ergonomic shapes, and material
              combination.
            </p>
          </div>
          <div>
            <h3 className="pb-2 font-bold text-primary">
              Clothing design freelancing
            </h3>
            <p>
              I needed to organise my worktime myself, so a friend and I started
              a little service for people to make personalised gifts. It was a
              success and it escalated so we had to become more reachable and
              have a catalogue and a content blog.
            </p>
          </div>
          <div>
            <h3 className="pb-2 font-bold text-primary">
              Freelance Illustration and Design
            </h3>
            <p>
              Illustration was my lover. I had some jobs from time to time and
              commissions, also personal projects which helped to discover
              organised and understand my style. Also, most importantly, allowed
              me to grow artistically and as a person.
            </p>
          </div>
          <div>
            <h3 className="pb-2 font-bold text-primary">
              History Magazine of UAM
            </h3>
            <p>
              This experience brought me tons of practical experience to work
              with letters, so I became Editor as a reflection of my love for
              words and meaning. I was just a few steps ahead of discovering UX
              Writing.
            </p>
          </div>
          <div>
            <h3 className="pb-2 font-bold text-primary">
              Digital Content Editor
            </h3>
            <p>
              Diving completely into the EdTech world: worked with Product &
              developers to bring innovative educational products. UX writing
              and Editing on products & LMS. Worked on Instructional Design
              content and events.
            </p>
          </div>
          <div>
            <h3 className="pb-2 font-bold text-primary">
              Teaching Asisstant at The Hero Camp
            </h3>
            <p>
              As a teaching assistant at THC, I contribute to the development of
              course materials and lead instructional sessions. I provide
              feedback and identify areas to help improve the overall learning
              experience.
            </p>
          </div>
          <div>
            <h3 className="pb-2 font-bold text-primary">Product Designer</h3>
            <p>
              As a designer on the Product team, I deliver solutions to expand
              product awareness. I also design communications for our clients
              and teams, assist with UX writing, research, redefine flows, and
              contribute to social media marketing.
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-between">
          <img src="/images/jewelry.png" alt="jewelry icon" className="w-36" />
          <img src="/images/t-shirt.png" alt="t-shirt icon" className="w-36" />
          <img src="/images/brush.png" alt="brush icon" className="w-24" />
          <img src="/images/editor.png" alt="editor icon" className="w-36" />
          <img
            src="/images/text-book.png"
            alt="text-book icon"
            className="w-36"
          />
          <img src="/images/web.png" alt="web icon" className="w-36" />
        </div>
      </div>
    </div>
  );
}

export default About;
