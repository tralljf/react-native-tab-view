import * as React from 'react';

class SceneComponent extends React.PureComponent {
  render() {
    const {
      component,
      ...rest
    } = this.props;
    return /*#__PURE__*/React.createElement(component, rest);
  }

}

export default function SceneMap(scenes) {
  return _ref => {
    let {
      route,
      jumpTo,
      position
    } = _ref;
    return /*#__PURE__*/React.createElement(SceneComponent, {
      key: route.key,
      component: scenes[route.key],
      route: route,
      jumpTo: jumpTo,
      position: position
    });
  };
}
//# sourceMappingURL=SceneMap.js.map