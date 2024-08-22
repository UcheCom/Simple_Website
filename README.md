# Simple Website

This is a simple website created using React.js for the frontend and Django for the backend.

## GitHub Repository

[Link to the GitHub Repository](https://github.com/uchecom/Simple_Website)

## Frontend: React.js

### Setup
1. Create a React app using `npx create-react-app my-app`.
2. Navigate to the `my-app` directory.

### Components
- Created a `HelloWorld` component that displays "Hello, World!".
- The component is imported and used in the `App.js`.

### Running the App
- Start the development server with `npm start`.
- The app runs on `http://localhost:3000`.

## Backend: Django

### Setup
1. Create a Virtual Environment `python -m venv venv`.
2. Activate the Virtual Environment:
    ### Windows:
    `.\venv\Scripts\activate`

    ### macOS/Linux:
    `source venv/bin/activate`

3. Install Django using `pip install django`.
4. Run the Server using `python manage.py runserver`
5. Create a new Django project and an app named `api`.

### API Endpoints
- Created two endpoints in Django:
  - `/api/hello/`: Returns a JSON with a "Hello, Uchenna!" message.
  - `/api/another/`: Returns a different response.

### Running the Server
- Start the Django development server with `python manage.py runserver`.
- API is accessible at `http://localhost:8000/api/`.

## Integration
- React fetches data from the Django API and displays it in the `HelloWorld` component.

my-app/
│
├── README.md
├── node_modules/
├── package.json
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   └── components/
│       └── HelloWorld.js
└── .gitignore

mybackend/
│
├── manage.py
├── mybackend/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── api/
    ├── __init__.py
    ├── admin.py
    ├── apps.py
    ├── models.py
    ├── tests.py
    ├── urls.py
    └── views.py
|
|___README.md