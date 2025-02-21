import Logo from './assets/images/logo.jpg'
import DefaultImage from './assets/images/HMGmembercard01.jpg'

const Site = {
  title: 'Hills Makan Group International',
  description:
    'Step into a world of flavors with HMG (Hills Makan Group) International – a dynamic platform where food, business, and community come together. More than just a culinary experience, we foster connections across industries, uniting businesses and food lovers to support, collaborate, and grow. Join us in building a global network of flavors, friendships, and endless opportunities!',
  link: 'https://linktr.ee/hillsmakangroup',
  author: {
    name: 'Chris Tham',
    url: 'https://christham.net',
    email: 'chris@christham.net',
    summary: 'Outrageous actualiser.'
  },
  org: {
    name: 'HMG International',
    url: 'https://hmginternational.com',
    email: 'aaron@hmginternational.com',
    summary:
      "HMG International is a vibrant and diverse community brought together by our shared love for food and culture. So, anyone and everyone are welcome to join. Our group celebrates the beauty of diversity through a variety of cuisines. From tantalizing street food to gourmet delights, mouthwatering Asian street food to classic European dishes, there's always something new to savor."
  },
  location: 'Sydney, Australia',
  latlng: [-33.86785, 151.20732] as [number, number],
  repository: 'https://github.com/HillsMakan/sydneyhillsmakan',
  logo: Logo,
  image: DefaultImage,
  buildTime: new Date()
}

export default Site
