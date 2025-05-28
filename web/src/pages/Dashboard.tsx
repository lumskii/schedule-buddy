import React from 'react'
import { PlayIcon, PauseIcon, ClockIcon, CalendarIcon } from 'lucide-react'
import { useSchedule } from '../hooks/useSchedule'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import { differenceInSeconds, parseISO, format } from 'date-fns'

interface ScheduleActivity {
  id: string
  label: string
  startUtc: string
  durationMin: number
  status?: 'upcoming' | 'current' | 'completed'
}

export function Dashboard() {
  const [user] = useAuthState(auth)
  const { data: activities } = useSchedule(user?.uid ?? '')
  const now = new Date()

  // Find current activity and calculate remaining time
  const currentActivity = activities?.find((activity) => {
    const start = parseISO(activity.startUtc)
    const end = new Date(start.getTime() + activity.durationMin * 60000)
    return now >= start && now < end
  })

  const secondsLeft = currentActivity
    ? differenceInSeconds(
        new Date(
          parseISO(currentActivity.startUtc).getTime() +
            currentActivity.durationMin * 60000
        ),
        now
      )
    : 0

  // Format remaining time as MM:SS
  const formatRemainingTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  // Process activities for display
  const processedActivities = activities?.map((activity) => {
    const start = parseISO(activity.startUtc)
    const end = new Date(start.getTime() + activity.durationMin * 60000)
    let status: 'upcoming' | 'current' | 'completed' = 'upcoming'

    if (now > end) {
      status = 'completed'
    } else if (now >= start && now < end) {
      status = 'current'
    }

    return {
      id: activity.id,
      name: activity.label,
      time: format(start, 'HH:mm'),
      duration: `${activity.durationMin} min`,
      status,
    }
  })

  const completedActivities = processedActivities?.filter(
    (activity) => activity.status === 'completed'
  )
  const totalActivities = processedActivities?.length ?? 0

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">
          Monitor your current schedule and WearOS device status
        </p>
      </div>
      {/* Current Activity Status */}
      {currentActivity && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Current Activity
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <PlayIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {currentActivity.label}
                </h3>
                <p className="text-gray-500">
                  Started at {format(parseISO(currentActivity.startUtc), 'HH:mm')}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">
                {formatRemainingTime(secondsLeft)}
              </div>
              <p className="text-gray-500">Remaining</p>
            </div>
          </div>
        </div>
      )}
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">
                Today's Activities
              </p>
              <p className="text-2xl font-bold text-gray-900">{totalActivities}</p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <ClockIcon className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Completed</p>
              <p className="text-2xl font-bold text-gray-900">
                {completedActivities?.length ?? 0}
              </p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <PlayIcon className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">WearOS Status</p>
              <p className="text-sm font-medium text-green-600">Connected</p>
            </div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
      </div>
      {/* Today's Schedule */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Today's Schedule
          </h2>
          <CalendarIcon className="w-5 h-5 text-gray-400" />
        </div>
        <div className="space-y-4">
          {processedActivities?.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center space-x-4 py-3 border-b border-gray-100 last:border-b-0"
            >
              <div className="text-sm font-medium text-gray-500 w-16">
                {activity.time}
              </div>
              <div
                className={`w-3 h-3 rounded-full ${
                  activity.status === 'completed'
                    ? 'bg-green-500'
                    : activity.status === 'current'
                    ? 'bg-blue-500'
                    : 'bg-gray-300'
                }`}
              ></div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{activity.name}</p>
                <p className="text-sm text-gray-500">{activity.duration}</p>
              </div>
              <div
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  activity.status === 'completed'
                    ? 'bg-green-100 text-green-800'
                    : activity.status === 'current'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {activity.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 