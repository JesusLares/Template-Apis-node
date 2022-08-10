import UserRepository from "@context/user/application/user.repository";
import User from "@context/user/domain/User";
import { UserModel } from "@context/user/domain/UserModel";

export default class CreateUserUseCases {
  async exec(item: User): Promise<UserModel> {
    const userRepository = new UserRepository();
    return UserRepository.create(item);
  }
}
