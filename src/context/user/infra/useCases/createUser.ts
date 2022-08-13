import UserRepository from "@context/user/application/user.repository";
import { User } from "@context/user/domain/User";

export default class CreateUserUseCases {
  async exec(item: User) {
    const userRepository = new UserRepository();
    return userRepository.create(item);
  }
}
