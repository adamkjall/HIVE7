import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import breakpoints from 'helpers/constants/breakpoints.mjs';

import Page from 'compositions/Page';
import Button from 'components/UI/Button';
import Grid from 'components/UI/Grid';
import GridChild from 'components/UI/GridChild';
import H1 from 'components/UI/H1';
import H2 from 'components/UI/H2';
import H3 from 'components/UI/H3';
import Image from 'components/UI/Image';
import Link from 'components/UI/Link';
import Paragraph from 'components/UI/Paragraph';
import Picture from 'components/UI/Picture';

import imageJpg from 'assets/images/image.jpg';
import pictureJpg from 'assets/images/2560x1440.jpg';
import pictureWebp from 'assets/images/2560x1440.webp';
import imageSvg from 'assets/images/graphic.svg';

const soundEffects = [
  { word: 'Wham', bgc: '#E4572E' },
  { word: 'Boom', bgc: '#76B041' },
  { word: 'Sploosh', bgc: '#FFC914' }
];

const ExamplesView = () => (
  <Page metadata={{ title: 'Examples' }}>
    <H1>Examples</H1>
    <Paragraph>
      This page showcase the different available components and how to use them.
    </Paragraph>
    <H2>Grid</H2>
    <Grid
      maxWidth="1440px"
      rowGap={40}
      columnGap={10}
      style={{ backgroundColor: '#2E282A' }}
      childPadding="30px"
      margins="60px auto"
    >
      <GridChild style={{ backgroundColor: '#17BEBB' }}>
        <h2>Grid & GridChild example</h2>
        <h4>
          Those h2 and h4 tag are both a part of the same GridChild. This grid is 6 columns and 4
          columns on mobile.
        </h4>
      </GridChild>
      {soundEffects.map((soundEffect, index) => (
        <GridChild
          key={index}
          style={{ backgroundColor: soundEffect.bgc }}
          columnSpan={[
            { start: 1 },
            {
              break: breakpoints.mobileMax,
              columns: 4,
              start: index % 2 === 0 ? 1 : 3
            }
          ]}
        >
          <h3>{soundEffect.word}</h3>
          columnSpan: [ &#123; start: 1 &#125;, &#123; break: {breakpoints.mobileMax}, columns: 4,
          start: {index % 2 === 0 ? 1 : 3} &#125; ]
        </GridChild>
      ))}
    </Grid>
    <H2>Components</H2>
    <Link as={RouterLink} to="/">
      Internal link to home page
    </Link>
    <br />
    <Link external to="https://humblebee.se">
      External link to humblebee.se
    </Link>
    <Paragraph>You don&apos;t have to try to impress me Morty.</Paragraph>
    <Button nature="default" stretch onClick={console.info}>
      Default button
    </Button>
    <br />
    <Button nature="primary" stretch onClick={console.info}>
      Primary button
    </Button>
    <H3>Images</H3>
    <Grid
      align="center"
      maxWidth="1440px"
      rowGap={40}
      columnGap={10}
      childPadding="1em"
      margins="60px auto"
    >
      <GridChild
        columnSpan={[
          { start: 1, columns: 6 },
          {
            break: breakpoints.tablet,
            columns: 3,
            start: 1
          },
          {
            break: breakpoints.desktop,
            columns: 2,
            start: 2
          }
        ]}
      >
        <Image src={imageJpg} caption="A bitmap picture" />
      </GridChild>
      <GridChild
        columnSpan={[
          { start: 1, columns: 6 },
          {
            break: breakpoints.tablet,
            columns: 3,
            start: 4
          },
          {
            break: breakpoints.desktop,
            columns: 2,
            start: 4
          }
        ]}
      >
        <Image src={imageSvg} caption="A vectorial picture" />
      </GridChild>
    </Grid>
    <H3>
      Picture (<code>jpg:298kb</code> | <code>webp:19kb</code>)
    </H3>
    <Picture
      caption="Responsive picture"
      src={pictureJpg}
      sources={[
        { type: 'image/webp', srcSet: pictureWebp },
        { type: 'image/jpeg', srcSet: pictureJpg }
      ]}
    />
  </Page>
);

export default ExamplesView;
