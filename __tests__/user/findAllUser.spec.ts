import {
  connectMemoryDB,
  clearDataBase,
  closeDataBase,
} from "../../src/config/db/mongo-memory";
import CreateUser from "../../src/context/user/infra/useCases/createUser";
import FindUser from "../../src/context/user/infra/useCases/findAllUser";
import UserFactory from "../mocks/factories/userFactory";

beforeAll(() => connectMemoryDB());
afterEach(() => clearDataBase());
afterAll(() => closeDataBase());

describe("Find all user useCase", () => {
  const userMock = UserFactory.createDefault();
  const findUser = new FindUser();
  const createUser = new CreateUser();

  test("should return all user type in the db", async () => {
    await createUser.exec(userMock);
    const user = await findUser.exec({});
    expect(user.length).toBe(1);
  });

  test("should return an empty array if there arent user", async () => {
    const user = await findUser.exec({});
    expect(user.length).toBe(0);
  });
});
