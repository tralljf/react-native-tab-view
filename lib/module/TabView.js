function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import TabBar from './TabBar';
import SceneView from './SceneView';
import Pager from './Pager';
const GestureHandlerWrapper = GestureHandlerRootView !== null && GestureHandlerRootView !== void 0 ? GestureHandlerRootView : View;
export default class TabView extends React.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      layout: {
        width: 0,
        height: 0,
        ...this.props.initialLayout
      }
    });

    _defineProperty(this, "jumpToIndex", index => {
      if (index !== this.props.navigationState.index) {
        this.props.onIndexChange(index);
      }
    });

    _defineProperty(this, "handleLayout", e => {
      const {
        height,
        width
      } = e.nativeEvent.layout;

      if (this.state.layout.width === width && this.state.layout.height === height) {
        return;
      }

      this.setState({
        layout: {
          height,
          width
        }
      });
    });
  }

  render() {
    const {
      position: positionListener,
      onSwipeStart,
      onSwipeEnd,
      navigationState,
      lazy,
      lazyPreloadDistance,
      removeClippedSubviews,
      keyboardDismissMode,
      swipeEnabled,
      swipeVelocityImpact,
      timingConfig,
      springConfig,
      tabBarPosition,
      renderTabBar,
      renderScene,
      renderLazyPlaceholder,
      sceneContainerStyle,
      style,
      gestureHandlerProps,
      springVelocityScale,
      renderPager
    } = this.props;
    const {
      layout
    } = this.state;
    return /*#__PURE__*/React.createElement(GestureHandlerWrapper, {
      onLayout: this.handleLayout,
      style: [styles.pager, style]
    }, renderPager({
      navigationState,
      layout,
      keyboardDismissMode,
      swipeEnabled,
      swipeVelocityImpact,
      timingConfig,
      springConfig,
      onSwipeStart,
      onSwipeEnd,
      onIndexChange: this.jumpToIndex,
      springVelocityScale,
      removeClippedSubviews,
      gestureHandlerProps,
      children: _ref => {
        let {
          position,
          render,
          addListener,
          removeListener,
          jumpTo
        } = _ref;
        // All of the props here must not change between re-renders
        // This is crucial to optimizing the routes with PureComponent
        const sceneRendererProps = {
          position,
          layout,
          jumpTo
        };
        return /*#__PURE__*/React.createElement(React.Fragment, null, positionListener ? /*#__PURE__*/React.createElement(Animated.Code, {
          exec: Animated.set(positionListener, position)
        }) : null, tabBarPosition === 'top' && renderTabBar({ ...sceneRendererProps,
          navigationState
        }), render(navigationState.routes.map((route, i) => {
          return /*#__PURE__*/React.createElement(SceneView, _extends({}, sceneRendererProps, {
            addListener: addListener,
            removeListener: removeListener,
            key: route.key,
            index: i,
            lazy: lazy,
            lazyPreloadDistance: lazyPreloadDistance,
            navigationState: navigationState,
            style: sceneContainerStyle
          }), _ref2 => {
            let {
              loading
            } = _ref2;
            return loading ? renderLazyPlaceholder({
              route
            }) : renderScene({ ...sceneRendererProps,
              route
            });
          });
        })), tabBarPosition === 'bottom' && renderTabBar({ ...sceneRendererProps,
          navigationState
        }));
      }
    }));
  }

}

_defineProperty(TabView, "defaultProps", {
  tabBarPosition: 'top',
  renderTabBar: props => /*#__PURE__*/React.createElement(TabBar, props),
  renderLazyPlaceholder: () => null,
  keyboardDismissMode: 'auto',
  swipeEnabled: true,
  lazy: false,
  lazyPreloadDistance: 0,
  removeClippedSubviews: false,
  springConfig: {},
  timingConfig: {},
  gestureHandlerProps: {},
  renderPager: props => /*#__PURE__*/React.createElement(Pager, props)
});

const styles = StyleSheet.create({
  pager: {
    flex: 1,
    overflow: 'hidden'
  }
});
//# sourceMappingURL=TabView.js.map