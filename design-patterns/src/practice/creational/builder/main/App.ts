import { AddressBuilder } from "../builders/address.builder";
import { UserProfileBuilder } from "../builders/user-profile.builder";
import { AddressDirector } from "../directors/address.director";
import { UserProfileDirector } from "../directors/user-profile.director";

export class Application {
    public main() {
        const userProfileBuilder = new UserProfileBuilder();
        const userProfileDirector = new UserProfileDirector(userProfileBuilder);
        userProfileDirector.buildDefaultUserProfile("example@example.com", 20);
        const userProfile = userProfileBuilder.build();

        const addressBuilder = new AddressBuilder();
        const addressDirector = new AddressDirector(addressBuilder);
        addressDirector.buildDefaultAddress("Unknown street address", "123456");
        const address = addressBuilder.build();

        userProfileBuilder.setAddress(address);

        console.log(JSON.stringify(userProfile, null, 2));
    }
}
