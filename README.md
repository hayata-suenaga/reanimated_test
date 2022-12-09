# Reanimated Test

This project is a playground to test features offered by `react-native-reanimated` library. Some of the code is taken from [a YouTube tutorial vide](https://www.youtube.com/watch?v=dowHt1dckDU&t=4s)

## Features

- [Basic workflow to animate](./screens/Basic.tsx)

  - `useSharedValue`
  - `useAnimatedStyle(() => (styleObj))`
  - `Animated.View`, `sharedValue.value = withTiming(toValue, configObj)`
  - `interpolate(animatedValue.value, [0, 100], [0.5, 1])`

- [Animation with Gesture Handler](./screens/GestureHandlerExample.tsx)

  - [React Native Gesture Handler Doc](https://docs.swmansion.com/react-native-gesture-handler/)
  - `useAnimatedGestureHandler`
  - `<PanGestureHandler onGestureEvent={myGestureHandler}>`

- [Animation with ScrollView](./screens/ScrollAnimation.tsx)

  - `useAnimatedScrollHandler`
  - `<Animated.ScrollView onScroll>`
