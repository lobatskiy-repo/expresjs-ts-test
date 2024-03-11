import { Request, Response } from "express-serve-static-core";
import { CreateUserDto } from "../dtos/CreateUsers.dto";
import { CreateUserQueryParams } from "../types/query-params";
import { User } from "../types/response";

export function getUsers(request: Request, response: Response) {
  response.send([]);
}
export function getUsersById(request: Request, response: Response) {
  response.send({});
}
export function createUsers(
  request: Request<{ id: string }, {}, CreateUserDto, CreateUserQueryParams>,
  response: Response<User>
) {
  // request.params.id
  // request.body.email;
  // request.query.logitAfterCreate

  // request.customField

  // request.sessionID

  // request.user

  response
    .status(201)
    .send({ id: "123", name: "Andriy", email: "andriy@andrit.com" });
}
