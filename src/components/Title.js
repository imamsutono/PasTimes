import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import AppText from './AppText';
import * as globalStyles from '../styles/global';

const Title = ({ children, style }) => (
  <AppText style={[styles.title, style]}>
    {children}
  </AppText>
);

Title.PropTypes = {
  children: PropTypes.node,
  style: Text.propTypes.style
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'HelveticaNeue-CondensedBold',
    fontSize: 18,
    color: globalStyles.HEADER_TEXT_COLOR,
    backgroundColor: `${globalStyles.BG_COLOR}99`
  }
});

export default Title;
