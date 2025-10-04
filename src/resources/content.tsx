import { About, Hire, Gallery, Home, Newsletter, Person, Social, Commission } from '@/types'
import { Line, Logo, Row, Text } from '@once-ui-system/core'

const bryony: Person = {
  firstName: 'Bryony',
  lastName: 'Conroy',
  name: 'Bryony Conroy',
  role: 'Designer',
  avatar: '/images/avatar.jpg',
  email: 'example@gmail.com',
  ianaLocation: 'Europe/London'
}

const about: About = {
  path: '/about',
  label: 'About',
  title: `About – ${bryony.name}`,
  description: `Meet ${bryony.name}, ${bryony.role} from ${bryony.ianaLocation}`,
  avatar: {
    display: true
  }
}

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {bryony.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>
}

const social: Social = [
  {
    name: 'Instagram',
    icon: 'instagram',
    link: 'https://instagram.com/bryfly2000'
  },
  {
    name: 'Email',
    icon: 'email',
    link: `mailto:${bryony.email}`
  }
]

const home: Home = {
  path: '/',
  image: '/images/og/home.jpg',
  label: 'Home',
  title: 'BryFly | Bespoke Disco Balls',
  description: 'Bespoke disco balls for events, spaces and shows.',
  headline: 'Building bridges between design and code',
  featured: {
    display: true,
    title: (
      <Row gap='12' vertical='center'>
        <strong className='ml-4'>Once UI</strong>{' '}
        <Line background='brand-alpha-strong' vert height='20' />
        <Text marginRight='4' onBackground='brand-medium'>
          Featured work
        </Text>
      </Row>
    ),
    href: '/work/building-once-ui-a-customizable-design-system'
  },
  subline: (
    <>
      I'm Selene, a design engineer at{' '}
      <Logo
        dark
        icon='/trademarks/wordmark-dark.svg'
        style={{ display: 'inline-flex', top: '0.25em', marginLeft: '-0.25em' }}
      />
      , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  )
}

const hire: Hire = {
  path: '/hire',
  label: 'Hire',
  title: `Hire – ${bryony.name}`,
  description: `Hire ${bryony.name}, ${bryony.role} from ${bryony.ianaLocation}`
}

const commission: Commission = {
  path: '/commission',
  label: 'Commissions',
  title: `Commissions – ${bryony.name}`,
  description: `Bespoke commissions ${bryony.name}`
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
}

const gallery: Gallery = {
  path: '/gallery',
  label: 'Gallery',
  title: `Photo gallery – ${bryony.name}`,
  description: `A photo collection by ${bryony.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: '/images/gallery/horizontal-1.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/vertical-4.jpg',
      alt: 'image',
      orientation: 'vertical'
    },
    {
      src: '/images/gallery/horizontal-3.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/vertical-1.jpg',
      alt: 'image',
      orientation: 'vertical'
    },
    {
      src: '/images/gallery/vertical-2.jpg',
      alt: 'image',
      orientation: 'vertical'
    },
    {
      src: '/images/gallery/horizontal-2.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/horizontal-4.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/vertical-3.jpg',
      alt: 'image',
      orientation: 'vertical'
    }
  ]
}

export { about, bryony, social, newsletter, home, hire, commission, gallery }
