import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

type Props = {
  role: 'student' | 'advisor';
};

const HomePage: React.FC<Props> = ({ role }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="notifications-outline" size={24} color="white" />
        <View style={styles.userInfo}>
          <Text style={styles.userId}>20xx 0808 xxx</Text>
          <Text style={styles.roleText}>{role === 'student' ? 'Student' : 'Advisor'}</Text>
          <FontAwesome name="user" size={20} color="white" style={{ marginLeft: 6 }} />
        </View>
      </View>

      {/* Greeting */}
      <Text style={styles.greeting}>Hello, User {role === 'student' ? 'Student' : 'Advisor'}</Text>

      {/* Card 1: Chatbot */}
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Ask a question to the chatbot</Text>
        <Text style={styles.cardDesc}>
          Courses, exams, internship, graduation, any subject you can't find the answer to.
        </Text>
        <Ionicons name="chatbubbles-outline" size={40} color="white" style={styles.cardIcon} />
      </TouchableOpacity>

      {/* Card 2: Appointment */}
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Make an appointment</Text>
        <Text style={styles.cardDesc}>
          Schedule a meeting with academic advisors.
        </Text>
        <Ionicons name="calendar-outline" size={40} color="white" style={styles.cardIcon} />
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home" size={24} color="white" />
        <Ionicons name="chatbubbles-outline" size={24} color="white" />
        <Ionicons name="calendar-outline" size={24} color="white" />
        <Ionicons name="person-outline" size={24} color="white" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20
  },
  userInfo: {
    flexDirection: 'row', alignItems: 'center', gap: 6
  },
  userId: { color: 'white', fontSize: 14, marginRight: 8 },
  roleText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  greeting: {
    color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 20
  },
  card: {
    backgroundColor: '#3b82f6',
    borderRadius: 16,
    padding: 20,
    marginVertical: 10,
    position: 'relative'
  },
  cardTitle: {
    color: 'white', fontSize: 18, fontWeight: 'bold'
  },
  cardDesc: {
    color: 'white', fontSize: 14, marginTop: 8, width: '80%'
  },
  cardIcon: {
    position: 'absolute',
    right: 16,
    top: 20
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0, right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 14,
    backgroundColor: '#1e1e1e',
    borderTopWidth: 1,
    borderColor: '#333',
  }
});

export default HomePage;
