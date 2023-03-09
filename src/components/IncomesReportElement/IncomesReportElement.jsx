import PropTypes from 'prop-types';
import {
  Container,
  Image,
  Total,
} from 'components/ExpensesReportElement/ExpensesReportElement.styled';
import { IncomesItem, Label } from './IncomesReportElement.styled';

export const IncomesReportElement = ({ label, total, url }) => {
  const numberWithSpaces = num => {
    return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <IncomesItem>
      <Container>
        <Total>{numberWithSpaces(total)}</Total>
        <Image src={url} alt={label} />
        <Label>{label}</Label>
      </Container>
    </IncomesItem>
  );
};

IncomesReportElement.propTypes = {
  label: PropTypes.string.isRequired,
  total: PropTypes.number,
  url: PropTypes.string.isRequired,
};
