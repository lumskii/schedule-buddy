import { useState, useEffect } from 'react'
import { collection, query, where, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'

interface ScheduleActivity {
  id: string
  label: string
  startUtc: string
  durationMin: number
}

export function useSchedule(userId: string) {
  const [data, setData] = useState<ScheduleActivity[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!userId) {
      setData([])
      setLoading(false)
      return
    }

    const q = query(
      collection(db, 'schedules'),
      where('userId', '==', userId)
    )

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const activities = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as ScheduleActivity[]
        setData(activities)
        setLoading(false)
      },
      (err) => {
        setError(err as Error)
        setLoading(false)
      }
    )

    return () => unsubscribe()
  }, [userId])

  return { data, loading, error }
} 