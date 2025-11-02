<script setup>
import EventCard from '@/components/EventCard.vue'
import { ref } from 'vue'

const events = ref([
  {
    id: 123456,
    category: 'animal welfare',
    title: 'Dog Adoption Fair',
    description: 'Meet lovely dogs looking for their forever home',
    location: 'Bark Avenue Park',
    date: 'February 14, 2026',
    time: '10:00',
    petsAllowed: true,
    organizer: 'Doug Walker',
  },

  {
    id: 123457,
    category: 'community',
    title: 'Neighborhood Clean-Up',
    description: 'Help keep our community clean and green',
    location: 'Central Park',
    date: 'March 5, 2026',
    time: '09:00',
    petsAllowed: false,
    organizer: 'Green City Initiative',
  },

  {
    id: 123458,
    category: 'education',
    title: 'Beginner Coding Workshop',
    description: 'Learn the basics of programming in a fun environment',
    location: 'Tech Hub Downtown',
    date: 'April 12, 2026',
    time: '14:30',
    petsAllowed: false,
    organizer: 'Code Masters',
  },

  {
    id: 123459,
    category: 'animal welfare',
    title: 'Pet Vaccination Drive',
    description: 'Free vaccinations for dogs and cats',
    location: 'Community Veterinary Clinic',
    date: 'May 20, 2026',
    time: '08:00',
    petsAllowed: true,
    organizer: 'Paws & Care Organization',
  },

  {
    id: 123460,
    category: 'food & drink',
    title: 'Local Farmers Market',
    description: 'Fresh produce and artisanal goods from local vendors',
    location: 'Main Street Square',
    date: 'June 7, 2026',
    time: '07:00',
    petsAllowed: true,
    organizer: 'Farm Fresh Collective',
  },
])
</script>

<template>
  <div class="events">
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :event="event" :key="event.id" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
