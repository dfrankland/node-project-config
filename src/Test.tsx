/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import * as PropTypes from 'prop-types';
/* eslint-enable */

export interface TestProps {
  name: string;
}

const Test: React.FunctionComponent<TestProps> = ({ name }) => (
  <h1>Hello, {name}!</h1>
);

Test.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Test;
