import UserRepository from "@context/user/application/user.repository";
import { UserModel } from "@context/user/domain/UserModel";

export default class DeleteUserUseCases {
  async exec(id: string): Promise<UserModel> {
    const userRepository = new UserRepository();
    return UserRepository.delete(id);
  }
}
