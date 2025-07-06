# Handling HTTP Calls with Angular:
 - Http client methods: // by default thses methods are async in nature
  1. GET
  2. POST
  3. PUT
  4. DELETE
  - These methods allow to send HTTP requests to the server and receive responses.
  - provideHttpClient() -> should be called inside app.config.ts. It Allows the application to perform the HTTP requests using the
    HTTPClient class- which we inject inside the component as a dependency.
  - The post request is commonly made for updating or creating resources on the server.