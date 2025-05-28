import React, { useState } from 'react'
import {
  CalendarIcon,
  SmartphoneIcon,
  BellIcon,
  UserIcon,
  LinkIcon,
} from 'lucide-react'

export function Settings() {
  const [googleCalendarConnected, setGoogleCalendarConnected] = useState(false)
  const [wearOSConnected, setWearOSConnected] = useState(true)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">
          Configure your app preferences and integrations
        </p>
      </div>
      <div className="space-y-6">
        {/* Google Calendar Integration */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <CalendarIcon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Google Calendar
                </h3>
                <p className="text-sm text-gray-500">
                  Sync your schedules with Google Calendar
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span
                className={`text-sm font-medium ${googleCalendarConnected ? 'text-green-600' : 'text-gray-500'}`}
              >
                {googleCalendarConnected ? 'Connected' : 'Not Connected'}
              </span>
              <button
                onClick={() => setGoogleCalendarConnected(!googleCalendarConnected)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  googleCalendarConnected 
                    ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {googleCalendarConnected ? 'Disconnect' : 'Connect'}
              </button>
            </div>
          </div>
          {googleCalendarConnected && (
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-medium text-green-800 mb-2">Sync Options</h4>
              <div className="space-y-2">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300"
                    defaultChecked
                  />
                  <span className="text-sm text-green-700">
                    Auto-sync new events
                  </span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300"
                    defaultChecked
                  />
                  <span className="text-sm text-green-700">
                    Update existing schedules
                  </span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-sm text-green-700">
                    Create activities from calendar events
                  </span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* WearOS Device */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <SmartphoneIcon className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  WearOS Device
                </h3>
                <p className="text-sm text-gray-500">
                  Manage your connected smartwatch
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div
                className={`w-3 h-3 rounded-full ${wearOSConnected ? 'bg-green-500' : 'bg-red-500'}`}
              ></div>
              <span
                className={`text-sm font-medium ${wearOSConnected ? 'text-green-600' : 'text-red-600'}`}
              >
                {wearOSConnected ? 'Connected' : 'Disconnected'}
              </span>
            </div>
          </div>
          {wearOSConnected && (
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Device:</span>
                  <span className="ml-2 font-medium">Galaxy Watch 4</span>
                </div>
                <div>
                  <span className="text-gray-500">Battery:</span>
                  <span className="ml-2 font-medium">78%</span>
                </div>
                <div>
                  <span className="text-gray-500">Last Sync:</span>
                  <span className="ml-2 font-medium">2 minutes ago</span>
                </div>
                <div>
                  <span className="text-gray-500">Status:</span>
                  <span className="ml-2 font-medium text-green-600">
                    Active
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <BellIcon className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Notifications
              </h3>
              <p className="text-sm text-gray-500">
                Configure alert preferences
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Activity reminders</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Vibration alerts</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Schedule completion summary</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Account */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <UserIcon className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Account</h3>
              <p className="text-sm text-gray-500">
                Manage your account settings
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="font-medium text-gray-900">Export Data</div>
              <div className="text-sm text-gray-500">
                Download your schedules and activities
              </div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="font-medium text-gray-900">Privacy Settings</div>
              <div className="text-sm text-gray-500">
                Manage data sharing preferences
              </div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-red-50 transition-colors text-red-600">
              <div className="font-medium">Delete Account</div>
              <div className="text-sm text-red-500">
                Permanently remove your account
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 