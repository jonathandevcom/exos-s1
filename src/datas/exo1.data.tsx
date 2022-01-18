interface postData {
    id: number, 
    title: string, 
    description: string, 
    url: string, 
    votes: number, 
    submitterAvatarUrl: string,
    productImageUrl: string 
};
let MOCK_POSTS: [postData] =[
    {   
        id:1,
        title:'ReactJS-LeDOMVirtuel',
        description:'ComprendreleDOMvirtuel',
        url:'#',
        votes:10,
        submitterAvatarUrl:'https://www.shareicon.net/data/256x256/2016/07/05/791372_man_512x512.png',
        productImageUrl:'https://pbs.twimg.com/profile_images/724636714879217664/qvWxOjjm_400x400.jpg',
    },
    {
        id:2,title:'AngularvsReactJS?',description:'C\'estquoilemieux?',url:'#',votes:15,submitterAvatarUrl:'https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18352.png',productImageUrl:'https://pbs.twimg.com/profile_images/378800000530484174/24b75ef0ebb48e358f5173e737c9d842.png',},{id:3,title:'LesformulairesavecReact',description:'Construiresesformulairesfacilement',url:'#',votes:1,submitterAvatarUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48hUmgdOLob9vfXbUEriUueNyMRpKyYB1ggdq_Wh6nuCVqC1tgQ',productImageUrl:'https://vignette.wikia.nocookie.net/kingdomhearts/images/2/26/Wayfinder_%28Aqua%29_KHBBS.png/revision/latest?cb=20100928121955',},{id:4,title:'Routing',description:'Miseenplacedurouting',url:'#',votes:0,submitterAvatarUrl:'https://www.shareicon.net/data/128x128/2016/06/27/787165_man_512x512.png',productImageUrl:'https://luna1.co/798db1.png',
    },
];
export default MOCK_POSTS;

/*const data = () => {

    let MOCK_POSTS: [postData] =[
        {   
            id:1,
            title:'ReactJS-LeDOMVirtuel',
            description:'ComprendreleDOMvirtuel',
            url:'#',
            votes:10,
            submitterAvatarUrl:'https://www.shareicon.net/data/256x256/2016/07/05/791372_man_512x512.png',
            productImageUrl:'https://pbs.twimg.com/profile_images/724636714879217664/qvWxOjjm_400x400.jpg',
        },
        {
            id:2,title:'AngularvsReactJS?',description:'C\'estquoilemieux?',url:'#',votes:15,submitterAvatarUrl:'https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18352.png',productImageUrl:'https://pbs.twimg.com/profile_images/378800000530484174/24b75ef0ebb48e358f5173e737c9d842.png',},{id:3,title:'LesformulairesavecReact',description:'Construiresesformulairesfacilement',url:'#',votes:1,submitterAvatarUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48hUmgdOLob9vfXbUEriUueNyMRpKyYB1ggdq_Wh6nuCVqC1tgQ',productImageUrl:'https://vignette.wikia.nocookie.net/kingdomhearts/images/2/26/Wayfinder_%28Aqua%29_KHBBS.png/revision/latest?cb=20100928121955',},{id:4,title:'Routing',description:'Miseenplacedurouting',url:'#',votes:0,submitterAvatarUrl:'https://www.shareicon.net/data/128x128/2016/06/27/787165_man_512x512.png',productImageUrl:'https://luna1.co/798db1.png',
        },
    ];
    return {
        { id, title, description, url, votes, submitterAvatarUrl, productImageUrl }
    }
}


export default data;