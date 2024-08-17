import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Reviews = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item"
        style={{ bottom: "-5%", right: 0, transform: "rotate(-25deg)" }}
      />
      <div className="container">
        <div className="mil-text-center-adapt">
          <p className="mil-upper mil-mb-30">
            Result of my <span className="mil-accent">Work</span>
          </p>
          <h2 className="mil-up mil-mb-60">Testimonials</h2>
          <p className="mil-mb-60">
            Here's what my colleagues and professors have to say about my work.
            These testimonials focus on my dedication,
            <br /> teamwork, and contributions to different projects and
            academic tasks.
          </p>
        </div>
        <div className="mil-divider" />
        <div className="row">
          <div className="col-xl-8">
            <Swiper
              {...sliderProps.reviewsSlider}
              className="swiper-container mil-reviews-slider"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="mil-client">
                        <img src="/img/faces/clients/1.jpg" alt="client" />
                      </div>
                    </div>
                    <div className="col-lg-1" />
                    <div className="col-lg-7">
                      <p className="mil-mb-30">
                        J'ai eu l'opportunité de travailler avec Nasreddine pour
                        le développement d'une application d'impression de
                        tickets intégrée dans notre système de gestion de file
                        d'attente « Qapp ». Nasreddine s'est montré non
                        seulement compétent, mais aussi très sérieux et engagé
                        dans son travail. Il a su parfaitement comprendre nos
                        besoins et a livré une solution robuste et efficace basé
                        sur React JS et Electron JS. Grâce à son travail, nous
                        avons pu améliorer considérablement notre flux de
                        travail, tout en offrant une expérience utilisateur
                        fluide. Je recommande vivement Nasreddine pour tout
                        projet nécessitant des compétences en React JS, Electron
                        JS, ou pour tout développement
                        d'applications sur mesure.
                      </p>
                      <p className="mil-upper mil-text-lg mil-mb-15">
                        Hamza <span className="mil-accent">Benterki</span>
                      </p>
                      <p className="mil-mb-30">
                        {" "}
                        Developement Engineer at Orquilane
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="mil-client">
                        <img src="/img/faces/clients/2.jpg" alt="client" />
                      </div>
                    </div>
                    <div className="col-lg-1" />
                    <div className="col-lg-7">
                      <p className="mil-mb-30">
                        I recommend Nasreddine for his technical skills and
                        professional abilities in software development. His
                        proficiency with recent technologies and tools is
                        remarkable, and his ability to apply this knowledge in
                        various contexts is evident. Additionally, Nasreddine
                        demonstrates effective communication skills and a talent
                        for teamwork, contributing positively to the projects he
                        is involved in. This combination of technical expertise
                        and interpersonal skills makes him a valuable asset for
                        any ambitious project.
                      </p>
                      <p className="mil-upper mil-text-lg mil-mb-15">
                        Dr. BEDJAOUI
                        <span className="mil-accent"> Mohammed</span>
                      </p>
                      <p className="mil-mb-30">
                        {" "}
                        Associate Professor at École Supérieure en Informatique
                        SBA{" "}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="mil-client">
                        <img src="/img/faces/clients/3.jpg" alt="client" />
                      </div>
                    </div>
                    <div className="col-lg-1" />
                    <div className="col-lg-7">
                      <p className="mil-mb-30">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer aliquet auctor ex vel facilisis. Sed ipsum ante,
                        placerat id dignissim quis, porttitor vitae nisi.
                        Maecenas malesuada tempor nibh, vitae condimentum sem
                        dictum a. Nunc mattis et felis sit amet commodo. Cras
                        odio odio, bibendum vel mollis et, ultricies sed est.
                      </p>
                      <p className="mil-upper mil-text-lg mil-mb-15">
                        Achour <span className="mil-accent">Ouahab</span>
                      </p>
                      <p className="mil-mb-30">
                        {" "}
                        I.T Supervisor at Marriott International
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="mil-client">
                        <img src="/img/faces/clients/4.jpg" alt="client" />
                      </div>
                    </div>
                    <div className="col-lg-1" />
                    <div className="col-lg-7">
                      <p className="mil-mb-30">
                        I am delighted to share my experience working with
                        Nassredine Fliti, a full stack freelance developer.
                        Nassredine played a pivotal role in developing a queue
                        management system for one of our major clients. His
                        dedication and professionalism were outstanding. He met
                        all deadlines with precision and continued to closely
                        monitor the project even after delivery, demonstrating a
                        genuine commitment to client satisfaction. His expertise
                        and dedication are invaluable assets to any team.
                      </p>
                      <p className="mil-upper mil-text-lg mil-mb-15">
                        Yasmine <span className="mil-accent">Rihane</span>
                      </p>
                      <p className="mil-mb-30"> R&D Manager at Ourquilane</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="mil-client">
                        <img src="/img/faces/clients/5.jpg" alt="client" />
                      </div>
                    </div>
                    <div className="col-lg-1" />
                    <div className="col-lg-7">
                      <p className="mil-mb-30">
                        I have known Nasreddine for over four years, during
                        which we have collaborated on numerous projects, and I
                        have consistently been impressed by his analytical
                        skills and his ability to tackle complex problems with
                        ease. Our time together in Club Scientifique de l'ESI
                        was particularly significant. As our marketing manager,
                        his varied skill set, which spans multimedia editing,
                        development, and strategic marketing, made him an
                        invaluable asset to our team. Above all Nasreddine has a
                        vibrant personality that brightens every room he enters,
                        paired with a leadership style that inspires and unites
                        his team in collaborative effort.
                      </p>
                      <p className="mil-upper mil-text-lg mil-mb-15">
                        Wissem <span className="mil-accent">Aissaoui</span>
                      </p>
                      <p className="mil-mb-30"> Former President of CSE Club</p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="col-xl-4">
            <div className="mil-reviews-nav">
              <div className="mil-slider-nav mil-mb-30">
                <div className="mil-prev mil-reviews-prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
                <div className="mil-next mil-reviews-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
              <div className="mil-reviews-pagination mil-upper mil-mb-30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
