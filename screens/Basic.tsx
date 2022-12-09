import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const Basic = () => {
  const opacity = useSharedValue(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    opacity.value = withTiming(visible ? 1 : 0, { duration: 500 });
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: interpolate(opacity.value, [0, 1], [0.5, 1]) }],
    backgroundColor: interpolateColor(
      opacity.value,
      [0, 1],
      ['blue', 'tomato']
    ),
  }));

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.rectangle, animatedStyle]} />
      <Button title="Click me!" onPress={() => setVisible(!visible)} />
    </SafeAreaView>
  );
};

export default Basic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    height: 50,
    width: 50,
  },
});
