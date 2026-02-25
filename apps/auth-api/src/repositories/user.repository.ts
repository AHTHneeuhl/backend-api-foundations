/**
 * User Repository
 * Handles database access only
 * No business rules allowed
 */
export class UserRepository {
  findByEmail(_email: string) {
    throw new Error("Not implemented");
  }

  createUser() {
    throw new Error("Not implemented");
  }
}
