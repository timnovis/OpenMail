import styled from 'styled-components';
import { darken } from 'polished';
import Modal from 'react-modal';
import variables from '../helpers/styleVariables';

export const InputWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const InputLabel = styled.label`
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  color: ${darken(0.2, variables.grey)};
  margin-bottom: 0.5rem;
  display: block;
`;

export const Input = styled.input`
  border-bottom: 1px solid ${variables.grey};
  padding: 0.6rem;
  width: 100%;

  &:focus {
    outline: 0;
    border-bottom-color: ${variables.tertiary};
  }
`;

export const Select = styled.select`
  border-radius: 0;
  appearance: none;
  border-bottom: 1px solid ${variables.grey};
  padding: 0.6rem;
  width: 100%;
  background: transparent;

  &:focus {
    outline: 0;
    border-bottom-color: ${variables.tertiary};
  }
`;

export const Textarea = styled.textarea`
  border-bottom: 1px solid ${variables.grey};
  padding: 0.6rem;
  width: 100%;

  &:focus {
    outline: 0;
    border-bottom-color: ${variables.tertiary};
  }
`;

export const ModalWrapper = styled(Modal)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: ${variables.radius};
  padding: 1rem;
  border: 1px solid ${variables.grey};
  min-width: 500px;

  &:focus {
    outline: 0;
  }

  h2 {
    margin-top: 0;
  }
`;
