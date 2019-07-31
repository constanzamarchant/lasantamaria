// How to get an access token:
// http://jelled.com/instagram/access-token

// {{model.user.username}}, {{likes}} likes

var galleryFeed = new Instafeed({
  get: "user",
  userId: 2280852010,
  clientId: ' eb9bc154082447569919d21c0907cdd6',
  accessToken: '2280852010.eb9bc15.0cfb6bf3b6b94ec388b8b1165255fe15',
  resolution: "standard_resolution",
  useHttp: "true",
  limit: 16,
  template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
  target: "instafeed-gallery-feed",
  after: function() {
    // disable button if no more results to load
    if (!this.hasNext()) {
      btnInstafeedLoad.setAttribute('disabled', 'disabled');
    }
    
    var owl = $(".owl-carousel2"),
        owlSlideSpeed = 300;

    // init owl    
    $(document).ready(function(){
      owl.owlCarousel({
        navContainer: '.owl-nav-custom',
        dotsContainer: '.owl-dots-custom',
        loop:false,
        margin:5,
        responsive:{
          0:{
            items:2
          },
          200:{
            items:3
          },
          400:{
            items:5
          },
          768:{
            items:12
          }
        }
      });
    });

    // keyboard controls
    $(document.documentElement).keydown(function(event) {
      if (event.keyCode == 37) {
        owl.trigger('prev.owl.carousel', [owlSlideSpeed]);
      }
      else if (event.keyCode == 39) {
        owl.trigger('next.owl.carousel', [owlSlideSpeed]);
      }
    });
  }
});

galleryFeed.run();

var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
btnInstafeedLoad.addEventListener("click", function() {
  galleryFeed.next()
});
