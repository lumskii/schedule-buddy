import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { collection, doc, setDoc, getDocs, deleteDoc, FirestoreError } from 'firebase/firestore';
import { db } from '../firebase';
import { format } from 'date-fns';

export type Activity = {
  id: string;
  label: string;
  startUtc: string;     // ISO
  durationMin: number;
};

const todayId = () => format(new Date(), 'yyyyMMdd');

export function useSchedule(uid: string, options?: UseQueryOptions<Activity[], FirestoreError>) {
  return useQuery<Activity[], FirestoreError>({
    queryKey: ['schedule', uid],
    queryFn: async () => {
      try {
        const scheduleDoc = doc(db, 'users', uid, 'schedules', todayId());
        const snap = await getDocs(collection(scheduleDoc, 'activities'));
        return snap.docs.map(d => d.data() as Activity);
      } catch (error) {
        console.error('Error fetching schedule:', error);
        throw error;
      }
    },
    retry: 2, // Retry failed requests twice
    staleTime: 1000 * 60, // Consider data stale after 1 minute
  });
}

export function useUpsertActivity(uid: string) {
  const qc = useQueryClient();
  return useMutation<Activity, FirestoreError, Activity>({
    mutationFn: async (a: Activity) => {
      try {
        const scheduleDoc = doc(db, 'users', uid, 'schedules', todayId());
        await setDoc(doc(scheduleDoc, 'activities', a.id), a, { merge: true });
        return a;
      } catch (error) {
        console.error('Error upserting activity:', error);
        throw error;
      }
    },
    onSuccess: (data) => {
      qc.invalidateQueries({ queryKey: ['schedule', uid] });
      // Optimistically update the cache
      qc.setQueryData<Activity[]>(['schedule', uid], (old = []) => {
        const index = old.findIndex(a => a.id === data.id);
        if (index >= 0) {
          const updated = [...old];
          updated[index] = data;
          return updated;
        }
        return [...old, data];
      });
    },
    onError: (error) => {
      console.error('Failed to upsert activity:', error);
    }
  });
}

export function useDeleteActivity(uid: string, options?: UseMutationOptions<void, FirestoreError, string>) {
  const qc = useQueryClient();
  return useMutation<void, FirestoreError, string>({
    mutationFn: async (id: string) => {
      try {
        const scheduleDoc = doc(db, 'users', uid, 'schedules', todayId());
        await deleteDoc(doc(scheduleDoc, 'activities', id));
      } catch (error) {
        console.error('Error deleting activity:', error);
        throw error;
      }
    },
    onSuccess: (_, deletedId) => {
      qc.invalidateQueries({ queryKey: ['schedule', uid] });
      // Optimistically update the cache
      qc.setQueryData<Activity[]>(['schedule', uid], (old = []) => 
        old.filter(a => a.id !== deletedId)
      );
    },
    onError: (error) => {
      console.error('Failed to delete activity:', error);
    }
  });
}
