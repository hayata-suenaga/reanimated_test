import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const GestureHandlerExample = () => {
  const touchX = useSharedValue(0);
  const touchY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      touchX.value = event.translationX;
      touchY.value = event.translationY;
    },
    onEnd: () => {
      touchX.value = withSpring(0);
      touchY.value = withSpring(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: touchX.value }, { translateY: touchY.value }],
  }));

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.rectangle, animatedStyle]} />
      </PanGestureHandler>
    </View>
  );
};

export default GestureHandlerExample;

const RECTANGLE_SIZE = 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    width: RECTANGLE_SIZE,
    height: RECTANGLE_SIZE,
    borderRadius: RECTANGLE_SIZE / 2,
    backgroundColor: 'tomato',
  },
});
