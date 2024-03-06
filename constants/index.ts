export const NAV_LINKS = [
    { href: '/dashboard', key: 'home', label: 'Home', icon:"home.svg" },
    { href: '/', key: 'statistics', label: 'Statistics', icon:"statistics.svg" },
    { href: '/', key: 'Location', label: 'Location', icon:"location.svg" },
    { href: '/', key: 'camera ', label: 'Camera ', icon:"camera.svg" },

  ];
  export const WASTES = [
    {
        title: 'Plastic Wastes',
        icon: '/plastic.svg',
        variant: 'green',
        data:'190',
        search:"Latest search",
        date:"12/05/2023"
      },
    {
      title: 'Gas Wastes',
      icon: '/gas.svg',
      variant: 'red',
      data:'56',
       search:"Latest search",
       date:"12/05/2023"
    },
    {
        title: 'Chemical Wastes ',
        icon: '/chemical.svg',
        variant: 'gray',
        data:'345',
         search:"Latest search",
         date:"12/05/2023"
      },
      {
        title: 'Organisms',
        icon: '/organisms.svg',
        variant: 'orange',
        data:'56',
         search:"Latest search",
         date:"12/05/2023"
      },
];

export const STATES = [

    {
        icon:"image",
        title:"PH",
        description:"Detected pH as 8.6 in Lake Kivu from the recent test. "
    },
    {
        icon:"image",
        title:"C/F",
        description:"Detected temperature as 24⁰C (75⁰F) in Lake Kivu from the recent test.. "
    },

    {
        icon:"image",
        title:"Gas",
        description:"Detected methane gas as 65 cubic kilometres (16 cu mi) in Lake Kivu from the recent test. "
    },


];

export const SIDEBARLINKS =[
    {
        href:"/settings",
        icon:'components.svg',
        title:'Components'
    },
    {
        href:"/settings",
        icon:'manual.svg',
        title:'Ugase Manual'
    },
    {
        href:"/settings",
        icon:'licence.svg',
        title:'Licence'
    },
    {
        href:"/settings",
        icon:'terms_and_privacy.svg',
        title:'Terms & Privacy'
    },
    {
        href:"/settings",
        icon:'mode.svg',
        title:'System Mode'
    },
]

export const MODES=[
    {
      mainColor:'white',
      secondColor:'pink-20',
      thirdColor:'gray-60',
      forthColor:'blue-dark',
      buttonColor:'blue-dark',
      title:"Sytem Mode",
      description:"Default Mode of the system",
      rating:4.5

    },
    {
        mainColor:'pink-20',
        secondColor:'white',
        thirdColor:'blue-10',
        forthColor:'blue-30',
        buttonColor:'pink-20',
        title:"Light Mode",
        description:"Light Mode of the system",
        rating:3.5
      },
    {
        mainColor:'white',
        secondColor:'blue-dark',
        thirdColor:'blue-40',
        forthColor:'blue-20',
        buttonColor:'blue-dark',
        title:"Dark Mode",
        description:"Dark Mode of the system",
        rating:3
    }
]