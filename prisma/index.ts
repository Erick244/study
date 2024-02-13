import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();

const prisma = new PrismaClient();

app.use(express.json());

app.get("/users", async (req, res) => {
    const allUsers = await prisma.user.findMany();
    res.status(200).json(allUsers);
});

app.post("/signup", async (req, res) => {
    const user = req.body;
    const result = await prisma.user.create({
        data: user,
    });
    res.status(200).json(result);
});

app.post("/post", async (req, res) => {
    const { title, content, authorEmail } = req.body;
    const result = await prisma.post.create({
        data: {
            title,
            content,
            author: {
                connect: {
                    email: authorEmail,
                },
            },
        },
    });

    res.status(200).json(result);
});

app.put("/post/:id/views", async (req, res) => {
    const { id } = req.params;

    const result = await prisma.post.update({
        where: { id: Number(id) },
        data: {
            viewCount: {
                increment: 1,
            },
        },
    });

    res.status(200).json(result);
});

app.put("/publish/:id", async (req, res) => {
    const { id } = req.params;
    const result = await prisma.post.update({
        where: { id: Number(id) },
        data: {
            published: true,
        },
    });

    res.status(200).json(result);
});

app.get("/post/:id", async (req, res) => {
    const { id } = req.params;
    const result = await prisma.post.findUnique({
        where: { id: Number(id) },
    });

    res.status(200).json(result);
});

app.get("/feed", async (req, res) => {
    const { searchString, take, skip } = req.query;

    const or = searchString
        ? {
              OR: [
                  { title: { contains: searchString as string } },
                  { content: { contains: searchString as string } },
              ],
          }
        : {};

    const result = await prisma.post.findMany({
        skip: Number(skip) || undefined,
        take: Number(take) || undefined,
        where: {
            published: true,
            ...or,
        },
    });

    res.status(200).json(result);
});

async function main() {
    app.listen(3000, () => console.log("Listening on port 3000"));
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
