# 🎶 Musicify

Musicify is a full-stack application for managing and streaming music albums and songs. It consists of:
1. **Admin Frontend**: For managing albums and songs.
2. **User Frontend**: For users to browse and listen to music.
3. **Backend**: A Node.js and MongoDB-powered API to handle requests and data storage.

---

## 🏗 Project Structure

root/
├── admin/                # Admin interface
│   ├── src/components/   # Reusable components (NavBar, SideBar)
│   ├── src/pages/        # Pages for CRUD operations
│   └── Dockerfile        # Dockerfile for containerization
├── musicify/             # User interface
│   ├── src/components/   # Reusable components (Player, Display, etc.)
│   ├── src/context/      # Context API for state management
│   └── Dockerfile        # Dockerfile for containerization
├── musicify-backend/     # Backend API
│   ├── src/controllers/  # Business logic for albums and songs
│   ├── src/models/       # Mongoose schemas
│   ├── src/routes/       # API routes
│   ├── src/config/       # Cloudinary and MongoDB configuration
│   └── Dockerfile        # Dockerfile for containerization
└── docker-compose.yml    # For orchestrating multiple containers

---

## 🌟 Features

### **Admin Frontend**
- Add, update, and remove albums and songs.
- Intuitive interface built with React and Vite.

### **User Frontend**
- Browse albums and songs.
- Stream audio directly from the web.
- Simple and elegant design.

### **Backend**
- **RESTful API**: Handles CRUD operations for albums and songs.
- **Cloudinary Integration**: Upload and store audio and images.
- **MongoDB**: Store metadata for songs and albums.
- **Authentication Ready**: Extendable with JWT-based authentication.

---

## 📦 Installation

### **Prerequisites**
1. **Docker**: Install Docker Desktop for easy containerization.
2. **Cloudinary**: Sign up for [Cloudinary](https://cloudinary.com/) and get your API credentials.
3. **MongoDB**: Use a local or cloud-based MongoDB instance (e.g., MongoDB Atlas).

---

### **Setup Instructions**

#### 1. Clone the repository:
```bash
git clone https://github.com/your-repo/musicify.git
cd musicify

2. Set up the environment:

Create a .env file in the musicify-backend directory with:

PORT=4000
MONGODB_URI=<your-mongodb-uri>
CLOUDINARY_NAME=<your-cloudinary-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_SECRET_KEY=<your-cloudinary-secret-key>

3. Build and run containers:

Ensure Docker is running, then execute:

docker-compose up --build

This will spin up:
	•	Backend API on http://localhost:4000
	•	Admin frontend on http://localhost:3001
	•	User frontend on http://localhost:3000

🧪 API Documentation

Album Endpoints

Endpoint	Method	Body Params	Description
/api/album/add	POST	name, desc, image	Add a new album
/api/album/list	GET	None	List all albums
/api/album/remove	POST	id	Remove an album

Song Endpoints

Endpoint	Method	Body Params	Description
/api/song/add	POST	name, desc, album, audio	Add a new song
/api/song/list	GET	None	List all songs
/api/song/remove	POST	id	Remove a song

🛠 Development

Admin Frontend

To start the admin interface:

cd admin
npm install
npm run dev

User Frontend

To start the user interface:

cd musicify
npm install
npm run dev

Backend

To start the backend:

cd musicify-backend
npm install
npm run dev

🌐 Deployment
	1.	Build frontend and backend:

docker-compose build


	2.	Push containers to a cloud platform (e.g., AWS, GCP, Azure).
	3.	Configure environment variables in the deployment environment.

🛡 Future Enhancements
	1.	User Authentication: Add JWT-based authentication.
	2.	Streaming Analytics: Real-time tracking of song plays.
	3.	Advanced Recommendations: Personalized song suggestions.
	4.	Admin Dashboard: Visualize app stats and data trends.
	5.	Unit Testing: Add tests for API and components.


---

### Notes:
- Replace placeholders like `<your-mongodb-uri>` and `<your-cloudinary-name>` in the `.env` setup with real values.
- Add any missing dependencies in the `requirements.txt` if necessary.
- Let me know if you'd like help setting up Docker or extending features! 😊
