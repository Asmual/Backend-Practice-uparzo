import { app } from "./app.js";
import { env } from "./config/env.config.js";

const bootstrap = () => {
  const server = app.listen(env.port, () => {
    console.log(`Server is running on port ${env.port} in ${env.node_environment} mode`);
  });

  const handleSignal = (signal: string) => {
    console.log(`Received ${signal}. Closing server gracefully...`);
    server.close(() => {
      console.log("Server closed successfully.");
      process.exit(0);
    });
  };

  // Listen for termination signals
  process.on("SIGTERM", () => handleSignal("SIGTERM"));
  process.on("SIGINT", () => handleSignal("SIGINT"));

  const handleError = (error: unknown, type: string) => {
    console.error(`Encountered ${type}:`, error);
    server.close(() => {
      process.exit(1);
    });
  };

  // Monitor unhandled promise rejections and uncaught exceptions
  process.on("unhandledRejection", (err) => handleError(err, "unhandledRejection"));
  process.on("uncaughtException", (err) => handleError(err, "uncaughtException"));
};

bootstrap();
