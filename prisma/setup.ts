import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error']
})

const users = [
  {
    id: 1,
    firstName: 'Jurgen',
    lastName:  'Hasmeta',
    userName:  'avenger22',
    gender:     'M',
    birthday:  '22/12/1997',
    phoneNumber: '06933344123',
    email: 'jurgenhasmeta@email.com',
    password: bcrypt.hashSync("jurgen123", 8),
    createdAt: "2020-03-18T14:21:00+02:00",
    updatedAt: "2021-03-18T14:21:00+02:00"
  },
  {
    id: 2,
    firstName: 'Egon',
    lastName:  'Loli',
    userName:  'egon12',
    gender:     'M',
    birthday:  '20/11/1996',
    phoneNumber: '06723344123',
    email: 'egonloli@email.com',
    password: bcrypt.hashSync("egon123", 8),
    createdAt: "2018-01-18T14:21:00+02:00",
    updatedAt: "2022-03-18T14:21:00+02:00"
  }
]

const logins = [
  {
    id: 1,
    status: "succes",
    createdAt: "2021-03-18T14:21:00+02:00",
    userId: 1
  },
  {
    id: 2,
    status: "success",
    createdAt: "2020-02-18T14:21:00+02:00",
    userId: 1
  },
  {
    id: 3,
    status: "success",
    createdAt: "2018-01-18T14:21:00+02:00",
    userId: 2
  }
]

const avatars = [
  {
    id: 1,
    height: 250,
    width: 55,
    src: "item1.jpg",
    createdAt: "2020-05-18T14:21:00+02:00",
    updatedAt: "2020-07-18T14:21:00+02:00",
    userId: 1
  },
  {
    id: 2,
    height: 250,
    width: 55,
    src: "item2.jpg",
    createdAt: "2010-05-18T14:21:00+02:00",
    updatedAt: "2020-07-18T14:21:00+02:00",
    userId: 2
  }
]

const photos = [
  {
    id: 1,
    caption: "vacation in bahamas",
    height: 500,
    width: 555,
    createdAt: "2020-05-18T14:21:00+02:00",
    updatedAt: "2020-07-18T14:21:00+02:00",
    src: "item1.jpg",
    userId: 1
  },
  {
    id: 2,
    caption: "vacation in durres",
    height: 500,
    width: 555,
    createdAt: "2020-08-18T14:21:00+02:00",
    updatedAt: "2020-07-18T14:21:00+02:00",
    src: "item1.jpg",
    userId: 2
  },
  {
    id: 3,
    caption: "vacation in kosova",
    height: 500,
    width: 555,
    createdAt: "2020-02-18T14:21:00+02:00",
    updatedAt: "2020-08-18T14:21:00+02:00",
    src: "item1.jpg",
    userId: 1
  }
]

const comments = [
  {
    id: 1,
    content: "hi i am jurgen",
    createdAt: "2020-01-18T14:21:00+02:00",
    updatedAt: "2020-02-18T14:21:00+02:00",
    userId: 1,
    photoId: 2
  },
  {
    id: 2,
    content: "hi i am egon",
    createdAt: "2020-08-18T14:21:00+02:00",
    updatedAt: "2020-09-18T14:21:00+02:00",
    userId: 2,
    photoId: 1
  }
]

const commentLikes = [
  {
    id: 1,
    createdAt: "2020-05-18T14:21:00+02:00",
    updatedAt: "2020-06-18T14:21:00+02:00",
    userId: 1,
    commentId: 2
  },
  {
    id: 2,
    createdAt: "2020-09-18T14:21:00+02:00",
    updatedAt: "2020-10-18T14:21:00+02:00",
    userId: 2,
    commentId: 1
  }
]

const photoLikes = [
  {
    id: 1,
    createdAt: "2020-02-18T14:21:00+02:00",
    updatedAt: "2020-08-18T14:21:00+02:00",
    userId: 1,
    photoId: 2
  },
  {
    id: 2,
    createdAt: "2020-09-18T14:21:00+02:00",
    updatedAt: "2020-11-18T14:21:00+02:00",
    userId: 2,
    photoId: 1
  }
]

const follows = [
  {
    id: 1,
    createdAt: "2020-02-18T14:21:00+02:00",
    updatedAt: "2020-08-18T14:21:00+02:00",
    followerId: 1,
    followingId: 2
  },
  {
    id: 2,
    createdAt: "2020-02-18T14:21:00+02:00",
    updatedAt: "2020-08-18T14:21:00+02:00",
    followerId: 2,
    followingId: 1
  }
]

async function createStuff () {

  await prisma.commentLike.deleteMany()
  await prisma.photoLike.deleteMany()
  await prisma.login.deleteMany()
  //@ts-ignore
  await prisma.follows.deleteMany()
  await prisma.avatar.deleteMany()
  await prisma.comment.deleteMany()
  await prisma.photo.deleteMany()
  await prisma.user.deleteMany()

  for (const user of users) {
    await prisma.user.create({ data: user })
  }

  for (const photo of photos) {
    await prisma.photo.create({ data: photo })
  }

  for (const comment of comments) {
    await prisma.comment.create({ data: comment })
  }

  for (const avatar of avatars) {
    await prisma.avatar.create({ data: avatar })
  }

  for (const login of logins) {
    await prisma.login.create({ data: login })
  }

  for (const photoLike of photoLikes) {
    await prisma.photoLike.create({ data: photoLike })
  }

  for (const commentLike of commentLikes) {
    await prisma.commentLike.create({ data: commentLike })
  }

  for (const follow of follows) {
    //@ts-ignore
    await prisma.follows.create({ data: follow })
  }

}

createStuff()