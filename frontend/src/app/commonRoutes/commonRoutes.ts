import { useRouter } from "next/navigation";

const router = useRouter();

export default function commomRoutes(){


    const handleNewPlayer = () => {
        router.push('/player/new');
    };

    const handleNewTeam = () => {
        router.push('/team/new');
    };

    const handleTeamList = () => {
        router.push('/team/list');
    };

    const handleHome = () => {
        router.push('/');
    };

    const handlePlayerList = () => {
        router.push('/player/list');
    };


return {

    handleHome,
    handlePlayerList,
    handleTeamList,
    handleNewTeam,
    handleNewPlayer

}
}

