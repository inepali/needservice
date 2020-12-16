import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Needs} from "../entity/Needs";

export class NeedController {

    private needRepository = getRepository(Needs);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.needRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.needRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.needRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.needRepository.findOne(request.params.id);
        await this.needRepository.remove(userToRemove);
    }

    async findById(request: Request, response: Response, next: NextFunction) {
        console.log(request.params.id);
        console.log(this.needRepository);

        return await this.needRepository.findByIds(request.params.id);
    }

}