# Vue 3 Users Management

Build a responsive Vue.js application that fetches and displays user data from an external API, with interactive filtering and sorting features.
API: <https://jsonplaceholder.typicode.com/users>

## Demo and Screenshots

Demo URL: <https://users.lubuxu.store/users>

**Desktop**
![Desktop](/src/assets/desktop.png?raw=true "Desktop screen")

**Mobile screen**
![Desktop](/src/assets/mobile.png?raw=true "Desktop screen")

## Features

- 🚀 Vue 3 with Composition API and `<script setup>`
- ⚡ Vite for fast development and building
- 🎨 Tailwind CSS with DaisyUI for styling
- 🌐 i18n support with Vue I18n
- 📱 Responsive design
- 🛣️ Vue Router for navigation
- 🏗️ TypeScript for type safety
- 🏗️ Pinia for state management

## Prerequisites

- Node.js 18+
- Yarn 1.22+ or npm 8+
- Docker (optional, for containerized deployment)

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:dzung1nguyen/vue3-users.git
   cd vue3-users
   ```

2. Install dependencies:

   ```bash
   yarn install
   # or
   npm install
   ```

### Development

Start the development server:

```bash
yarn dev
# or
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
yarn build
# or
npm run build
```

The built files will be in the `dist` directory.

## Docker Deployment

### Prerequisites

- Docker 20.10+
- Docker Compose (optional, for development)

### Building and Running with Docker

1. Build the Docker image:

   ```bash
   docker build -t users-app .
   ```

2. Run the container:

   ```bash
   docker run -d -p 8080:80 --name users-app users-app
   ```

The application will be available at `http://localhost:8080`

### Using Docker Compose

For development with hot-reload:

```bash
docker-compose up --build
```

For production:

```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_APP_NAME=Vue
VITE_I18N_LOCALE=en
VITE_I18N_FALLBACK_LOCALE=en
```

## Linting and Formatting

```bash
# Lint files
yarn lint

# Fix linting issues
yarn lint:fix
```

## Project Structure

```
src/
├── assets/          # Static assets
├── components/      # Reusable components
├── i18n/           # Internationalization
├── layouts/        # Layout components
├── pages/          # Route components
├── router/         # Vue Router configuration
├── services/       # API services
├── stores/         # Pinia stores
├── types/          # TypeScript type definitions
├── App.vue         # Root component
└── main.ts         # Application entry point
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
