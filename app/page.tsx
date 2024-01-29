'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const HomePage = () => {
  const { setTheme } = useTheme()

  return (
    <div className={'flex h-full items-center justify-center'}>
      <div className='flex flex-col gap-4'>
        <h1>Enalca Default Template</h1>
        <div className='flex items-center justify-center gap-3'>
          <Button
            onClick={() => {
              toast('Event has been created', {
                description: 'Sunday, December 03, 2023 at 9:00 AM',
                action: {
                  label: 'Undo',
                  onClick: () => console.log('Undo')
                }
              })
            }}
          >
            TOAST
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='icon'>
                <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                <span className='sr-only'>Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem onClick={() => setTheme('light')}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

export default HomePage
