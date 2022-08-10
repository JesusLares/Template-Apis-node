import UserRepository from "@context/user/application/user.repository";
import { UserModel } from "@context/user/domain/UserModel";

export default class FindOneUserUseCases {
  async exec(query: object): Promise<UserModel> {
    const userRepository = new UserRepository();
    return UserRepository.findOne(query);
  }
}
