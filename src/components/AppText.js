import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import * as globalStyle from '../styles/global';

const AppText = ({ children, style, ...rest }) => (
  <Text style={[globalStyle.COMMON_STYLES.text, style]} {...rest}>
    {children}
  </Text>
);

AppText.PropTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};

export default AppText;
