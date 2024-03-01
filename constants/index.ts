export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home', icon:"home.svg" },
    { href: '/', key: 'statistics', label: 'Statistics', icon:"statistics.svg" },
    { href: '/', key: 'Location', label: 'Location', icon:"location.svg" },
    { href: '/', key: 'camera ', label: 'Camera ', icon:"camera.svg" },

  ];
  export const WASTES = [
    {
        title: 'Plastic Wastes',
        icon: '/map.svg',
        variant: 'green',
        data:'190',
         search:"Latest search",
         date:"12/05/2023"
      },
    {
      title: 'Gas Wastes',
      icon: '/map.svg',
      variant: 'red',
      data:'56',
       search:"Latest search",
       date:"12/05/2023"
    },
    {
        title: 'Chemical Wastes ',
        icon: '/map.svg',
        variant: 'gray',
        data:'345',
         search:"Latest search",
         date:"12/05/2023"
      },
      {
        title: 'Organisms',
        icon: '/map.svg',
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
        href:"/",
        icon:'components.svg',
        title:'Components'
    },
    {
        href:"/",
        icon:'manual.svg',
        title:'Ugase Manual'
    },
    {
        href:"/",
        icon:'licence.svg',
        title:'License'
    },
    {
        href:"/",
        icon:'terms_and_privacy.svg',
        title:'Terms & Privacy'
    },
    {
        href:"/",
        icon:'mode.svg',
        title:'System Mode'
    },
]