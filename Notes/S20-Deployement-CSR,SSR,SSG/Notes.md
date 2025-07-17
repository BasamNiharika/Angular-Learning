# Angular Deployement - CSR,SSR,SSG:
 Deployment strategies:
 * Client Side Rendering (CSR)
 * Server Side Rendering (SSR)
 * Static Site Generation (SSG)

 ## Building and Deploying process of Angular App:
 - Once the development of the application is completed, we must build it to make deployment ready.
 - To make it deployment ready, we need to tell the angular CLI to optimize the code, by compiling and preparing it for deployment.
 - By ng serve command it only compiles the code but not optimizes it.
 - For compilation and optimization - we have to give the command ng build or the npm run build. This is going to run the Typescript
 code to javascript code during development phase. Since typescript does not run in the browser.
 - Once the process of Ng build finishes , there will be dist folder generated which will have a sub folder based on project Name. This 
  folder contains all the necessary folders and files that have to be deployed, and among them browser foler is a must and 
  default one.
 - Browser folder contain the files and folder that will be made available to some web host(www).
 - So, now users can send requests to that web hosts and visit Angular App.

 ## Client Side Rendering-for SPA
 - It is like loading content on the client machine when call requet happens to URL.SEO is poor, low performance.

 ## Server Side Rendering: -> pre-render some routes in server
 - When an app is rendered on server side - all routes are rendered on demand, on a dynamic web server.
 - That means-generate fully rendered pages on the server before delivering it to client, better SEO and better performance.
 - ng add @angular/ssr
 - new angular project with SSR functionality.
   - ng new --ssr

## Static Site Generation: -> PreRender all routes at build time
-  The core idea of SSG is it generates static HTML files at build time for each route , which means app-routes are pre-rendered
at build time that is, before deployment. So when user visits a certain page, that page laready exists as it was pre-rendered.

## Hybrid Rendering: customizing routes as wish using renderMode property.
- With Hybrid Rendering - we can have precise control over how the app routes should be rendered i.e whether the route should be
rendered on client or server side or should be pre-rendered. 
e.g: {
    path: '',
    RenderMode: RenderMode.Client <- CSR
},
 {
    path: 'about',
    RenderMode: RenderMode.Prerender <- SSG
},
 {
    path: 'home',
    RenderMode: RenderMode. <- SSR
}