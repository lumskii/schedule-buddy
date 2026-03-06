import { useState } from 'react'
import { PlusIcon, EditIcon, TrashIcon, PlayIcon } from 'lucide-react'

interface Schedule {
  id: number
  name: string
  activities: number
  duration: string
  lastUsed: string
  active: boolean
}

export function Schedules() {
  const [schedules] = useState<Schedule[]>([
    {
      id: 1,
      name: 'Morning Routine',
      activities: 6,
      duration: '2h 30m',
      lastUsed: '2 days ago',
      active: true,
    },
    {
      id: 2,
      name: 'Work Day Schedule',
      activities: 12,
      duration: '8h 15m',
      lastUsed: '1 day ago',
      active: false,
    },
    {
      id: 3,
      name: 'Evening Wind Down',
      activities: 4,
      duration: '1h 45m',
      lastUsed: '3 days ago',
      active: false,
    },
  ])

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Schedules</h1>
          <p className="text-gray-600">
            Create and manage your daily schedules
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
          <PlusIcon className="w-4 h-4" />
          <span>New Schedule</span>
        </button>
      </div>

      <div className="grid gap-6">
        {schedules.map((schedule) => (
          <div
            key={schedule.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-4 h-4 rounded-full ${
                    schedule.active ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                ></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {schedule.name}
                  </h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-gray-500">
                      {schedule.activities} activities
                    </span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">
                      {schedule.duration}
                    </span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">
                      Last used {schedule.lastUsed}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <PlayIcon className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  <EditIcon className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
            {schedule.active && (
              <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-green-800 font-medium">
                  Currently Active Schedule
                </p>
                <p className="text-sm text-green-600 mt-1">
                  This schedule is synced to your WearOS device
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg text-left hover:bg-gray-50 transition-colors">
            <h4 className="font-medium text-gray-900">Import from Calendar</h4>
            <p className="text-sm text-gray-500 mt-1">
              Create schedule from Google Calendar events
            </p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg text-left hover:bg-gray-50 transition-colors">
            <h4 className="font-medium text-gray-900">Use Template</h4>
            <p className="text-sm text-gray-500 mt-1">
              Start with a pre-built schedule template
            </p>
          </button>
        </div>
      </div>
    </div>
  )
} 