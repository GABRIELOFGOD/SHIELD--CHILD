import { IoCallOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";

export const HeaderNav = [
    {
        id: 1,
        name: 'Home',
        path: ''
    },
    {
        id: 2,
        name: 'About us',
        path: 'about'
    },
    {
        id: 3,
        name: 'Blog',
        path: 'blog'
    },
    {
        id: 4,
        name: 'Contact',
        path: 'contact'
    },
    {
        id: 5,
        name: 'Donate',
        path: 'donate'
    }
]

export const quickLinks = [
    {
        id: 1,
        text: 'Home',
        path: ''
    },
    {
        id: 2,
        text: 'About us',
        path: 'about'
    },
    {
        id: 3,
        text: 'Blog',
        path: 'blog'
    },
    {
        id: 4,
        text: 'Contact',
        path: 'contact'
    }
]

export const materials = [
    {
        id: 1,
        text: 'Online Safety',
        path: ''
    },
    {
        id: 2,
        text: 'Child Abuse Material',
        path: ''
    },
    {
        id: 3,
        text: 'Sexual Based Violence',
        path: ''
    },
    {
        id: 4,
        text: 'Online Sexual Abuse Material',
        path: ''
    },
]

export const blogs = [
    {
        image: '/images/online-abuse.jpg',
        title: '',
        context: 'Empowering Survivors: Overcoming Challenges in Reporting Sexual Assault'
    },
    {
        image: '/images/abuseface.jpg',
        title: '',
        context: 'Protecting Our Young: Recognizing Signs of Child Abuse and Taking Action'
    },
    {
        image: '/images/stop.png',
        title: '',
        context: 'Healing from Invisible Wounds: Understanding and Addressing Emotional Abuse'
    },
]

export const reactOut = [
    {
        icon: <IoCallOutline />,
        content: '+234 906-777-4136',
        path: 'tel: +234 906-777-4136'
    },
    {
        icon: <CiGlobe />,
        content: 'webfalainitiative@gmail.com',
        path: 'https://webfalainitiative@gmail.com'
    },
    {
        icon: <IoMailOutline />,
        content: 'webfalainitiative@gmail.com',
        path: 'mailto: webfalainitiative@gmail.com'
    }
]
