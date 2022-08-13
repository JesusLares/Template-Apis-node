import UserRepository from "@context/user/application/user.repository";

export default class DeleteUserUseCases {
  async exec(id: string) {
    const userRepository = new UserRepository();
    return userRepository.delete(id);
  }
}
