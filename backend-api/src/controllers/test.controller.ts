import express from 'express';

const Test = (req: express.Request, res:express.Response) => {
    return res.status(200).json('Hello, typescripts. from express node.')
}

export {
    Test
}
