import React from 'react';

export function withPathname(Xyz: typeof React.Component<{pathName: string}>) {
  return class Abc extends React.Component {
    render() {
      return (
        <Xyz {...this.props} pathName={window.location.pathname} />
      );
    }
  };
}