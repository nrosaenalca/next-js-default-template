import React from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      <Toaster />
    </>
  )
}

export default Providers
