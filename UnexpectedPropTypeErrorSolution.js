```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent = (props) => {
  // Type checking for the size prop
  if (typeof props.size !== 'number' || props.size <= 0) {
    console.error('Error: size prop must be a positive number.');
    return null; // Or handle the error appropriately
  }

  return (
    <View style={[styles.container, { width: props.size, height: props.size }]}>
      <Text>My Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default MyComponent;
```