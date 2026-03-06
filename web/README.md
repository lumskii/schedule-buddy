# Schedule Buddy

**Schedule Buddy** is a time management and activity tracking application designed to help you stay organized and productive throughout your day. Built with React, TypeScript, and Firebase, it provides an intuitive interface for managing daily schedules, tracking activities, and maintaining consistency in your routines.

🔗 **Live App**: https://schedulebuddy2025.web.app

## Purpose

Schedule Buddy helps you:
- **Stay on track** with your daily activities and routines
- **Visualize your schedule** with real-time progress tracking
- **Build consistent habits** by organizing activities into reusable schedules
- **Monitor your time** with countdown timers and activity status indicators
- **Sync across devices** with cloud-based storage via Firebase

Perfect for anyone looking to improve time management, maintain routines, or track daily activities more effectively.

## Key Features

### 📊 Dashboard
- **Real-time activity tracking** with current, upcoming, and completed activities
- **Live countdown timer** showing time remaining for the current activity
- **Visual progress indicators** for each activity in your schedule
- **Quick add/delete** functionality for managing activities on the fly
- **Google Authentication** for secure access to your personalized schedule

### 📅 Schedule Management
- **Create multiple schedules** for different parts of your day (morning routine, work schedule, evening wind down)
- **Activate schedules** to make them your current active timeline
- **Track schedule usage** with last-used timestamps
- **View total duration** and activity counts for each schedule

### 🎯 Activity Library
- **Organize activities** by categories (Fitness, Work, Wellness, Personal)
- **Set custom durations** for each activity
- **Color-coded categories** for easy visual identification
- **Reusable activity templates** for building schedules quickly

### ⚙️ Settings & Integrations
- **Google Calendar sync** (planned integration)
- **WearOS support** (in development)
- **Notification preferences** for activity reminders
- **Account management** with Google authentication

### ⌚ WearOS Mockup
- Visual prototype of the **smartwatch companion app**
- Circular progress indicators optimized for wearable displays
- Quick controls for starting, pausing, and skipping activities

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS + DaisyUI
- **Backend**: Firebase (Firestore, Authentication, Hosting, Functions)
- **Build Tool**: Vite
- **State Management**: TanStack Query (React Query)
- **Date Handling**: date-fns
- **Icons**: Lucide React

## Deployment Instructions

### Preview Deployment (Development)
To deploy to a preview channel (expires after 7 days):
```bash
npm run deploy:preview
```
This will:
1. Build the app
2. Deploy to a preview channel (e.g., https://dev--31ztrdi4.web.app)
3. Show you the preview URL in the console

### Production Deployment
To deploy to production (live site):
```bash
npm run deploy:prod
```
This will:
1. Build the app
2. Deploy to production
3. Make the app available at:
   - https://31ztrdi4.web.app
   - https://31ztrdi4.firebaseapp.com

### Quick Deploy
For convenience, you can also use:
```bash
npm run deploy
```
This is an alias for `npm run deploy:prod`

## Important Notes
- Preview deployments (dev channel) expire after 7 days
- Always test on the preview URL before deploying to production
- The preview URL will be different from your production URL
- Make sure to use the exact URL provided by Firebase after deployment

## Troubleshooting
If you see "Site Not Found":
1. Check that you're using the correct URL (preview vs production)
2. Verify the deployment completed successfully
3. Try accessing both .web.app and .firebaseapp.com domains
4. Check Firebase Console for deployment status
