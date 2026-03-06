import {
  HomeIcon,
  CalendarIcon,
  ActivityIcon,
  SettingsIcon,
  WatchIcon,
} from 'lucide-react'

interface MobileNavProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function MobileNav({ activeTab, setActiveTab }: MobileNavProps) {
  const navItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: HomeIcon,
    },
    {
      id: 'schedules',
      label: 'Schedules',
      icon: CalendarIcon,
    },
    {
      id: 'activities',
      label: 'Activities',
      icon: ActivityIcon,
    },
    {
      id: 'wearos',
      label: 'WearOS',
      icon: WatchIcon,
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: SettingsIcon,
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-2">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center py-2 px-2 rounded-lg transition-colors ${
                activeTab === item.id
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-gray-500'
              }`}
            >
              <Icon className="w-4 h-4 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
} 