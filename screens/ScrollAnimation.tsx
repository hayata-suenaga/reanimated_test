import { StyleSheet, View } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const ScrollAnimation = () => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      scrollY.value,
      [-100, 0, 100],
      ['gray', '#fff', 'gray']
    ),
  }));

  /* If you omit scrollEventThrottle, the animation doesn't work */
  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      style={[{ height: '100%', width: '100%' }, animatedStyle]}
      contentContainerStyle={{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: 'tomato',
        }}
      />
    </Animated.ScrollView>
  );
};

export default ScrollAnimation;

const styles = StyleSheet.create({});
