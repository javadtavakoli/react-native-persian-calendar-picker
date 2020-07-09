/**
 * Persian Calendar Picker Component
 *
 * Copyright 2016 Reza (github.com/rghorbani)
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */

'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const { Platform, Text, View } = require('react-native');

const Utils = require('./utils');
const Controls = require('./controls');

function HeaderControls(props) {
  const {
    styles,
    currentMonth,
    currentYear,
    onPressNext,
    onPressPrevious,
    months,
    previousTitle,
    nextTitle,
    textStyle,
    headingLevel,
  } = props;
  const MONTHS = months ? months : Utils.MONTHS; // English Month Array
  // getMonth() call below will return the month number, we will use it as the
  // index for month array in english
  const previous = previousTitle ? previousTitle : 'قبلی';
  const next = nextTitle ? nextTitle : 'بعدی';
  const month = MONTHS[currentMonth];
  const year = currentYear;

  const accessibilityProps = { accessibilityRole: 'header' };
  if (Platform.OS === 'web') {
    accessibilityProps['aria-level'] = headingLevel;
  }

  return (
    <View style={styles.headerWrapper}>
      <Controls
        label={">"}
        onPressControl={()=>console.log("Previous Year")}
        styles={[styles.monthSelector,styles.prev]}
        textStyles={textStyle}
        />
      <Controls
        label={previous}
        onPressControl={onPressPrevious}
        styles={[styles.monthSelector, styles.prev]}
        textStyles={textStyle}
      />

      <View>
        <Text style={[styles.monthLabel, textStyle]} {...accessibilityProps}>
          {month} {year}
        </Text>
      </View>
      <Controls
        label={next}
        onPressControl={onPressNext}
        styles={[styles.monthSelector, styles.next]}
        textStyles={textStyle}
      />
      <Controls
        label={"<"}
        onPressControl={()=>console.log("Next Year")}
        styles={[styles.monthSelector,styles.next]}
        textStyles={textStyle}
      />
    </View>
  );
}

HeaderControls.propTypes = {
  currentMonth: PropTypes.number,
  currentYear: PropTypes.number,
  onPressNext: PropTypes.func,
  onPressPrevious: PropTypes.func,
};

module.exports = HeaderControls;
