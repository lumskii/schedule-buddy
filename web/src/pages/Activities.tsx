import { useState } from 'react'
import { PlusIcon, ClockIcon, EditIcon, TrashIcon } from 'lucide-react'

interface Activity {
  id: number
  name: string
  duration: number
  category: string
  color: string
  description: string
}

export function Activities() {
  const [activities] = useState<Activity[]>([
    {
      id: 1,
      name: 'Morning Workout',
      duration: 30,
      category: 'Fitness',
      color: 'bg-red-500',
      description: 'High-intensity interval training',
    },
    {
      id: 2,
      name: 'Deep Work Session',
      duration: 120,
      category: 'Work',
      color: 'bg-blue-500',
      description: 'Focused coding or writing time',
    },
    {
      id: 3,
      name: 'Meditation',
      duration: 15,
      category: 'Wellness',
      color: 'bg-green-500',
      description: 'Mindfulness and breathing exercises',
    },
    {
      id: 4,
      name: 'Meal Prep',
      duration: 45,
      category: 'Personal',
      color: 'bg-yellow-500',
      description: 'Prepare healthy meals for the day',
    },
  ])

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    if (hours > 0) {
      return `${hours}h ${mins}m`
    }
    return `${mins}m`
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Activities</h1>
          <p className="text-gray-600">Manage your activity library</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
          <PlusIcon className="w-4 h-4" />
          <span>New Activity</span>
        </button>
      </div>

      {/* Categories Filter */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {['All', 'Fitness', 'Work', 'Wellness', 'Personal'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category === 'All'
                  ? 'bg-blue-100 text-blue-700 border border-blue-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full ${activity.color}`}></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {activity.name}
                  </h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {activity.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  <EditIcon className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
            <div className="flex items-center space-x-2 text-gray-500">
              <ClockIcon className="w-4 h-4" />
              <span className="text-sm font-medium">
                {formatDuration(activity.duration)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Activity Templates */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Activity Templates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: 'Pomodoro Work',
              duration: '25m',
              category: 'Work',
            },
            {
              name: 'Quick Break',
              duration: '5m',
              category: 'Break',
            },
            {
              name: 'Exercise',
              duration: '30m',
              category: 'Fitness',
            },
          ].map((template, index) => (
            <button
              key={index}
              className="p-4 border border-gray-200 rounded-lg text-left hover:bg-gray-50 transition-colors"
            >
              <h4 className="font-medium text-gray-900">{template.name}</h4>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-500">{template.category}</span>
                <span className="text-sm font-medium text-gray-700">
                  {template.duration}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
} 