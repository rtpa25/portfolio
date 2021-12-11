/** @format */

import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Ronit Panda <br />A person who iterates fast
        </SectionTitle>
        <SectionText>
          I’m a software developer specializing in building full stack web and
          mobile apps. Currently, I’m actively looking for an internship at a
          seed or pre-seed state startup as a software developer and contribute
          to teams that want to make a difference .
        </SectionText>
        <Button>
          <a style={{ color: 'white' }} href='mailto:pandaronit25@gmail.com'>
            Get in Touch
          </a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
