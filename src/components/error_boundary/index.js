import React from "react";
import {
  ErrorImageOverlay,
  ErrorImageText,
  ErrorImageContainer,
} from "./styles";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);
    return <h1>Something went wrong.</h1>;
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={"https://i.imgur.com/flHudHE.png"}>
            <ErrorImageText>This page is lost</ErrorImageText>
          </ErrorImageContainer>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
