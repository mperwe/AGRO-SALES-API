
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

async function getCategories(req, res){
    const Categories = await prisma.category.findMany()
    res.send("Categories")

}
module.exports = getCategories;
