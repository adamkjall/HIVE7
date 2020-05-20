import styled from 'styled-components';
import fontSizes from 'tokens/fontSizes.mjs';
import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';

export const StyledSignUpContainer = styled.div`
  .h1-in-center {
    text-align: center;
    color: ${colors.green};
  }

  .signup-form-container {
    margin: 1rem auto;
    max-width: 300px;
    display: grid;
    grid-template-columns: 45px 8fr;
    grid-template-rows: 1fr 1px 1fr 1px 1fr 1px 1fr 1px 70px 40px;
  }

  .signup-form-container2 {
    margin: 1rem auto 0;
    max-width: 300px;
    display: grid;
    grid-template-columns: 45px 8fr;
    grid-template-rows: 0.8fr 12px 1.2fr 12px 0.8fr 0.5fr;
  }

  .red {
    font-size: ${fontSizes.microcopy};
    position: relative;
    top: -20px;
    left: 10px;
    color: red;
    height: 1px;
    margin: 0;
  }

  .redlvl {
    position: relative;
    top: 2px;
    color: red;
    height: 20px;
    margin: 0;
  }

  label {
    font-size: ${fontSizes.s};
  }

  .swedish {
    input[type='radio'] {
      margin: 0 0.5rem 0.5rem 0rem;
    }
  }

  p {
    font-size: ${fontSizes.s};
  }

  .gender {
    input[type='radio'] {
      margin: 0 0.5rem 0rem;
    }
  }
  .profilebox-1 {
    .changepic {
      position: relative;
      top: 29px;
      font-size: ${fontSizes.s};
      text-decoration: underline;
      color: ${colors.red};
    }
  }
  .reddott {
    position: relative;
    left: 15px;
    top: 35px;

    &.nr2 {
      top: 15px;
    }
  }

  .donedott {
    position: relative;
    left: 15px;
    top: 35px;
    &.nr2 {
      top: 15px;
    }
  }

  .buttondiv {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    .nextbutton {
      width: 90%;
      &.grey {
        background-color: ${colors.gray4};
      }
    }
  }

  .redline {
    width: 1px;
    height: 50px;
    background-color: ${colors.red};
    position: relative;
    left: 21px;
    top: -24px;
  }

  .redline2 {
    width: 1px;
    height: 63px;
    background-color: ${colors.red};
    position: relative;
    left: 21px;
    top: -50px;
    &.long {
      height: 77px;
      top: -70px;
    }
  }

  .uploadfile-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 13px;

    input[type='file'] {
      display: none;
    }

    .file-upload {
      border: none;
      cursor: pointer;

      .profile-picture {
        display: block;
        width: 60px;
        height: 60px;
        margin: 0.5rem 0;
      }

      .swap-profile-picture {
        color: ${colors.red};
        text-decoration: underline;
      }
    }
  }
  .the-bottom-line {
    position: relative;
    left: 50px;
  }
  .container {
    max-width: 100vw;
    position: relative;
    left: 2rem;
  }

  .bold {
    font-weight: bold;
  }

  .cover {
    object-fit: cover;
  }

  .round {
    border-radius: 999rem;
  }

  .red-underline {
    color: ${colors.red};
    text-decoration: underline;
  }
`;

export const StyledProgress = styled.div`
  width: 4rem;
  height: 4rem;
  /*
  * react-circular-progressbar styles
  * All of the styles in this file are configurable!
  */

  .CircularProgressbar {
    /*
    * This fixes an issue where the CircularProgressbar svg has
    * 0 width inside a "display: flex" container, and thus not visible.
    */
    width: 100%;
    /*
    * This fixes a centering issue with CircularProgressbarWithChildren:
    * https://github.com/kevinsqi/react-circular-progressbar/issues/94
    */
    vertical-align: middle;
  }

  .CircularProgressbar .CircularProgressbar-path {
    stroke: ${colors.red};
    stroke-linecap: round;
    transition: stroke-dashoffset 0.5s ease 0s;
  }

  .CircularProgressbar .CircularProgressbar-trail {
    stroke: #d6d6d6;
    /* Used when trail is not full diameter, i.e. when props.circleRatio is set */
    stroke-linecap: round;
  }

  .CircularProgressbar .CircularProgressbar-text {
    fill: ${colors.red};
    font-size: 20px;
    dominant-baseline: middle;
    text-anchor: middle;
  }

  .CircularProgressbar .CircularProgressbar-background {
    fill: #d6d6d6;
  }

  /*
  * Sample background styles. Use these with e.g.:
  *
  *   <CircularProgressbar
  *     className="CircularProgressbar-inverted"
  *     background
  *     percentage={50}
  *   />
  */
  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-background {
    fill: ${colors.red};
  }

  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text {
    fill: #fff;
  }

  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path {
    stroke: #fff;
  }

  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail {
    stroke: transparent;
  }
`;
