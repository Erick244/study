import { Address } from "../products/address.product";
import { UserProfile } from "../products/user-profile.product";

export class UserProfileBuilder {
    private userProfile: UserProfile;

    reset(): void {
        this.userProfile = new UserProfile();
    }

    setName(name: string): void {
        this.userProfile.name = name;
    }

    setAge(age: number): void {
        this.userProfile.age = age;
    }

    setEmail(email: string): void {
        this.userProfile.email = email;
    }

    setAddress(address: Address): void {
        this.userProfile.address = address;
    }

    build(): UserProfile {
        return this.userProfile;
    }
}
