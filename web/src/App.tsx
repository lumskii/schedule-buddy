import { useState } from 'react'
import { Dashboard } from './pages/Dashboard'
import { Schedules } from './pages/Schedules'
import { Activities } from './pages/Activities'
import { Settings } from './pages/Settings'
import { WearOSMockup } from './pages/WearOSMockup'
import { Sidebar } from './components/Sidebar'
import { MobileNav } from './components/MobileNav'

export function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'schedules':
        return <Schedules />
      case 'activities':
        return <Activities />
      case 'settings':
        return <Settings />
      case 'wearos':
        return <WearOSMockup />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50 w-full">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-0">
        <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-20 md:pb-6">
          {renderContent()}
        </main>
      </div>
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  )
}
