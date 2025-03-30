# SmartLifeAI - AI-Powered Fitness Tracking Application

SmartLifeAI is a comprehensive fitness tracking application that uses artificial intelligence to provide personalized workout recommendations and track your fitness progress.

## Features

- 🤖 AI-powered workout recommendations
- 📊 Detailed progress tracking
- 🎯 Personalized fitness goals
- 📱 Responsive design
- 🔒 Secure authentication
- 📸 Profile image upload
- 📈 Progress visualization
- 🏃‍♂️ Exercise tracking
- 💪 Workout planning
- 📊 Health metrics monitoring

## Tech Stack

### Frontend

- React.js
- Material-UI
- Framer Motion
- Recharts
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Cloudinary
- Winston Logger

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB
- Cloudinary account
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/smartlifeai.git
cd smartlifeai
```

2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

4. Set up environment variables

- Copy `.env.example` to `.env` in both frontend and backend directories
- Update the variables with your credentials

5. Start the Development Servers

Frontend:

```bash
cd frontend
npm start
```

Backend:

```bash
cd backend
npm run dev
```

## Deployment

### Backend (Render)

1. Create a MongoDB Atlas cluster
2. Set up a Render account
3. Connect your GitHub repository
4. Configure environment variables
5. Deploy

### Frontend (Netlify)

1. Set up a Netlify account
2. Connect your GitHub repository
3. Configure environment variables
4. Deploy

## Environment Variables

### Backend

```
PORT=5000
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### Frontend

```
REACT_APP_API_URL=your-backend-url
REACT_APP_CLOUDINARY_CLOUD_NAME=your-cloud-name
REACT_APP_CLOUDINARY_UPLOAD_PRESET=your-upload-preset
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Material-UI for the beautiful components
- Framer Motion for smooth animations
- MongoDB Atlas for the database
- Cloudinary for image storage
- Netlify and Render for hosting
