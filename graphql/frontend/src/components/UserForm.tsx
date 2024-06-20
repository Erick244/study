import { FormEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { GET_USERS } from "@/pages";
import { client } from "@/lib/apollo";

const CREATE_USER = gql`
    mutation ($name: String!) {
        createUser(name: $name) {
            id
            name
        }
    }
`;

export default function UserForm() {
    const [name, setName] = useState("");

    const [createUser, { data, loading }] = useMutation(CREATE_USER);

    async function handlerCreatUser(event: FormEvent) {
        event.preventDefault();

        if (!name) return;

        const user = await createUser({
            variables: {
                name,
            },
            // refetchQueries: [GET_USERS]
            update: async (cache, { data: { createUser } }) => {
                const { users } = await client.readQuery({ query: GET_USERS });

                cache.writeQuery({
                    query: GET_USERS,
                    data: {
                        users: [...users, createUser],
                    },
                });
            },
        });

        console.log(user);
    }

    return (
        <form onSubmit={handlerCreatUser}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    );
}
