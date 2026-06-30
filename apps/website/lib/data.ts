import type { Album, Job, Link, Post, Project } from './interfaces'

export const projects: Project[] = [
  {
    description: 'Setup for automated drift detection, budgets, garbage collection and more.',
    id: 'aws-setup',
    link: 'https://github.com/mellevanderlinde/aws-setup',
    name: 'AWS Account Setup',
  },
  {
    description:
      'Project serving this website. Website design is by ibelick.',
    id: 'portfolio',
    link: 'https://github.com/mellevanderlinde/portfolio',
    name: 'Portfolio',
  },
  {
    description:
      'Shows some contributions to the AWS CDK project.',
    id: 'aws-cdk-contributions',
    link: 'https://github.com/aws/aws-cdk/commits/main/?author=mellevanderlinde',
    name: 'Contributions to AWS CDK',
  },
  {
    description: 'ESLint config I use for my projects.',
    id: 'eslint-config',
    link: 'https://github.com/mellevanderlinde/eslint-config',
    name: 'ESLint Config',
  },
  {
    description:
      'Connect to AWS from GitHub Actions using OpenID Connect.',
    id: 'oidc-aws-github',
    link: 'https://github.com/mellevanderlinde/oidc-aws-github',
    name: 'OIDC for AWS and GitHub Actions',
  },
]

export const jobs: Job[] = [
  {
    company: 'PostNL',
    end: 'Present',
    id: 'cloud-engineer',
    link: 'https://postnl.nl/en',
    start: '2023',
    title: 'Cloud Engineer',
  },
  {
    company: 'PostNL',
    end: '2023',
    id: 'mlops-engineer',
    link: 'https://postnl.nl/en',
    start: '2021',
    title: 'MLOps Engineer',
  },
]

export const posts: Post[] = [
  {
    description: 'How to use CDK and GitHub Actions to deploy to AWS',
    id: 'blog-oidc',
    link: '/blog/openid-connect-aws-github',
    title: 'Connect GitHub Actions with AWS using OpenID Connect',
  },
]

export const links: Link[] = [
  {
    link: 'https://github.com/mellevanderlinde',
    name: 'GitHub',
  },
  {
    link: 'https://www.linkedin.com/in/mellevdlinde',
    name: 'LinkedIn',
  },
]

