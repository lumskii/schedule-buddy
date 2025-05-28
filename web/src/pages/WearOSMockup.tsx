import React, { useEffect, useState } from 'react'
import { PlayIcon, PauseIcon, SkipForwardIcon, WifiIcon, BatteryIcon, WatchIcon } from 'lucide-react'

export function WearOSMockup() {
  const [timeRemaining, setTimeRemaining] = useState(765) // 12:45 in seconds
  const [totalTime] = useState(1800) // 30 minutes total
  const [isRunning, setIsRunning] = useState(true)
  const [currentActivity] = useState('Morning Workout')
  const [batteryLevel] = useState(85)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (isRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((time) => time - 1)
      }, 1000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRunning, timeRemaining])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const progress = ((totalTime - timeRemaining) / totalTime) * 100
  const circumference = 2 * Math.PI * 85 // radius of 85
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          WearOS App Mockup
        </h1>
        <p className="text-gray-600">
          Visual concept for the smartwatch interface
        </p>
      </div>

      {/* Watch Frame */}
      <div className="flex justify-center">
        <div className="relative">
          {/* Watch Bezel */}
          <div className="w-80 h-80 bg-gray-800 rounded-full p-4 shadow-2xl">
            {/* Watch Screen */}
            <div className="w-full h-full bg-black rounded-full relative overflow-hidden flex items-center justify-center">
              {/* Status Bar */}
              <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-6 text-white text-xs">
                <div className="flex items-center space-x-2">
                  <WifiIcon className="w-3 h-3" />
                  <span>4G</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BatteryIcon className="w-3 h-3" />
                  <span>{batteryLevel}%</span>
                </div>
              </div>

              {/* Animated Progress Ring */}
              <svg
                className="absolute inset-0 w-full h-full transform -rotate-90"
                viewBox="0 0 200 200"
              >
                {/* Background Circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="8"
                  fill="transparent"
                />
                {/* Progress Circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  stroke="#3B82F6"
                  strokeWidth="8"
                  fill="transparent"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-1000 ease-linear"
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))',
                  }}
                />
              </svg>

              {/* Center Content */}
              <div className="text-center text-white z-10 mt-4">
                <div className="text-2xl font-bold mb-2">
                  {formatTime(timeRemaining)}
                </div>
                <div className="text-sm opacity-80 mb-4 max-w-32 leading-tight">
                  {currentActivity}
                </div>
                {/* Control Buttons */}
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={() => setIsRunning(!isRunning)}
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    {isRunning ? (
                      <PauseIcon className="w-5 h-5 text-white" />
                    ) : (
                      <PlayIcon className="w-5 h-5 text-white ml-0.5" />
                    )}
                  </button>
                  <button className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <SkipForwardIcon className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Status Indicators */}
              <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                <WatchIcon className="w-3 h-3 text-green-400" />
                <div className="text-xs text-green-400">SYNC</div>
              </div>
              <div className="absolute bottom-4 right-4 text-xs text-white opacity-60">
                3/8
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mockup Description */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          WearOS App Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-gray-900">
                  Animated Progress Ring
                </h4>
                <p className="text-sm text-gray-600">
                  Visual countdown with smooth animation
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-gray-900">
                  Current Activity Display
                </h4>
                <p className="text-sm text-gray-600">
                  Clear activity name and time remaining
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-gray-900">Quick Controls</h4>
                <p className="text-sm text-gray-600">
                  Play/pause and skip to next activity
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-gray-900">Vibration Alerts</h4>
                <p className="text-sm text-gray-600">
                  Gentle vibrations for activity transitions
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-gray-900">Sync Status</h4>
                <p className="text-sm text-gray-600">
                  Real-time connection with companion app
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-gray-900">Progress Tracking</h4>
                <p className="text-sm text-gray-600">
                  Shows current activity number (3/8)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Notes */}
      <div className="mt-6 bg-blue-50 rounded-xl border border-blue-200 p-6">
        <h4 className="font-medium text-blue-900 mb-2">Implementation Notes</h4>
        <p className="text-sm text-blue-800">
          This is a visual mockup created with React. The actual WearOS app
          would be built using Wear OS SDK with Kotlin/Java, featuring native
          watch complications, always-on display support, and optimized battery
          usage for continuous countdown functionality.
        </p>
      </div>
    </div>
  )
} 