import AsyncStorage from '@react-native-async-storage/async-storage';

export type UserProgress = {
  xp: number;
  streak: number;
  lastActive: string;
  completedLessons: string[];
  badges: string[];
};

const PROGRESS_KEY = 'codecraft_progress';

export const defaultProgress: UserProgress = {
  xp: 0,
  streak: 0,
  lastActive: '',
  completedLessons: [],
  badges: [],
};

export async function loadProgress(): Promise<UserProgress> {
  try {
    const data = await AsyncStorage.getItem(PROGRESS_KEY);
    return data ? JSON.parse(data) : defaultProgress;
  } catch {
    return defaultProgress;
  }
}

export async function saveProgress(progress: UserProgress): Promise<void> {
  await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export async function completeLesson(
  lessonId: string,
  xpReward: number,
  current: UserProgress
): Promise<UserProgress> {
  if (current.completedLessons.includes(lessonId)) return current;

  const today = new Date().toDateString();
  const wasActiveYesterday =
    new Date(current.lastActive).toDateString() ===
    new Date(Date.now() - 86400000).toDateString();

  const updated: UserProgress = {
    ...current,
    xp: current.xp + xpReward,
    completedLessons: [...current.completedLessons, lessonId],
    lastActive: today,
    streak: wasActiveYesterday || current.lastActive === today ? current.streak + 1 : 1,
  };

  await saveProgress(updated);
  return updated;
}
