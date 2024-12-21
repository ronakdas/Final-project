import { avatar1, avatar2, avatar3, blog1, blog2, blog3, picon1, picon2, picon4, picon5, promo1, promo2, promo3, promo4, promo5, sandwich1, st1, st2, st3, st4, mc1, mc2, mc3, mc4, mc5,mc6, si1, si2, si3, si4, si5, dessert1, dessert2, dessert3, dessert4, drinks1, drinks2, drinks3, drinks4 } from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
        link : './'
    },
    {
        id: "features",
        title: "Menu",
        link : './shop'
    },
   
    {
        id: "clients",
        title: "Blogs",
        link : './blogs'
    },
    {
        id: "product",
        title: "Account",
        link : './signup'
    },
];

export const catagory =[
    {
        id: 1,
        title: "Starter",
        //icon: picon2,
        description: "Our delectable appetizers",
        img: promo2
    },
    {
        id: 2,
        title: "Main Course",
        //icon: picon5,
        description: "Our Exquisite Main Courses",
        img: promo3
    },
    {
        id: 3,
        title: "Sides",
        //icon: picon4,
        description: "Our Exquisite Main Courses",
        img: promo4
    },
    {
        id: 4,
        title: "Desserts",
        //icon: picon1,
        description: "Indulge Your Sweet Tooth",
        img: promo5,
    },
    {
        id: 4,
        title: "Drinks",
        //icon: picon2,
        description: "Quench Your Thirst",
        img: promo1
    }
]
export const food =[
    //main course starts here?
    {
        id:0,
        Name: "Biriyani",
        pic : mc1,
        catagory : "mc",
        Price : 360,
        discount : 10,
        O_price: 400,
        clicked: false
    },
    {
        id:1,
        Name: "Paneer Butter Masala",
        pic : mc2,
        catagory : "mc",
        Price : 260,
        discount : 10,
        O_price: 300,
        clicked: false
    },
    {
        id:2,
        Name: "Chicken 65",
        pic : mc3,
        catagory : "mc",
        Price : 300,
        discount : 20,
        O_price: 80,
        clicked: false
    },
    {
        id:3,
        Name: "Chik-Pea Tikka Masala",
        pic : mc4,
        catagory : "mc",
        Price : 198,
        discount : 10,
        O_price: 200,
        clicked: false
    },
    {
        id:4,
        Name: "Saag Paneer",
        pic : mc5,
        catagory : "mc",
        Price : 315,
        discount : 10,
        O_price: 350,
        clicked: false
    },
    {
        id:5,
        Name: "Fish Curry",
        pic : mc6,
        catagory : "mc",
        Price : 405,
        discount : 10,
        O_price: 450,
        clicked: false
    },
    //Main Course Item End Here
    //Starters Starts Here
    {
        id:6,
        Name: "Masala Papad",
        pic : st1,
        catagory : "st",
        Price : 144,
        discount : 10,
        O_price: 160,
        clicked: false
    },
    {
        id:7,
        Name: "Aloo Chaat",
        pic : st2,
        catagory : "st",
        Price : 117,
        discount : 10,
        O_price: 130,
        clicked: false
    },
    
    {
        id:8,
        Name: "Punjabi Samosa",
        pic : st3,
        catagory : "st",
        Price : 60,
        discount : 10,
        O_price: 80,
        clicked: false
    },
    {
        id:9,
        Name: "Papdi Chaat",
        pic : st4,
        catagory : "st",
        Price : 71,
        discount : 10,
        O_price: 79,
        clicked: false
    },
    //starters ends here
//sides starts here
    {
        id:10,
        Name: "Jeera Rice",
        pic : si1,
        catagory : "si",
        Price : 162,
        discount : 10,
        O_price: 180,
        clicked: false
    },
    {
        id:11,
        Name: "Naan",
        pic : si2,
        catagory : "si",
        Price : 27,
        discount : 10,
        O_price: 30,
        clicked: false
    },
    {
        id:12,
        Name: "Roti",
        pic : si3,
        catagory : "si",
        Price : 18,
        discount : 10,
        O_price: 20,
        clicked: false
    },
    {
        id:13,
        Name: "Keema Naan",
        pic : si4,
        catagory : "si",
        Price : 20,
        discount :5,
        O_price: 80,
        clicked: false
    },
    {
        id:14,
        Name: "Baby Corn",
        pic : si5,
        catagory : "si",
        Price : 60,
        discount : 10,
        O_price: 80,
        clicked: false
    },
    //sides ends here
    //desserts stars here
    {
        id:15,
        Name: "Gulab Jamun",
        pic : dessert1,
        catagory : "de",
        Price : 60,
        discount : 10,
        O_price: 80,
        clicked: false
    },
    {
        id:16,
        Name: "kulfi",
        pic : dessert2,
        catagory : "de",
        Price : 60,
        discount : 10,
        O_price: 80,
        clicked: false
    },
    {
        id:17,
        Name: "kheer",
        pic : dessert3,
        catagory : "de",
        Price : 60,
        discount : 10,
        O_price: 80,
        clicked: false
    },
    {
        id:18,
        Name: "Rosogulla",
        pic : dessert4,
        catagory : "de",
        Price : 60,
        discount : 10,
        O_price: 80,
        clicked: false
    },
    //desserts end here
    //drinks starts here
    {
        id:19,
        Name: "Mocktail",
        pic : drinks1,
        catagory : "dr",
        Price : 60,
        discount : 10,
        O_price: 80,
        clicked: false
    },{
        id:20,
        Name: "Beer",
        pic : drinks2,
        catagory : "dr",
        Price : 60,
        discount : 10,
        O_price: 80,
        clicked: false
    },{
        id:21,
        Name: "Lassi",
        pic : drinks3,
        catagory : "dr",
        Price : 60,
        discount : 10,
        O_price: 80,
        clicked: false
    },{
        id:22,
        Name: "Soda",
        pic : drinks4,
        catagory : "dr",
        Price : 60,
        discount : 10,
        O_price: 80,
        clicked: false
    },
    
]

export const people = [
    {
        id: 1,
        name: 'Susan Smith',
        job: 'web developer',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'Anna Johnson',
        job: 'web designer',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        text:
            'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'Peter jones',
        job: 'intern',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        text:
            'Sriracha literally flexitarian . Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie,lette post-ironic jianbing swag.humblebrag pickled coloring book salvia hoodie',
    },
    {
        id: 4,
        name: 'Bill Aderson',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
    {
        id: 5,
        name: 'Annia Jhonie',
        image:avatar3,
        text:
            '. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
    {
        id: 6,
        name: 'Jamie Clark',
        image:avatar2,
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
    {
        id: 7,
        name: 'Tim David',
        image:avatar1,
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

export const blogcard = [
    {
        id:1,
        author : "Abdullah Assi",
        date: "1-Sep-2023",
        title: "What Do You Think About Cheese Pizza Recipes?",
        desc: "Financial experts support or help you to to find out which way you can raise your funds",
        pic :  blog1,
        time: "5 min read"
    },
    {
        id:2,
        author : "Abdullah Assi",
        date: "1-Sep-2023",
        title: "What Do You Think About Cheese Pizza Recipes?",
        desc: "Financial experts support or help you to to find out which way you can raise your funds",
        pic :  blog2,
        time: "15 min read"
    },
    {
        id:3,
        author : "Abdullah Assi",
        date: "1-Sep-2023",
        title: "What Do You Think About Cheese Pizza Recipes?",
        desc: "Financial experts support or help you to to find out which way you can raise your funds",
        pic :  blog3,
        time: "5 min read"
    },
]