import { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
    children: ReactNode; 
  }
  
  interface ErrorBoundaryState {
    hasError: boolean; 
  }
  
  class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
      return { hasError: true };
    }
  
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      console.error("Error caught by Error Boundary:", error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
          // TODO поработать с дизайном сообщения
        return <h1>Что-то пошло не так.</h1>;
      }
  
      return this.props.children;
    }
  }
  
  export default ErrorBoundary;