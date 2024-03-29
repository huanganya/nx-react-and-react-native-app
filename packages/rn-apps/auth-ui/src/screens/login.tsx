import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from 'packages/rn-commons/states';
import { UserType } from '@shareapp1/types';
import { MyButton, MyText } from 'packages/rn-commons/ui/src';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Login(props: DashboardProps) {
  const { navigate } = useNavigation();
  const scrollViewRef = useRef<null | ScrollView>(null);
  const {logIn} = useAuth();

  return (
    <>
      <ScrollView
        ref={(ref) => {
          scrollViewRef.current = ref;
        }}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <Text>Please Login!</Text>
        <MyButton
          title={'Login as Supervisee'}
          onPress={() => {
            logIn({ role: UserType.Supervisee });
          }}
        />
        <MyButton
          title={'Login as Supervisor'}
          onPress={() => {
            logIn({ role: UserType.Supervisor });
          }}
        />
        <MyText />
      </ScrollView>
    </>
  );
}

export default Login;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
});
