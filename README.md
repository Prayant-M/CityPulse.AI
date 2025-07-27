# CityPulse.AI

Building CityPulse, an agentic application that provides a live, synthesized, and intelligent view of the city.

🌐 **Live Demo**: [citypulseapp-5e012.firebaseapp.com](https://citypulseapp-5e012.firebaseapp.com/)

## About

CityPulse.AI is a comprehensive multi-platform application that leverages AI agents to provide real-time insights and intelligent city monitoring. The project combines mobile accessibility, web-based dashboards, and intelligent agent processing to deliver a unified city intelligence platform.

## Repository Structure

This repository contains three main components:

- **CityPulseAdmin** - Administrative dashboard and web application
- **CityPulseAgent** - Intelligent agent system using Reflex and React Agents
- **CityPulseGoogleApp** - Google App integration and services

## Prerequisites

Make sure you have completed the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) before proceeding.

### Required Tools

- Node.js (version 16.0 or higher)
- npm or Yarn
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)
- CocoaPods (for iOS dependencies)
- Python 3.8+ (for Reflex agents)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Prayant-M/CityPulse.AI.git
cd CityPulse.AI
```

### 2. Install Dependencies

```bash
# Install dependencies for all packages
npm install

# OR using Yarn
yarn install
```

## CityPulseAdmin - Web Dashboard

The administrative dashboard provides a comprehensive web interface for city monitoring and management.

### Running the Admin Dashboard

```bash
# Navigate to admin directory
cd CityPulseAdmin

# Install dependencies
npm install

# Start the development server
npm start

# OR using Yarn
yarn start
```

The admin dashboard will be available at `http://localhost:3000`.

### Building for Production

```bash
# Build the admin dashboard for production
npm run build

# OR using Yarn
yarn build
```

## CityPulseAgent - Intelligent Agent System

The agent system utilizes Reflex and React Agents to provide intelligent city data processing and analysis.

### Setting Up the Agent

```bash
# Navigate to agent directory
cd CityPulseAgent

# Install Python dependencies (if using virtual environment)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install required packages
pip install -r requirements.txt

# Install Node.js dependencies
npm install
```

### Running the Agent

```bash
# Start the Reflex agent server
reflex run

# OR if using npm scripts
npm run agent

# OR using Yarn
yarn agent
```

### Agent Features

- **Reflex Integration**: Real-time reactive processing
- **React Agents**: Intelligent UI components with agent capabilities
- **City Data Processing**: Advanced analytics and monitoring
- **Real-time Updates**: Live data synchronization

## CityPulseGoogleApp - Google Integration

Google App integration for enhanced city services and data connectivity.

### Setting Up Google App Integration

```bash
# Navigate to Google App directory
cd CityPulseGoogleApp

# Install dependencies
npm install

# Start the service
npm start

# OR using Yarn
yarn start
```

### Configuration

1. Set up Google Cloud credentials
2. Configure API keys in environment variables
3. Enable required Google services

## React Native Mobile App (Optional)

If you want to add mobile functionality:

### Step 1: Start Metro

```bash
# Start Metro bundler
npm start

# OR using Yarn
yarn start
```

### Step 2: Build and Run

#### Android

```bash
# Run on Android
npm run android

# OR using Yarn
yarn android
```

#### iOS

For iOS, install CocoaPods dependencies first:

```bash
# Install CocoaPods (first time only)
bundle install

# Install pods
bundle exec pod install

# Run on iOS
npm run ios

# OR using Yarn
yarn ios
```

## Available Scripts

### CityPulseAdmin
- `npm start` / `yarn start` - Start development server
- `npm run build` / `yarn build` - Build for production
- `npm test` / `yarn test` - Run tests

### CityPulseAgent
- `reflex run` - Start Reflex agent server
- `npm run agent` / `yarn agent` - Start agent with npm
- `npm run dev` / `yarn dev` - Development mode

### CityPulseGoogleApp
- `npm start` / `yarn start` - Start Google App service
- `npm run build` / `yarn build` - Build for production

## Project Structure

```
CityPulse.AI/
├── CityPulseAdmin/          # Administrative dashboard
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
├── CityPulseAgent/          # Intelligent agent system
│   ├── reflex_agents/       # Reflex agent components
│   ├── react_components/    # React agent UI
│   ├── requirements.txt     # Python dependencies
│   ├── package.json         # Node.js dependencies
│   └── README.md
├── CityPulseGoogleApp/      # Google App integration
│   ├── src/
│   ├── config/
│   ├── package.json
│   └── README.md
└── README.md                # This file
```

## Development Workflow

1. **Start the Agent System**: Begin with `CityPulseAgent` for data processing
2. **Launch Admin Dashboard**: Run `CityPulseAdmin` for management interface
3. **Enable Google Integration**: Start `CityPulseGoogleApp` for enhanced services
4. **Test Integration**: Verify all components communicate properly

## Environment Variables

Create `.env` files in each component directory:

### CityPulseAdmin/.env
```
REACT_APP_API_URL=your_api_url
REACT_APP_FIREBASE_CONFIG=your_firebase_config
```

### CityPulseAgent/.env
```
AGENT_API_KEY=your_agent_api_key
REFLEX_CONFIG=your_reflex_config
```

### CityPulseGoogleApp/.env
```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## Deployment

The application is deployed and accessible at: [citypulseapp-5e012.firebaseapp.com](https://citypulseapp-5e012.firebaseapp.com/)

### Firebase Deployment

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy
firebase deploy
```

## Troubleshooting

### Common Issues

- **Agent not starting**: Check Python dependencies and virtual environment
- **Dashboard build failures**: Verify Node.js version and clear cache
- **Google App authentication**: Ensure proper API keys and permissions
- **Reflex issues**: Check Reflex installation and configuration

### Debug Commands

```bash
# Clear all caches
npm run clean
yarn cache clean

# Reset Reflex
reflex clean

# Restart Metro (if using React Native)
npx react-native start --reset-cache
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Technologies Used

- **Frontend**: React, React Native, TypeScript
- **Backend**: Node.js, Python
- **Agent Framework**: Reflex, React Agents
- **Cloud Services**: Firebase, Google Cloud Platform
- **Real-time Processing**: WebSockets, Server-Sent Events

## Learn More

### Reflex Resources
- [Reflex Documentation](https://reflex.dev/docs/) - Learn about Reflex framework
- [Reflex Examples](https://github.com/reflex-dev/reflex-examples) - Example applications

### React Agent Resources
- [React Agent Patterns](https://reactjs.org/docs/thinking-in-react.html) - Best practices for agent-based React components

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**Prayant M** - [@Prayant-M](https://github.com/Prayant-M)

Project Link: [https://github.com/Prayant-M/CityPulse.AI](https://github.com/Prayant-M/CityPulse.AI)

---

**🎉 Welcome to CityPulse.AI!**

Experience the future of intelligent city monitoring and management. 🌆✨
