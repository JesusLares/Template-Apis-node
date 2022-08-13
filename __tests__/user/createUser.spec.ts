import {
  connectMemoryDB,
  clearDataBase,
  closeDataBase,
} from "../../src/config/db/mongo-memory";
import { User } from "../../src/context/user/domain/User";
import CreateUser from "../../src/context/user/infra/useCases/createUser";
import UserFactory from "../mocks/factories/userFactory";

beforeAll(() => connectMemoryDB());
afterEach(() => clearDataBase());
afterAll(() => closeDataBase());

describe("Create user useCase", () => {
  const userMock = UserFactory.createDefault();
  const createUser = new CreateUser();

  test("should return the user with the correctly name", async () => {
    const user = await createUser.exec(userMock);
    expect("Jesus Lares").toBe(user.name);
  });

  test("should return an error if params are missing", async () => {
    const user = createUser.exec({} as User);
    await expect(user).rejects.toThrow();
  });
});
