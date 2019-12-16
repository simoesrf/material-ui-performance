// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import "jest-enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReactDOM from "react-dom";

const attachTo = global.document.createElement("div");

class ReactAdapterWithMountTracking extends Adapter {
  constructor(...args) {
    super(...args);
  }
  createRenderer(options) {
    // Provide a default option on each render for attachTo, being a global div that we can unmount later
    Object.assign(options, { attachTo: options.attachTo || attachTo });
    return Adapter.prototype.createRenderer.call(this, options);
  }
}

afterEach(() => {
  // Unmount react component after each test
  ReactDOM.unmountComponentAtNode(attachTo);
});

configure({ adapter: new ReactAdapterWithMountTracking() });

// configure({ adapter: new Adapter() });
