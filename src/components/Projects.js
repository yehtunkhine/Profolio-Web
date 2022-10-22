import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import KajaImg1 from "../assets/img/Kaja1.png";
import KajaImg2 from "../assets/img/Kaja2.png";
import KajaImg3 from "../assets/img/Kaja3.png";
import KajaImg4 from "../assets/img/Kaja4.png";
import KajaImg5 from "../assets/img/Kaja5.png";

import Gan1 from "../assets/img/GAN1.png"
import Gan2 from "../assets/img/GAN2.png"
import Gan3 from "../assets/img/GAN3.png"
import Gan4 from "../assets/img/GAN4.png"
import Gan5 from "../assets/img/GAN5.png"
import Gan6 from "../assets/img/GAN6.png"
import fam from "../assets/img/YeTunFamcolored.jpg"

import 'animate.css';

export const Projects = () => {

  const Kajaproject = [
    {
      title: "Kaja Hangout Web",
      description: "Design & Development",
      imgUrl: KajaImg1,
    },
    {
      title: "Kaja Hangout Web",
      description: "Design & Development",
      imgUrl: KajaImg2,
    },
    {
      title: "Kaja Hangout Web",
      description: "Design & Development",
      imgUrl: KajaImg3,
    },
    {
      title: "Kaja Hangout Web",
      description: "Design & Development",
      imgUrl: KajaImg4,
    },
    {
      title: "Kaja Hangout Web",
      description: "Design & Development",
      imgUrl: KajaImg5,
    },

  ];

  const GANprojects = [
    {
      title: "Pokemon GAN",
      description: "Training Result 0 of 100",
      imgUrl: Gan1,
    },
    {
      title: "Pokemon GAN",
      description: "Training Result 20 of 100",
      imgUrl: Gan2,
    },
    {
      title: "Pokemon GAN",
      description: "Training Result 40 0f 100",
      imgUrl: Gan3,
    },
    {    
      title: "Pokemon GAN",
      escrption: "Training Result 60 of 100",
      imgUrl: Gan4,
    },
    {
      title: "Pokemon GAN",
      description: "Training Result 80 of 100",
      imgUrl: Gan5,
    },
    {
      title: "Pokemon GAN",
      description: "Training Result 100 of 100",
      imgUrl: Gan6,
    },
  ];

  const more = [
    {
      title: "Family Picture",
      description: "Just thought it would be cute",
      imgUrl: fam,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>Here are the demos of some of the porjects that I worked on. For more information visit my github provided on top fo the page</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                <p>Kaja Hangout App - a web application that allows user to create, edit and share events with categories within the school community.</p>
                  <Row>
                    {
                      Kajaproject.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <p>Pokemon GAN - An imgage generating model using unsupervised representaiton learning with deep convolutional Generative Adversarial Networks.</p>
                  <Row>
                    {
                      GANprojects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>  
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>More Project to come but for now just enjoy some cute art :P</p>
                  <Row>
                    {
                      more.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
