const app = new Vue({
    el: '#test',
    data: {
        isOpen: false,
        moreinfo: false,
        open: {
          marginLeft:"250px"  
        },
        locations: [
            {
                name: "Europe",
                desc: "Phasellus non pulvinar elit. Etiam id fringilla eros. Mauris mi odio, fringilla eget tempus eu, vehicula nec neque.",
                img: "img/europe.jpg",

                moreinfo: [
                    {
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus non est tincidunt condimentum quis non sem. Sed sit amet ultrices ipsum. Pellentesque viverra sed orci a dapibus. Donec maximus lacus vitae odio fermentum facilisis. Nunc eu leo quis massa efficitur faucibus. Pellentesque hendrerit iaculis viverra. Phasellus eget lacinia nulla, eget maximus risus. ",
                    header: "Welcome to Europe",
                    img: "img/europecity.jpg",
                     shortdesc:"Sed sed nisi at metus aliquet",
                    }
                ]
            },
            {
                name: "America",
                desc: "Curabitur vel lacus ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ex ante, scelerisque vitae semper ut",
                img: "https://images.fineartamerica.com/images-medium-large-5/14-american-flag-les-cunliffe.jpg",
               moreinfo: [
                    {desc: "Donec eget ex ac ante rhoncus egestas. Sed sed nisi at metus aliquet molestie a mollis arcu. Etiam sed magna efficitur, gravida odio ac, eleifend elit. Quisque egestas est sed rutrum scelerisque. Etiam volutpat mauris nec rhoncus laoreet. Duis nunc magna, faucibus tempor bibendum sit amet",
                    header: "Welcome to America",
                     img: "img/europecity.jpg",
                     shortdesc:"Donec eget ex ac ante rhoncus",}
                ]
            },
            {
                name: "Scotland",
                desc: "Phasellus non pulvinar elit. Etiam id fringilla eros. Mauris mi odio, fringilla eget tempus eu, vehicula nec neque.",
                img: "https://images-na.ssl-images-amazon.com/images/I/41VvuLQ7UhL.jpg",
                moreinfo: [
                    {desc: "Quisque faucibus nunc vitae ex rhoncus auctor. Aliquam fermentum pharetra nisl, at blandit lacus mattis nec. Nullam eget posuere velit. Aliquam erat volutpat. Sed in nunc scelerisque, tempor diam quis, venenatis tellus. Cras quis quam varius, scelerisque lorem ac, viverra magna. Morbi nisl libero, hendrerit finibus eros vitae",
                    header: "Welcome to Scotland",
                     img: "img/europecity.jpg",
                     shortdesc:"Etiam sed magna efficitur",
                    }
                ]
            },
            
        ],
        selected: location[1],
    },
        created: function(){
    this.selected = this.locations[0]
  },
    methods:{ 
        moreinfo2(location) {
        this.selected = location;
        },
        
        openSlide: function() {
            this.isOpen = !this.isOpen;
            if(this.isOpen){
                console.log("True")
            } else {
                console.log("False")
            }
        },
        
        hamburgerListen: function() {
            if(this.isOpen){
                this.isOpen=false;
            }
        }
    }
})

