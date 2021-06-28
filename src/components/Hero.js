import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import A from '../images/A.svg';


const Section = styled.section`
  height: 100vh;
  width: 100%;
  position: fixed;
  justify-content: center;
  align-items: center;
  background: #fcc8e5;
`;

const Container = styled.div`
    position: absolute;
    display: grid;
    bottom: 0px;
    padding: 6rem calc((200vw - 1300px) / 2);
    background-color: #ff5386;
  }
`;

const Image=styled(motion.img)`
  position: relative;
  height: 70vh;
  top:95px;
  left:34%;
  max-width: 500px;
  max-height: 500px;
`;

const Button = styled(motion.button)`
  position: absolute;
  display: block;
  height: 100px;
  width: 100px;
  font-size: 50px;
  top: 20%;
  left: 70%;
  border-radius: 50%;
  border: 5px solid black;
  cursor: pointer;
  background: #00d800;
  color: black;
`;

const Hero = () => {
    const fadeLeft = {
        hidden: { opacity: 1, x: -800 },
        visible: { opacity: 1, x: 0 }
      };


  return (
    <Section>
        <motion.p 
        variants={fadeLeft}
        initial = 'hidden'
        animate = 'visible'
        transition = {{duration : 2}}
        >
            <Image src = {A} alt="A" whileTap={{ scale: 1.1 }}/>
        </motion.p>
    <Container>
    <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.95,
              backgroundColor: '#67F6E7',
              border: 'none',
              color: '#000'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            अ
        </Button>
    </Container>
  </Section>
  );
};

export default Hero;
