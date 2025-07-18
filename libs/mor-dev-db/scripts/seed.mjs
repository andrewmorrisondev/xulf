import { morDevPrisma } from '@xulf/mor-dev-prisma';
const prisma = new morDevPrisma();

async function main() {
  await prisma.user.upsert({
    where: { email: 'andy@morrisondevelopers.com' },
    update: {},
    create: {
      email: 'andy@morrisondevelopers.com',
      path: 'morrison-developers',
      name: 'Andy Morrison',
    }
  });
  console.log('Seeded client: andy@morrisondevelopers.com');

  await prisma.user.upsert({
    where: { email: 'morrison.andrew422@gmail.com' },
    update: {},
    create: {
      email: 'morrison.andrew422@gmail.com',
      path: 'andrew-morrison',
      name: 'Andrew (user)',
    }
  });
  console.log('Seeded user: morrison.andrew422@gmail.com');
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});