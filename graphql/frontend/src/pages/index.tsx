import UserForm from "@/components/UserForm";
import { gql, useQuery } from "@apollo/client";

type User = {
    id: string;
    name: string;
};

export const GET_USERS = gql`
    query {
        users {
            id
            name
        }
    }
`;

export default function Home() {
    const { data, loading } = useQuery(GET_USERS);

    if (loading) {
        return <p>Carregando...</p>;
    }

    console.log(data);

    return (
        <div>
            <ul>
                {data?.users.map((user: User) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
			<UserForm />
        </div>
    );
}
