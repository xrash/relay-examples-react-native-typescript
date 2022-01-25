import { Component, ErrorInfo, ReactNode } from 'react'
import { View, Text } from 'react-native'

type Props = {
  children: ReactNode
  message: string
}

type State = {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(_: ErrorInfo) {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('error', error)
    console.log('errorInfo', errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <View>
          <Text>{this.props.message}</Text>
        </View>
      )
    }

    return this.props.children
  }
}

export { ErrorBoundary }
