import schoolmedImg from '../assets/projects/schoolmed.png'
import ultrashotImg from '../assets/projects/ultrashot.png'

export interface Project {
  id: number
  title: string
  subtitle?: string
  tagline: string
  description: string
  thumbnail: string
  href?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "SchoolMed",
    subtitle: "Réussir son année de médecine",
    tagline: "Comment la startup de mon patron a foiré :)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu nibh id est aliquam porttitor eget vitae libero. Etiam sodales urna nec tempor congue. Sed vel placerat nisi, nec imperdiet quam. Phasellus faucibus elementum neque, in aliquet turpis. Aliquam vitae leo velit. Curabitur libero eros, ultricies a scelerisque non, dictum ut ex. Donec nec felis sollicitudin, laoreet augue quis, accumsan justo. Etiam in condimentum est, sed rutrum justo. Duis sodales ipsum vestibulum sagittis commodo.",
    thumbnail: schoolmedImg,
    href: "#"
  },
  {
    id: 2,
    title: "UltraShot",
    subtitle: "Deviens Mangaka",
    tagline: "Comment j'ai foiré ma startup à mon tour :)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu nibh id est aliquam porttitor eget vitae libero. Etiam sodales urna nec tempor congue. Sed vel placerat nisi, nec imperdiet quam. Phasellus faucibus elementum neque, in aliquet turpis. Aliquam vitae leo velit. Curabitur libero eros, ultricies a scelerisque non, dictum ut ex. Donec nec felis sollicitudin, laoreet augue quis, accumsan justo. Etiam in condimentum est, sed rutrum justo. Duis sodales ipsum vestibulum sagittis commodo.",
    thumbnail: ultrashotImg,
    href: "#"
  },
]