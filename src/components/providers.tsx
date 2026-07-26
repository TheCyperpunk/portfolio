"use client"

import { TooltipProvider } from "@/components/ui/tooltip"
import { Component, type ErrorInfo, type ReactNode } from "react"

class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[ErrorBoundary]", error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg-void px-6" role="alert">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
            <p className="text-text-ghost mb-6">Please refresh the page to continue.</p>
            <button
              onClick={() => window.location.reload()}
              className="min-h-11 rounded-lg bg-neon-red px-6 py-3 text-white transition-colors hover:bg-neon-dark"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <TooltipProvider delayDuration={200}>
        {children}
      </TooltipProvider>
    </ErrorBoundary>
  )
}
