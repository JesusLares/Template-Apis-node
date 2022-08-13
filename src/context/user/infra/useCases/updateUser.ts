import UserRepository from "@context/user/application/user.repository";
import { User } from "@context/user/domain/User";

export default class UpdateUserUseCases {
  async exec(id: string, item: User) {
    const userRepository = new UserRepository();
    return userRepository.update(id, item);
  }
}
