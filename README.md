# Dream Analysis Application

A modern web application for analyzing and interpreting dreams 

![Dream Analyzer Login Page](https://drive.google.com/uc?export=view&id=1yNVy57JrFttJII4luRLtkdYVCED-5-tb)  
*Figure: Dream Analyzer Login Page*

**[Visit the Application Here](https://dream-analyzer-nithin.netlify.app/)**

## Features

...


## Features

- 🧠 **Advanced Dream Analysis**: AI-powered interpretation of dream symbols and patterns
- 🎨 **Beautiful UI**: Modern interface with purple and blue theme
- 🌓 **Dark/Light Mode**: Toggle between dark and light themes
- 📝 **Dream Journal**: Record and save your dreams
- 🔍 **Emotion Tracking**: Tag dreams with emotions (joy, fear, sadness, anxiety, peace, confusion)
- 🤝 **Community Features**: Share and discuss dreams with others
- 🔐 **Authentication**: Secure login with email or Google OAuth
- 📱 **Responsive Design**: Works seamlessly on all devices

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons
- Google OAuth

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/dream-analysis-app.git
cd dream-analysis-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Google OAuth Client ID:
```env
VITE_GOOGLE_CLIENT_ID=your_google_client_id_here
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── auth/         # Authentication components
│   ├── brain/        # Brain information components
│   ├── dream/        # Dream analysis components
│   ├── journal/      # Journal components
│   └── layout/       # Layout components
├── hooks/            # Custom React hooks
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
└── App.tsx          # Main application component
```

## Features in Detail

### Dream Analysis
- Advanced symbol recognition
- Emotional pattern detection
- Personalized interpretations
- Recommendations based on dream content

### Authentication
- Email/Password login
- Google OAuth integration
- Secure session management
- User profile management

### Journal
- Rich text dream recording
- Emotion tagging
- Date tracking
- Search and filter capabilities

### Theme Support
- System preference detection
- Manual theme toggle
- Persistent theme selection

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Dream interpretation algorithms based on psychological research
- UI design inspired by modern web applications
- Icons provided by Lucide React
