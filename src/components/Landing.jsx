import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import image from "../assets/share.avif";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const tl = useRef();
  const tl2 = useRef();
  const tl3 = useRef();
  const tl4 = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .from("nav h1, nav h4, nav button", {
          y: -40,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          delay: 1,
        })
        .from(".center-part1 h1", {
          x: -200,
          opacity: 0,
          duration: 0.5,
        })
        .from(".center-part1 p", {
          x: -100,
          opacity: 0,
          duration: 0.4,
        })
        .from(".center-part1 button", {
          opacity: 0,
          duration: 0.4,
        })
        .from(
          ".center-part2 img",
          {
            opacity: 0,
            duration: 0.5,
            x: 200,
          },
          "-=0.5"
        )
        .from(".section1bottom img", {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.15,
        });
    },
    { scope: section1 }
  );

  useGSAP(
    () => {
      tl2.current = gsap
        .timeline()
        .from(".services", {
          opacity: 0,
          y: 30,
          duration: 0.5,
        })
        .from(
          ".elem.line1.left",
          {
            x: -300,
            opacity: 0,
            duration: 2,
          },
          "anim1"
        )
        .from(
          ".elem.line1.right",
          {
            x: 300,
            opacity: 0,
            duration: 1,
          },
          "anim1"
        )
        .from(
          ".elem.line2.left",
          {
            x: -300,
            opacity: 0,
            duration: 1,
          },
          "anim2"
        )
        .from(
          ".elem.line2.right",
          {
            x: 300,
            opacity: 0,
            duration: 1,
          },
          "anim2"
        );
      ScrollTrigger.create({
        trigger: section2.current,
        start: "top 0%",
        end: "bottom 0%",
        scrub: 1,
        pin: true,
        animation: tl2.current,
      });
    },
    { scope: section2 }
  );

  useGSAP(
    () => {
      tl3.current = gsap
        .timeline()
        .from(".section3 .part2 img", {
          y: -100,
          rotate: 360,
          opacity: 0,
          duration: 1,
        })
        .from(
          ".section3 h2",
          {
            opacity: 0,
            y: 200,
          },
          "fadeIn"
        )
        .from(
          ".section3 p",
          {
            opacity: 0,
            y: 200,
          },
          "fadeIn"
        )
        .from(".section3 button", {
          opacity: 0,
        });
      ScrollTrigger.create({
        trigger: section3.current,
        start: "top 10%",
        end: "bottom 0%",
        scrub: 1,
        pin: true,
        animation: tl3.current,
      });
    },
    { scope: section3 }
  );

  useGSAP(
    () => {
      tl4.current = gsap
        .timeline()
        .from(
          ".section4 h2",
          {
            opacity: 0,
            y: 30,
          },
          "fadeIn"
        )
        .from(
          ".section4 p",
          {
            opacity: 0,
            y: 30,
          },
          "fadeIn"
        )
        .from(".section4 .card,.section4 button", {
          opacity: 0,
          y: 30,
          stagger: 0.4,
        });
      ScrollTrigger.create({
        trigger: section4.current,
        start: "top 60%",
        end: "bottom bottom",
        scrub: 1,
        animation: tl4.current,
      });
    },
    { scope: section4 }
  );
  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    gsap.to(".cursor", {
      top: y,
      left: x,
    });
  };

  const handleEnter = (e) => {
    const elem = e.currentTarget.querySelector(".elem h4");
    const rect = elem.getBoundingClientRect();
    const x = (e.clientX - rect.left) / 10;
    const y = (e.clientY - rect.top) / 10;
    gsap.to(elem, {
      x: x,
      y: y,
      ease: "none",
      duration: 1,
    });
  };

  const handleLeave = (e) => {
    const elem = e.currentTarget.querySelector(".elem h4");
    gsap.to(elem, {
      x: 0,
      y: 0,
      ease: "back",
      duration: 1,
    });
  };
  return (
    <main onMouseMove={(e) => handleMouseMove(e)}>
      <div className="cursor"></div>
      <section ref={section1} className="section1">
        <nav>
          <h1>
            <i className="ri-shining-2-fill"></i> WizardZ
          </h1>
          <div className="part2">
            <h4>About Us</h4>
            <h4>Services</h4>
            <h4>Use Cases</h4>
            <h4>Pricing</h4>
            <h4>Blog</h4>
            <button>Request a quote</button>
          </div>
        </nav>
        <div className="center">
          <div className="center-part1">
            <h1>Navigating the digital landscape for success</h1>
            <p>
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <button onClick={() => console.log("clicked")}>
              Book a consultation
            </button>
          </div>
          <div className="center-part2">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="section1bottom">
          <img
            src="https://cdn.prod.website-files.com/65c3aad23a5a1cc719c8993d/65c3bc7b39dc25b25eafc9c6_Company%20logo.svg"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/65c3aad23a5a1cc719c8993d/65c3bc7b44404ee1185a5a0b_Company%20logo-1.svg"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/65c3aad23a5a1cc719c8993d/65c3bc7b65a4e884b2952dd7_Company%20logo-2.svg"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/65c3aad23a5a1cc719c8993d/65c3bc7b65a4e884b2952dea_Company%20logo-3.svg"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/65c3aad23a5a1cc719c8993d/65c3bc7bcef8ce1d4e929ee2_Company%20logo-4.svg"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/65c3aad23a5a1cc719c8993d/65c3bc7b51f0dd39facb9e01_Company%20logo-5.svg"
            alt=""
          />
        </div>
      </section>
      <section ref={section2} className="section2">
        <div className="services">
          <h3>Services</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            corporis at eveniet voluptatem tempore porro tenetur quam quaerat
            mollitia! Aut!
          </p>
        </div>
        <div className="container">
          <div
            className="elem line1 left"
            onMouseMove={(e) => handleEnter(e)}
            onMouseLeave={(e) => handleLeave(e)}
          >
            <div className="elem-part1">
              <div>
                <h2>Search engine</h2>
                <h2>optimization</h2>
              </div>
              <h4>
                <i className="ri-arrow-right-up-line"></i> Learn more
              </h4>
            </div>
            <div className="elem-part2">
              <img
                src="https://cdn.prod.website-files.com/65c3aad23a5a1cc719c8993d/65c49bc1993fe39bcc9c5222_Illustration.png"
                alt=""
              />
            </div>
          </div>
          <div
            className="elem black line1 right"
            onMouseMove={(e) => handleEnter(e)}
            onMouseLeave={(e) => handleLeave(e)}
          >
            <div className="elem-part1">
              <div>
                <h2>Pay per click</h2>
                <h2>advertisement</h2>
              </div>
              <h4>
                <i className="ri-arrow-right-up-line"></i> Learn more
              </h4>
            </div>
            <div className="elem-part2">
              <img
                src="https://cdn.prod.website-files.com/65c3aad23a5a1cc719c8993d/65c49bc1eb903e46b0856af4_Illustration-1.png"
                alt=""
              />
            </div>
          </div>
          <div
            className="elem black line2 left"
            onMouseMove={(e) => handleEnter(e)}
            onMouseLeave={(e) => handleLeave(e)}
          >
            <div className="elem-part1">
              <div>
                <h2>Social media</h2>
                <h2>marketing</h2>
              </div>
              <h4>
                <i className="ri-arrow-right-up-line"></i> Learn more
              </h4>
            </div>
            <div className="elem-part2">
              <img
                src="https://cdn.prod.website-files.com/65c3aad23a5a1cc719c8993d/65c49bc1e8fbac9c30365f12_Illustration-2.png"
                alt=""
              />
            </div>
          </div>
          <div
            className="elem line2 right"
            onMouseMove={(e) => handleEnter(e)}
            onMouseLeave={(e) => handleLeave(e)}
          >
            <div className="elem-part1">
              <div>
                <h2>E-mail</h2>
                <h2>marketing</h2>
              </div>
              <h4>
                <i className="ri-arrow-right-up-line"></i> Learn more
              </h4>
            </div>
            <div className="elem-part2">
              <img
                src="https://cdn.prod.website-files.com/65c3aad23a5a1cc719c8993d/65c49bc1c18d1e54bd943699_tokyo-sending-messages-from-one-place-to-another%201.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section ref={section3} className="section3">
        <div className="part1">
          <h2>Lets make things happen</h2>
          <p>
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
          <button>Get your free proposal</button>
        </div>
        <div className="part2">
          <img
            src="https://cdn.prod.website-files.com/65c3aad23a5a1cc719c8993d/65c49bc025cb62f5bad7f7cf_Illustration.svg"
            alt=""
          />
        </div>
      </section>
      <section ref={section4} className="section4">
        <div className="case-studies">
          <h2>Case Studies</h2>
          <p>
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>
        <div className="case-cards">
          <div className="card">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <button>
              Learn more <i className="ri-arrow-right-up-line"></i>
            </button>
          </div>
          <div className="card">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <button>
              Learn more <i className="ri-arrow-right-up-line"></i>
            </button>
          </div>
          <div className="card">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <button>
              Learn more <i className="ri-arrow-right-up-line"></i>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Landing;
