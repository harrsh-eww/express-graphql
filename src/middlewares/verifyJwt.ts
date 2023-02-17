import { NextFunction, Request, Response } from 'express';

const VerifyJwt = (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    req.user = {
        name: 'Harrsh',
    };

    next();
};

export default VerifyJwt;
