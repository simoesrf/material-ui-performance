# Performance Findings

## Material UI

### @material-ui/core
Test conditions:
 - A list of 10000 buttons with similar CSS style between Material UI element and CSS-in-JS module;
 - Mejure how much time we need to render all at once.

Results:
 - Material UI toke more than 4.5x to render on JS process;
 - Browser toke the same time between approaches for Recalculation and Layout.

Conclusions:
 - Material UI is always adding/removing style tags in the head tag to add CSS for components that were not rendered before.
 - It also takes too much time to render the components because for each component it creates their styles because Material UI allow

### @material-ui/styles
Test conditions:
 - A list of 10000 single div's with similar CSS style between Material UI Style and CSS-in-JS module;
 - Mejure how much time we need to render all at once.

Results:
 - Material UI toke 2x to render on JS process;
 - Browser toke the same time between approaches for Recalculation and Layout.

Conclusions:
 - Material UI has some performance issues when we use useStyles or withStyles, it almost duplicates the render time;
 - They advise people to use styled-components or emotion-js -> https://github.com/mui-org/material-ui/issues/17370.

### Global conclusions
Material UI destroys apps that need to render a lot of elements, since the time that it takes to render their element to the time that it needs to complete CSS styles and include them into the head tag.