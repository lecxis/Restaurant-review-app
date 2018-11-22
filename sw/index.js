self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('rest1').then(function(cache){
      return cache.addAll(
        [
         '/',
         '/index.html',
          '/restaurant.html',
          '/css/styles.css',
          '/js/main.js',
          '/js/restaurant_info.js',
          '/js/dbhelper.js',
          '/data/restaurants.json',
          '/img/1.jpg',
          '/img/2.jpg',
          '/img/3.jpg',
          '/img/4.jpg',
          '/img/5.jpg',
          '/img/6.jpg',
          '/img/7.jpg',
          '/img/8.jpg',
          '/img/9.jpg',
          '/img/10.jpg'
        ]
      );
    }).catch(function(){
      console.log("error occured");
    })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(){
          if(response){
            console.log('found ', event.request, 'in cache');
            return response;
          }
          else{
            console.log('could not find ', event.request, 'in cache, Fetching');
            return fetch(event.request);
          }
      })
    );
});
