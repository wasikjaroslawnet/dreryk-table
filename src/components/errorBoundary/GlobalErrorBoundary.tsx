import React from 'react';

/**
 * Wrapping applications into a global error handler
 */
export class GlobalErrorBoundary extends React.Component<{},
  {
    /**
     * Information whether an error has been intercepted.
     */
    hasError: boolean;
    message?: string;
  }> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    this.setState({
      message: error.message
    })
  }

  render() {
    return this.state.hasError ? (
      <>
        <h1>Something went wrong.</h1>
        {this.state.message && <h2>{this.state.message}</h2>}
      </>
    ) : (
      this.props.children
    );
  }
}
