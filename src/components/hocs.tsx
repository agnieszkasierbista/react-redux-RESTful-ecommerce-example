import React from 'react';

export function withPathname(ComponentToWrap: typeof React.Component<{ pathName: string }>) {
  return class WrappedComponent extends React.Component {
    render() {
      return (
        <ComponentToWrap {...this.props} pathName={window.location.pathname}/>
      );
    }
  };
}
