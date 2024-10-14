import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Users
  const users = [
    { name: 'Michael Busch', email: 'michael@example.com' },
    { name: 'Nicolas John', email: 'nicolas@example.com' },
    { name: 'Diego Godel', email: 'diego@example.com' },
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: user,
    });
  }

  // Seed Comments
  const comments = [
    {
      content: "Dummy comment - But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings...",
      userId: 1, // Michael Busch
    },
    {
      content: "Lorem before you memorize <3 - So why is every Spaced Repetition in a piece of content until you have learned that content once?",
      userId: 1, // Michael Busch
    },
    {
      content: "Dummy comment - But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings...",
      userId: 1, // Michael Busch
    },
    {
      content: "Take a second to say hello.",
      userId: 2, // Nicolas John
    },
    {
      content: "Ecosystems and Communities",
      userId: 1, // Michael Busch
    },
    {
      content: "Dummy comment - But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings...",
      userId: 1, // Michael Busch
    },
    {
      content: "And I really meant it!",
      userId: 1, // Michael Busch
    },
    {
      content: "Seriously",
      userId: 1, // Michael Busch
    },
  ];

  for (const comment of comments) {
    await prisma.comment.create({
      data: comment,
    });
  }

  console.log('Seed data inserted successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
