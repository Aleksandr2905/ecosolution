import styled from 'styled-components';

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  padding: 36px 12px;
  background: var(--bg-slider-card);

  & > *:not(:last-child) {
    margin-bottom: 28px;
  }

  & > *:nth-last-child(2) {
    margin-bottom: 16px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  position: relative;
  color: var(--primary-color);
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
`;

export const ErrorText = styled.p`
  position: absolute;
  right: 0;
  bottom: -24px;
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
