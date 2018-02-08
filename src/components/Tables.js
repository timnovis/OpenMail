import styled from 'styled-components';
import variables from '../helpers/styleVariables';

export const Table = styled.table`
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;
  background-color: transparent;
  text-align: left;

  thead th {
    vertical-align: bottom;
    border-bottom: 2px solid ${variables.grey};
    font-weight: 500;
  }

  tbody td {
    border-top: 1px solid ${variables.grey};
  }

  th,
  td {
    padding: 0.75rem;
  }
`;
