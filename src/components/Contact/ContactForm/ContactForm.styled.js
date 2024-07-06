import styled from 'styled-components';
import { Report } from 'notiflix/build/notiflix-report-aio';

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  padding: 36px 12px;
  background: var(--bg-slider-card);

  & > *:not(:last-child) {
    margin-bottom: 6px;
  }

  & > *:nth-last-child(2) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    padding: 36px 24px;
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    padding: 48px;
    width: 596px;

    & > *:not(:last-child) {
      margin-bottom: 0;
    }

    & > *:nth-last-child(2) {
      margin-bottom: 32px;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: justify;
  height: 80px;
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  /* position: relative; */
  color: var(--primary-color);

  @media screen and (min-width: 1280px) {
    gap: 12px;
    height: 90px;
  }
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid
    ${(props) => (props.$errors ? 'var(--error)' : 'var(--light-green)')};
  font-family: Fira Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  background: transparent;
  transition: var(--transition);
  color: var(--primary-color);

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px var(--bg-slider-card) inset;
    -webkit-text-fill-color: var(--primary-color);
  }

  &::placeholder {
    font-family: Fira Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.72px;
    background: transparent;
    color: var(--placeholder);
  }

  &:hover {
    border-bottom: 1px solid var(--primary-color);
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid
      ${(props) => (props.$errors ? 'var(--error)' : 'var(--primary-color)')};
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    letter-spacing: -0.8px;

    &::placeholder {
      font-size: 20px;
      letter-spacing: -0.8px;
    }
  }
`;

export const Textarea = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: justify;
  height: 174px;
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  position: relative;
  color: var(--primary-color);

  @media screen and (min-width: 1280px) {
    gap: 12px;
    height: 180px;
  }
`;

export const Message = styled.textarea`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 147px;
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid
    ${(props) => (props.$errors ? 'var(--error)' : 'var(--light-green)')};
  font-family: Fira Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  background: transparent;
  resize: none;
  transition: var(--transition);
  color: var(--primary-color);

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px var(--bg-slider-card) inset;
    -webkit-text-fill-color: var(--primary-color);
  }

  &::placeholder {
    font-family: Fira Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.72px;
    background: transparent;
    color: var(--placeholder);
  }

  &:hover {
    border-bottom: 1px solid var(--primary-color);
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid
      ${(props) => (props.$errors ? 'var(--error)' : 'var(--primary-color)')};
  }

  @media screen and (min-width: 1280px) {
    height: 149px;
    font-size: 20px;
    letter-spacing: -0.8px;

    &::placeholder {
      font-size: 20px;
      letter-spacing: -0.8px;
    }
  }
`;

export const ErrorText = styled.p`
  /* position: absolute; */
  /* right: 0; */
  /* bottom: -24px; */
  text-align: right;
  font-family: Fira Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
  color: var(--error);
`;

export const Button = styled.button`
  display: flex;
  width: fit-content;
  height: 39px;
  padding: 4px 4px 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 500px;
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 112.5%;
  letter-spacing: -0.64px;
  margin-left: auto;
  transition: var(--transition);
  background: transparent;
  border: 1px solid var(--light-green);
  color: var(--primary-color);

  svg {
    width: 32px;
    height: 32px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    background: var(--light-green);
    stroke: var(--primary-color);
    fill: none;
  }

  &:hover {
    color: var(--light-green);
    border: 1px solid var(--primary-color);
    background: var(--primary-color);
  }
`;

Report.init({
  width: '320px',
  backgroundColor: `var(--bg-color-main)`,
  borderRadius: '25px',
  rtl: false,
  zindex: 4002,
  backOverlay: true,
  backOverlayColor: 'rgba(23, 61, 51, 0.25)',
  backOverlayFilter: 'blur(2px)',
  backOverlayClickToClose: false,
  fontFamily: 'Fira Sans',
  svgSize: '110px',
  plainText: true,
  titleFontSize: '20px',
  titleMaxLength: 34,
  messageFontSize: '16px',
  messageMaxLength: 400,
  buttonFontSize: '14px',
  buttonMaxLength: 34,
  cssAnimation: true,
  cssAnimationDuration: 360,
  cssAnimationStyle: 'fade',
  success: {
    svgColor: `var(--light-green)`,
    titleColor: `var(--primary-color)`,
    messageColor: `var(--primary-color)`,
    buttonBackground: `var(--light-green)`,
    buttonColor: `var(--primary-color)`,
    backOverlayColor: 'rgba(23, 61, 51, 0.35)',
    backOverlayFilter: 'blur(2px)',
  },
  failure: {
    svgColor: `var(--error)`,
    titleColor: `var(--primary-color)`,
    messageColor: `var(--primary-color)`,
    buttonBackground: `var(--error)`,
    buttonColor: `var(--primary-color)`,
    backOverlayColor: 'rgba(23, 61, 51, 0.35)',
    backOverlayFilter: 'blur(2px)',
  },
});
