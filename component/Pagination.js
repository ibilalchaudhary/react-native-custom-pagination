import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Pagination(props) {
  // if (!props.totalPages || (props.totalPages && props.totalPages === 1)) {
  //   return <View />;
  // }
  const pageNumbers = [];
  for (let i = 1; i <= props.totalPages; i++) {
    pageNumbers.push(
      <Pressable
        key={i}
        onPress={() => {
          props.setPage(i);
        }}
        style={[
          props.buttonStyles ? props.buttonStyles : styles.buttonStyles,
          props.activePage === i
            ? props.active
              ? props.active
              : styles.active
            : props.inactive
            ? props.inactive
            : styles.inactive,
        ]}>
        <Text style={styles.paginationText}>{i}</Text>
      </Pressable>,
    );
  }

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        width: Dimensions.get('window').width,
      }}
      horizontal={true}>
      <View style={styles.paginationWrapper}>
        <Pressable
          style={[
            props.buttonStyles ? props.buttonStyles : styles.buttonStyles,
            props.pressAbleButtonStyles
              ? props.pressAbleButtonStyles
              : styles.pressAbleButtonStyles,
          ]}
          onPress={() => {
            if (props.activePage > 1) {
              props.setPage(props.activePage - 1);
            }
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-left">
            <Path d="M15 18L9 12 15 6" />
          </Svg>
        </Pressable>
        {pageNumbers}
        <Pressable
          style={[
            props.buttonStyles ? props.buttonStyles : styles.buttonStyles,
            styles.pressAbleButtonStyles,
          ]}
          onPress={() => {
            if (props.activePage !== props.totalPages) {
              props.setPage(props.activePage + 1);
            }
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-right">
            <Path d="M9 18L15 12 9 6" />
          </Svg>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  paginationWrapper: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonStyles: {
    height: 35,
    width: 35,
    borderRadius: 40,
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },

  inactive: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  active: {
    backgroundColor: '#242424',
  },
  pressAbleButtonStyles: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  paginationText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
  },
});
