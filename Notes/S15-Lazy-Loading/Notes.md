Lazy Loading:

What is Lazy Loading ? --improves initial load time
->> Loading components or modules only when required.
->> Lazy Loading is a technique that is used for loading the modules or components lazily in the browser.
->> Lazy Loading is used effectively when creating Single Page Applications (SPA's).
->> Avoids loading of unnecessary libraries and modules.
->> By default, In angular all modules and components are loaded eagerly.

Note: Do not load the components lazily every time, because overuse of it might result in slower performance of the Application.
e.g:
  { 
    path: 'login', 
    loadComponent: ()=> import('./second/second.component').then((m)=> m.SecondComponent),
    data: { preload:true } //use only when you are implementing Custom preLoading.
  },


PreLoading:
->> It is a feature that can be implemented with lazy loading of the components or modules.
->> Lazily loaded components are called on demand. It will start preloading of the modules or componentsin the background
when the Application starts to load.This means that the components will be readily available to be activated.
(components are loaded before needed)
->> components will be loaded before even needed.
e.g: how to preload lazily loaded components or modules.
app.config.ts
provideRouter( routes, withPreloading (PreloadAllModules) ) //Preload all the lazy-loaded routes after the app's initial load.
provideRouter( routes, withPreloading (NoPreloading) ) NOT loaded until the routes are activated

Preloading strategies:
->> NoPreloading
->> Custom preloading

Note: The default preloading strategy is NoPreloading. If no strategy is specified lazy loaded compoenents are loaded when only 
that routes are activated.

->> Custom preloading strategy controls which lazy loaded routes should be preloaded first after the main Application is loaded. 
provideRouter( routes, withPreloading (CustomPreLoadingStrategy) )

### Deferred Loading: -on templates or css file
 - It is like creating another application bundle
 - e.g: 

@defer(){
  <app-test></app-test>
 }
@placeholder()
@loading(after 1s, minimum 2s)
@error

# Triggers
 - Triggers are basically like events that tell app when to load specific content within @defer block.
 syntax: @defer(on triggername()){ 
  ...
  <component-name> or content
  }
  Built-in triggers:
 - on idle  //default
 - on viewport
 - on interaction
 - on hover
 - on timer
 - on immediate

 - "on viewport" trigger will increase the initial load time of the application and then load the content as the page is scrolled.
 - "on interaction" trigger is very useful when a certain interaction is made by the user. 
 - "on hover" trigger is fired when the user hovers over an element of the page.'
 - "on immediate" trigger loads the deferred block immediately without having to wait for any event to be triggered.
 - "on hover" loads the @defer block after specified duration of time

# prefetching kind of preloading strategy
syntax: @defer(on triggername(); prefetch on triggername){ 
  ...
  <component-name> or content
  }