export const albums: Album[] = [
  {
    albumId: '6JD4Qerb8IcaAzFgpFw0sa?si=9YTAzgCkQCa5pHpY7LaMiw',
    coverId: 'ab67616d0000b273b2f893f4215f2930e7320355',
    name: 'Kaytranada - 99.9%',
  },
  {
    albumId: '2JJLmqo6s5nfZtvw6xjwYP?si=5wNEINkiR_WSJOWWr64isQ',
    coverId: 'ab67616d0000b27395570172e1bd5b3874b50a99',
    name: 'George Benson - Living Inside Your Love',
  },
  {
    albumId: '3qr4pTBWEU1SVf01j6RAx3?si=DAkqJFsAQs--Vfx6mlKKiw',
    coverId: 'ab67616d0000b273b5e18a80757ba2f787213d21',
    name: 'Erykah Badu - Baduizm',
  },
  {
    albumId: '5bUDuXJSMeZTNRi1C3Ny0b?si=myJMaI0ER9KR6n3XFXnUXg',
    coverId: 'ab67616d0000b27393d15172f9f99db10257401e',
    name: 'SIM—OJ - Cirkels',
  },
  {
    albumId: '5YlBA1tCY0M8DDs75RB2LY?si=vc-TCb0bS_WBEgUecnjgVQ',
    coverId: 'ab67616d0000b273cac9b52107643faf13a7587b',
    name: 'Olivia Dean - Messy',
  },
  {
    albumId: '53WnDiMAKdL0Lwfz6ckxvx?si=hNs-terCRrWzTPedWAuG5g',
    coverId: 'ab67616d0000b273487cf157c88f06f786b263f3',
    name: 'Toco - Outro Lugar',
  },
  {
    albumId: '0QKxAVLThjxBdT4R6zf6Ke?si=uKJyhFOGRWWS7669VAPibw',
    coverId: 'ab67616d0000b2739aa950a88e0dc1d58dcaaa2c',
    name: 'Champion - Motherboard EP',
  },
  {
    albumId: '0YF8PfcGbsKg5IaFyPnlyY?si=EGPQSxgXR9GES3yd6vZuJA',
    coverId: 'ab67616d0000b2733d5b8fe604275dfab677bd0d',
    name: 'Anderson .Paak - Ventura',
  },
  {
    albumId: '4HTVABUq8amDUxBv3zJbX4?si=ZzXh8E3oTyu9KMLwVDS3xA',
    coverId: 'ab67616d0000b273f6465d4b8cdd34ed4d7853e2',
    name: 'D\'Angelo - Brown Sugar',
  },
  {
    albumId: '5u8ri4s76Ew14IwGOJf5hI?si=faaf85581a6f434a',
    coverId: 'ab67616d0000b273fdab242b02783baa895a5a70',
    name: 'N.E.R.D. - In Search Of...',
  },
  {
    albumId: '6reTSIf5MoBco62rk8T7Q1?si=xTvIz6X-Q9SXuwtSQXeQpQ',
    coverId: 'ab67616d0000b273d254ca497999ae980a5a38c5',
    name: 'Queen - Hot Space',
  },
  {
    albumId: '7AXixkDgPe0WxaVuwD4qT1?si=lFtlf4vYTrig9vZZE84qXA',
    coverId: 'ab67616d0000b27320e994fc0903d4a586991a2e',
    name: 'Sam Gellaitry - VF VOL II',
  },
  {
    albumId: '2A5yzYdLTVTLQaCp4CTKwG?si=c74363e590cb4943',
    coverId: 'ab67616d000082c18d4db6f2356f933e0321633f',
    name: 'Yussef Dayes - Black Classical Music',
  },
  {
    albumId: '2noRn2Aes5aoNVsU6iWThc?si=c1236d23db4c44d4',
    coverId: 'ab67616d0000b2732c25dad9f8fd54652f7ba5df',
    name: 'Daft Punk - Discovery',
  },
  {
    albumId: '5uRdvUR7xCnHmUW8n64n9y?si=849bf0f7345d4d4c',
    coverId: 'ab67616d0000b2738ac778cc7d88779f74d33311',
    name: 'Daft Punk - Homework',
  },
  {
    albumId: '5dmYtZVJ1bG9RyrZBRrkOA?si=U9pX8Q26RtCYqA0g8APjTA',
    coverId: 'ab67616d0000b2731216e4f7e84af70ef18146ed',
    name: 'Air - Moon Safari',
  },
  {
    albumId: '3g9O7pvuaaFRvdzsoSJXVc?si=HSY05-64Q6uH2ko531PKDw',
    coverId: 'ab67616d0000b273988970b40aca1d4cfb3edc3d',
    name: 'Air - Premiers Symptômes',
  },
  {
    albumId: '0X1R9oJfADbmCxXb4II8G8?si=e021a8992ffd4b78',
    coverId: 'ab67616d0000b27345e164e2e09a77ae799832d3',
    name: 'Koop - Waltz For Koop',
  },
  {
    albumId: '7xl50xr9NDkd3i2kBbzsNZ?si=9-cGLABxTLSBa0fRD-Ngig',
    coverId: 'ab67616d0000b27309fd83d32aee93dceba78517',
    name: 'Red Hot Chili Peppers - Stadium Arcadium',
  },
  {
    albumId: '2Y9IRtehByVkegoD7TcLfi?si=K5ZBUZZjRmCjnk-mCDUVHg',
    coverId: 'ab67616d0000b27394d08ab63e57b0cae74e8595',
    name: 'Red Hot Chili Peppers - Californication',
  },
]
