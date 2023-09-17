import request from 'supertest';
import 'dotenv/config';

const baseUrl = `${process.env.APP_URL}/api`;


describe('POST/ login', () => { 
    test("should respond with a 200 status code", async () => {
        const response = await request(baseUrl).post("/login").send({
          email: "kaungkhantzaw.dev@gmail.com",
          password: "password"
        })
        expect(response.statusCode).toBe(200)
    })
})

