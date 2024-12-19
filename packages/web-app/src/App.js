import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";

import Logo from "./images/logo.png";
import Custom from "./images/custom1.jpg";
import Header1 from "./images/header1.jpg";
import Header2 from "./images/header2.jpg";
import Header3 from "./images/header3.jpg";
import Project1 from "./images/project1.jpg";
import Project2 from "./images/project2.jpg";
import Project3 from "./images/project3.jpg";
import Project4 from "./images/project4.jpg";
import Person from "./images/testimonials1.png";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidingDATA.length);
    }, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="App">
      <div className="first-section">
        <div className="first-section-first-block">
          <ul className="first-section-ul">
            <li>Peterborough, UK</li>
            <li>hello@services.com</li>
            <li>+44 7837 383 484</li>
          </ul>
        </div>

        <div className="first-section-second-block">
          <div>
            <input
              type="email"
              class="textbox"
              id="exampleInputEmail1"
              placeholder="Username"
            />
          </div>
          <div>
            <input type="password" class="textbox" placeholder="Password" />
          </div>
        </div>
      </div>
      <div className="second-section">
        <div className="second-section-first-block">
          <div className="logo-block">
            <img src={Logo} alt="logo" className="logo-image" />
          </div>
          <div className="tabs-block">
            {tabsDATA?.map((item) => {
              return <div className="tabs-block-item">{item}</div>;
            })}
          </div>
        </div>
        <div className="second-section-second-block">
          <div className="sliding-item">
            <img
              src={slidingDATA[currentSlide]?.image}
              alt={slidingDATA[currentSlide]?.name}
            />
            <div className="sliding-item-desc">
              <div>
                <h3>{slidingDATA[currentSlide]?.heading}</h3>
                <p>{slidingDATA[currentSlide]?.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="third-section">
        {thirdSectionDATA?.map((item) => {
          return (
            <div
              className="third-section-item"
              style={{ backgroundColor: item?.color }}
            >
              <h3 class="card-title text-center">{item?.heading}</h3>
              <div class="text-center mt-4 text-white">
                <i class={item?.class}></i>
              </div>
              <h5 class="card-title mt-4">{item?.description}</h5>
            </div>
          );
        })}
      </div>
      <div className="fourth-section">
        <h1>Latest Project</h1>
        <div className="fourth-section-block">
          {latestProjectDATA?.map((item) => {
            return (
              <div className="card-view">
                <img src={item?.image} alt={item?.name} />
                <div class="card-description">
                  <p class="card-title">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="fifth-section">
        <div className="fifth-section-first-view">
          <img src={Custom} alt="custom" />
          <div className="fifth-section-text">
            <h3>JUST FEW WORDS</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              aut.jhbjk wnkjndkml kmdmdlkmakmdla jndlqndlkn dlkndlkw jwndlwndln
            </p>
            <ul>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
        </div>
        <div className="fifth-section-second-view">
          <div className="fifth-section-inner-view">
            <img src={Person} alt="custom" />
            <div>
              <h3>EMMA THOMSON</h3>
              <p>Happy Customer</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                ipsa sint delectus error
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class=" mt-5 p-3" style={{ backgroundColor: "#dbdbdb" }}>
        <div class="d-flex justify-content-center ms-5">
          <div class="me-5">
            <h3>POPULAR ARTICLES</h3>
            <div class="flex-row mt-2" style={{ color: "#017eba" }}>
              <div class="me-2">
                <i class="fa-solid fa-angle-right"></i>
              </div>
              <div>Subpage </div>
            </div>
            <div class="flex-row mt-2" style={{ color: "#017eba" }}>
              <div class="me-2">
                <i class="fa-solid fa-angle-right"></i>
              </div>
              <div>Error 404 </div>
            </div>
            <div class="flex-row mt-2" style={{ color: "#017eba" }}>
              <div class="me-2">
                <i class="fa-solid fa-angle-right"></i>
              </div>
              <div>Example </div>
            </div>
            <div class="flex-row mt-2" style={{ color: "#017eba" }}>
              <div class="me-2">
                <i class="fa-solid fa-angle-right"></i>
              </div>
              <div>Typography </div>
            </div>
            <div class="flex-row mt-2" style={{ color: "#017eba" }}>
              <div class="me-2">
                <i class="fa-solid fa-angle-right"></i>
              </div>
              <div>All Template Positions </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const tabsDATA = [
  "HOME",
  "FEATURES",
  "EXAMPLES",
  "PAGES",
  "LANGUAGES",
  "CONTACT US",
];
const slidingDATA = [
  {
    name: "image1",
    image: Header1,
    heading: "STARTING YOUR OWN BUSINESS",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde neque fugiat  provident possimus et atque culpa vitae minus repellendus autem?",
  },
  {
    name: "image2",
    image: Header2,
    heading: "MICROSOFT OFFICE TRAINING",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde neque fugiat  provident possimus et atque culpa vitae minus repellendus autem?",
  },
  {
    name: "image3",
    image: Header3,
    heading: "ANDROID DEVELOPMENT",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde neque fugiat  provident possimus et atque culpa vitae minus repellendus autem?",
  },
];

const thirdSectionDATA = [
  {
    heading: "TIME MACHINE",
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    color: "#017eba",
    class: "fa-solid fa-clock fa-6x",
  },
  {
    heading: "ANALYTICS",
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    color: "#a0b046",
    class: "fa-solid fa-tv fa-6x",
  },
  {
    heading: "WORLDWIDE SERVICES",
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    color: "#f78145",
    class: "fa-solid fa-earth-asia fa-6x",
  },
];

const latestProjectDATA = [
  {
    name: "Project1",
    image: Project1,
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
  },
  {
    name: "Project2",
    image: Project2,
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
  },
  {
    name: "Project3",
    image: Project3,
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
  },
  {
    name: "Project4",
    image: Project4,
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
  },
];
