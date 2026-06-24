import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { Colors } from '../../constants/colors';

const challenges = [
  { id: '1', title: 'Build a Profile Page', difficulty: 'Easy', track: 'HTML', xp: 100, emoji: '👤' },
  { id: '2', title: 'Style a Menu', difficulty: 'Easy', track: 'CSS', xp: 120, emoji: '🎨' },
  { id: '3', title: 'Click Counter', difficulty: 'Medium', track: 'JS', xp: 200, emoji: '🖱️' },
  { id: '4', title: 'Number Guesser', difficulty: 'Medium', track: 'Python', xp: 180, emoji: '🎲' },
  { id: '5', title: 'Dark Mode Toggle', difficulty: 'Hard', track: 'CSS/JS', xp: 300, emoji: '🌙' },
];

const difficultyColor = { Easy: Colors.success, Medium: Colors.xp, Hard: Colors.error };

export default function ChallengesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.heading}>⚔️ Challenges</Text>
        <Text style={styles.sub}>Test your skills and earn bonus XP</Text>

        {challenges.map((c) => (
          <View key={c.id} style={styles.card}>
            <Text style={styles.emoji}>{c.emoji}</Text>
            <View style={styles.info}>
              <Text style={styles.title}>{c.title}</Text>
              <Text style={styles.track}>{c.track}</Text>
            </View>
            <View style={styles.right}>
              <Text style={[styles.diff, { color: difficultyColor[c.difficulty as keyof typeof difficultyColor] }]}>
                {c.difficulty}
              </Text>
              <Text style={styles.xp}>+{c.xp} XP</Text>
            </View>
          </View>
        ))}

        <View style={styles.comingSoon}>
          <Text style={styles.comingSoonText}>🔒 More challenges unlock as you progress!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scroll: { padding: 20 },
  heading: { fontSize: 26, fontWeight: 'bold', color: Colors.text, marginBottom: 4 },
  sub: { fontSize: 14, color: Colors.textMuted, marginBottom: 24 },
  card: {
    backgroundColor: Colors.card,
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  emoji: { fontSize: 28 },
  info: { flex: 1 },
  title: { fontSize: 16, fontWeight: '600', color: Colors.text },
  track: { fontSize: 12, color: Colors.textMuted, marginTop: 2 },
  right: { alignItems: 'flex-end' },
  diff: { fontSize: 12, fontWeight: 'bold' },
  xp: { fontSize: 13, color: Colors.xp, fontWeight: 'bold', marginTop: 4 },
  comingSoon: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  comingSoonText: { color: Colors.textMuted, fontSize: 14 },
});
